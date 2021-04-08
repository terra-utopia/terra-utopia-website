<template>
    <div class="FixedAspectRatio">
        <div
            class="FixedAspectRatio-outer"
            :style="{ 'padding-bottom': `${heightPercentage}%` }"
        >
            <div class="FixedAspectRatio-inner">
                <slot></slot>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        heightPercentage: {
            type: Number,
            default: 100,
        },
    },
};
</script>



<style lang="scss">
.FixedAspectRatio {
    // this wrapper exists to prevent css overwrite by parent context

    .FixedAspectRatio-outer {
        position: relative;
        width: 100%;
        // height: 0;  // unnecessary
        /* padding-bottom;  is set with javascript (see above) */

        .FixedAspectRatio-inner {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }
    }
}
</style>
