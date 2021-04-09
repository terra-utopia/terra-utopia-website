<template>
    <div class="TruncatedHeight" :class="{ 'expanded': expanded }"
        :style="{
            'height': cssHeight,
            'transition-duration': cssTransitionDurationMs+'ms',
            'transition-timing-function': cssTransitionEasing,
        }"
        @transitionend.self="handleTransitionEnd()"
    >
        <div class="TruncatedHeight-body"
            ref="TruncatedHeight-body"
            :style="{ 'transition-duration': cssTransitionDurationMs+'ms' }"
        >
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
            default: 1500,
        },
        cssTransitionEasing: {
            type: String,
            default: 'ease-in-out',
        },
    },
    data() {
        return {
            cssHeight: this.expanded ? "auto" : "0px",
        };
    },
    methods: {

        getBodyHeight() {
            return this.$refs["TruncatedHeight-body"].getBoundingClientRect().height;
        },

        async updateAction() {  // don't worry about the `async`, all the asynchronous `await`s are handeled savely (invalidation via actionTimestamps)
            /* general info:
                - we only ever change the css `height` property between a `px` value and the `auto` value
                - we can savely change a `px` value to another `px` in running transitions, because the default behavior starts the new transition from the currently interpolated value of the running transition (no jump)
                - when we switch between `px` values and `auto` value, a jump happens, so we're only allowed to make that switch when the resulting heights are equivalent and the jump will therefore be invisible
            */

           const actionTimestamp = lastActionTimestamp = performance.now();  // log the new action timestamp (invalidates old promise callbacks that would only continue with an older actionTimestamp)
            
            if (this.expanded) {
                if (this.cssHeight === 'auto') {
                    // - we don't need to do anything, the component is already expanded
                }
                else {  // `this.cssHeight` is a `px` value
                    // - the component is currently collapsed and is to be opened now, or it has just been resized during an opening transition
                    // - `this.cssHeight` currently is a `px` value, so we can savely change it to the target `px` value, which is equivalent to `auto` height, so that we can then savely replace the `px` with `auto` on `transitionend`
                    this.cssHeight = `${this.getBodyHeight()}px`;
                    // - the switch to `height: auto` is triggered via the `transitionend` event (see `handleTransitionEnd()` below)
                }
            }
            else {  // aka `this.expanded === false`
                if (this.cssHeight === 'auto') {
                    // - to prevent a jump from `auto` to `0px`, we first switch to a `px` value equivalent to `auto`
                    this.cssHeight = `${this.getBodyHeight()}px`; // switch from css auto height to absolute pixels
                    await new Promise(resolve => { this.$nextTick(resolve) });  // wait for DOM update
                    if (lastActionTimestamp !== actionTimestamp) return;  // abort if newer action has already started (unlikely but possible due to async/await)
                    forceReflow(); // force browser engine "reflow" to ensure the intermediary css 'height' value is processed properly instead of being dropped because the next update to `0px` is immediately afterwards
                }
                else {
                    // - the current `cssHeight` is a `px` value, so we can directly set `0px` without a jump
                }
                this.cssHeight = `0px`;
            }
        },

        handleTransitionEnd() {
            // - the `transitionend` event does not occur if transition has been canceled and re-started, it only occurs if a transition successfully finished and has reached its end state
            // - therefore this handler is only invoked if the component is 100% opened or 100% collapsed
            if (this.expanded) {
                // - the component has been successfully opened, we can now switch to `height: auto`
                this.cssHeight = "auto";
            }
        },
    },
    watch: {
        expanded: async function() {  // called whenever the 'expanded' prop changes
            this.updateAction();
        },
    },
    mounted() {
        new ResizeObserver(() => {  // if body resizes during an opening transition, re-start it (with updated target height)
            if (this.expanded && this.cssHeight !== "auto") {
                this.updateAction();
            }
        }).observe(this.$refs["TruncatedHeight-body"]);
    },
};
</script>


<style lang="scss">
.TruncatedHeight {
    overflow: hidden;
    // height; // set in-line via template/script (see above)
    transition-property: height;
    // transition-duration; // set in-line via vue template/script (see above)
    // transition-timing-function; // set in-line via template/script (see above)

    &.expanded {
        .TruncatedHeight-body {
            opacity: 1;
        }
    }
    .TruncatedHeight-body {
        opacity: 0;
        // transition-duration; // set in-line via vue template/script (see above)
        transition-property: opacity;
        transition-timing-function: cubic-bezier(.14,.57,.86,.43);
    }
}
</style>
