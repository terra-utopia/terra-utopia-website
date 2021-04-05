<template>
    <div class="TruncatedHeight"
        :style="{
            height: cssTruncatedHeight,
            transitionDuration: cssTransitionDurationMs+'ms',
            transitionTimingFunction: cssTransitionEasing
        }"
    >
        <div class="TruncatedHeight-body" ref="TruncatedHeight-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { forceReflow } from '~/assets/util';

let lastActionTimestamp;  // used to invalidate old timeouts

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
            cssTruncatedHeight: this.expanded ? "auto" : "0px",
        };
    },
    watch: {
        expanded: async function() {  // called whenever the 'expanded' prop changes
            if (this.expanded) {
                const actionTimestamp = lastActionTimestamp = performance.now();
                this.cssTruncatedHeight = `${this.getBodyHeight()}px`;  // starts css transition
                setTimeout(() => {
                    // switch to css auto height if no newer action has already started
                    if (lastActionTimestamp === actionTimestamp) {
                        this.cssTruncatedHeight = "auto";
                    }
                }, this.cssTransitionDurationMs);
            }
            else {  // collapse
                lastActionTimestamp = performance.now();
                this.cssTruncatedHeight = `${this.getBodyHeight()}px`; // switch from css auto height to absolute pixels
                await new Promise(resolve => { this.$nextTick(resolve) });  // wait until DOM has been updated
                forceReflow(); // force reflow to ensure the intermediary value processed properly and not dropped for performance reasons
                this.cssTruncatedHeight = `0px`;  // starts css transition
            }
        },
    },
    mounted() {
        // restart expansion transition (with updated target height) if body resizes during expansion
        new ResizeObserver(() => {
            if (this.expanded && this.cssTruncatedHeight !== "auto") {
                const actionTimestamp = lastActionTimestamp = performance.now();
                this.cssTruncatedHeight = `${this.getBodyHeight()}px`;  // starts css transition
                setTimeout(() => {
                    // switch to css auto height if no newer action has already started
                    if (lastActionTimestamp === actionTimestamp) {
                        this.cssTruncatedHeight = "auto";
                    }
                }, this.cssTransitionDurationMs);
            }
        }).observe(this.$refs["TruncatedHeight-body"]);
    },
    methods: {
        getBodyHeight() {
            return this.$refs["TruncatedHeight-body"].getBoundingClientRect().height;
        },
    },
};
</script>


<style lang="scss">
.TruncatedHeight {
    overflow: hidden;
    transition-property: height;
    // transition-duration; // set in-line via javascript (see above)
    // transition-timing-function; // set in-line via javascript (see above)
}
</style>
