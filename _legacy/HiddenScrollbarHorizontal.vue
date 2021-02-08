<template>
    <div class="HiddenScrollbarHorizontal">
        <div class="HiddenScrollbarHorizontal-outer">
            <div class="HiddenScrollbarHorizontal-inner">
                <slot></slot>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
.HiddenScrollbarHorizontal {
    // this wrapper exists to prevent css overwrite by parent context

    // note: the height of this container will always be the contents height + the height of the hidden scrollbar (this can't be circumvented ...)

    .HiddenScrollbarHorizontal-outer {
        width: 100%;
        height: 100%;
        overflow: hidden;

        .HiddenScrollbarHorizontal-inner {
            max-width: 100%;
            // max-height: 100%;
            // height: calc(100% + 50px);
            // height: 100%;
            margin-bottom: -50px;
            padding-bottom: 50px;
            overflow: auto;
            // margin-right: -100px;
            // margin-bottom: -50px;
            // transition: padding-bottom 1s;
        }
    }
}
</style>