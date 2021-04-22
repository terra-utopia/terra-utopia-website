<!--
Current Problems:
    - `mask-position` transitions in the beginning from css default value `center` to `0px -${this.collapsedHeight}px`
    - truncation/fadeout is not ideal for bodies that are smaller than `collapsedHeight`
-->
<!--
Idea for rework:
    - don't ever use height `auto` (simplifies code a lot, and makes it hopefully more easy to deal properly with all the mask-position transitions as well)
    - instead completely rely on ResizeObserver, and only toggle `transition-duration` between `0ms` and `1000ms`
    - we need to enable `transition-duration: 1000ms` before setting the target value, and for this we need `await new Promise(resolve => { this.$nextTick(resolve) });` and timestamp invalidation via `lastActionTimestamp`
    - `transition-duration` is toggled ONLY on `watch: expanded`
    - `height` and `mask-position` are changed on `watch: expanded`, `watch: bodyHeight`
-->

<template>
    <div class="TruncatedHeight"
        :class="{ 'expanded': expanded }"
        :style="{
            'height': cssHeight,
            'transition-duration': cssTransitionDurationMs+'ms',
            'transition-timing-function': cssTransitionEasing,
            ... fadeOut ? {
                'mask-size': `100% calc(100% + ${this.collapsedHeight}px)`,
                'mask-image': `linear-gradient(to top, rgba(255, 0, 0, 0) 0, rgba(255, 0, 0, 0.16) ${this.collapsedHeight/6}px, rgba(255, 0, 0, 0.6) ${this.collapsedHeight*0.45}px, rgba(255, 0, 0, 1) ${this.collapsedHeight*0.85}px)`,
                'mask-position': expanded ? '0px 0px' : `0px -${this.collapsedHeight}px`,
            } : {},
        }"
        @transitionend.self="handleTransitionEnd($event)"
    >
        <div class="TruncatedHeight-body" ref="TruncatedHeight-body">
            <slot></slot>
        </div>
    </div>
</template>


<script>
import { forceReflow } from '~/assets/util';

let lastActionTimestamp;  // used to invalidate older async promise callbacks

export default {
    props: {
        expanded: {
            type: Boolean,
            required: true,
        },
        cssTransitionDurationMs: {
            type: Number,
            default: 1000,
        },
        cssTransitionEasing: {
            type: String,
            default: 'ease-in-out',
        },
        collapsedHeight: { // intended to be a fixed value
            type: Number, // number of pixels
            default: 140,
        },
        fadeOut: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            cssHeight: this.expanded ? "auto" : `${this.collapsedHeight}px`,
            bodyHeight: undefined, // first set and kept up-to-date with ResizeObserver in `mounted()` hook (safe because not used before `mounted()` hook)
        };
    },
    methods: {

        async updateHeightAction() {  // don't worry about the `async`, all the asynchronous `await`s are handeled savely (invalidation via actionTimestamps)
            /* general info:
                - this function manages the `height` property (together with the `handleTransitionEnd()` method) because it requires some complex logic (see below)
                - `height` is either a `px` value or the `auto` value
                - only replacing a `px` value with another `px` value yields a smooth transition, if the end or start value is `auto` the transition jumps instantaneously to the end value
                - so we're only allowed to switch from or to `auto` when the heights are already equivalent
                - we can savely change from `px` value to `px` value during a running transition (default behavior: starts the new transition from the currently interpolated value of the running transition - no jump)
            */
           // - situation: this method is called everytime `expanded` prop or `bodyHeight` data prop changes

            const actionTimestamp = lastActionTimestamp = performance.now();  // store the new action timestamp (unique for this function call)(invalidates promise callbacks of older function calls)

            if (this.expanded) {
                if (this.cssHeight !== 'auto') {  // - skip if component is already successfully expanded (eg. happens if `bodyHeight` changes during expanded state)
                    // - because `this.cssHeight` currently is a `px` value, we can savely change it to the target `px` value of the expanded state (which will be equivalent to `auto` height set by the `handleTransitionEnd()` hook) - don't worry that `this.bodyHeight` could become out-dated until then, because we watch `this.bodyHeight` and restart the transition if it changes :D
                    this.cssHeight = `${this.bodyHeight}px`;
                }
            }
            else {  // aka: `this.expanded === false`

                // - prevent a jump from `auto` to target collapsed `px` height by replacing `auto` with an equivalent `px` value
                if (this.cssHeight === 'auto') {
                    this.cssHeight = `${this.bodyHeight}px`;
                    await new Promise(resolve => { this.$nextTick(resolve) });  // wait for DOM update (promise callback)
                    if (lastActionTimestamp !== actionTimestamp) return;  // abort if newer action has already started (unlikely but possible due to async/await)
                    forceReflow();  // force browser engine "reflow" to ensure the intermediary css 'height' value is processed properly instead of being dropped because the next update to `0px` is immediately afterwards
                }

                // - because `this.cssHeight` now always is a `px` value, we can savely change it to the target `px` value of the collapsed state
                this.cssHeight = `${this.collapsedHeight}px`;
            }
        },

        handleTransitionEnd(evt) {
            if (evt.propertyName === 'height') {
                // - the `transitionend` event does not occur if transition has been canceled and re-started, it only occurs if a transition successfully finished 100% to its end state
                // - therefore this handler is only invoked if the component is 100% opened or 100% collapsed
                if (this.expanded) {
                    // - the component has been successfully opened, we can now switch to `height: auto`
                    this.cssHeight = "auto";
                }
            }
        },
    },
    watch: {
        expanded: function() {  // called whenever the 'expanded' prop changes
            this.updateHeightAction();
        },
        bodyHeight: function() {  // called whenever the 'bodyHeight' data changes (when body element resizes)
            this.updateHeightAction(); // - makes sure that transition target value is updated if necessary
        },
    },
    mounted() {
        new ResizeObserver((resizeEntries) => {  // will also be called once initially
            this.bodyHeight = resizeEntries[resizeEntries.length - 1].contentRect.height;
        }).observe(this.$refs["TruncatedHeight-body"]);
    },
};
</script>


<style lang="scss">
.TruncatedHeight {
    overflow: hidden;
    // height;          // set in-line via template/script (see above)
    // mask-size;       //
    // mask-image;      //
    // mask-position;   //
    transition-property: height, mask-position;
    // transition-duration;         // set in-line via vue template/script (see above)
    // transition-timing-function;  //
}
</style>
