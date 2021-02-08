<!-- PLEASE OVERWRITE THE CSS TRANSITION if you want to -->

<template>
    <div class="TruncatedHeight" :style="{ height: elementHeight, transition }">
        <div class="TruncatedHeight-body" ref="TruncatedHeight-body">
            <!-- just exists as a wrapper to measure height -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        expanded: {
            type: Boolean,
            default: true,
        },
        transition: {
            // the value for the css transition property (hint: only 'height' ever changes)
            type: String,
            default: "height 1.5s ease-in-out",
        },
        collapsedHeight: {
            type: String, // css height value
            default: "0",
        },
    },
    data() {
        return {
            bodyHeight: "auto", // the default value that is not animatable yet :)
        };
    },
    computed: {
        elementHeight() {
            return this.expanded ? this.bodyHeight : this.collapsedHeight;
        },
    },
    mounted() {
        this.updateBodyHeight();
        new ResizeObserver((entries) => {
            this.updateBodyHeight();
        }).observe(this.$refs["TruncatedHeight-body"]);
    },
    methods: {
        updateBodyHeight() {
            this.bodyHeight =
                this.$refs["TruncatedHeight-body"].offsetHeight.toString() +
                "px";
        },
    },
};
</script>


<style lang="scss">
.TruncatedHeight {
    // width defaults to 100% (display block), may be overwritten by consumer
    // height is set in-line with javascript
    // transition is set in-line with javascript
    overflow: hidden;

    .TruncatedHeight-body {
        // just exists as a wrapper to measure height
    }
}
</style>