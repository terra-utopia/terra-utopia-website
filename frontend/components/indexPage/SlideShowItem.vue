<template>
    <div class="SlideShowItem" v-show="active" :class="{ active: active }">
        <slot></slot>
    </div>
</template>


<script>
export default {
    data() {
        return {
            active: true, // default
        };
    },
};
</script>


<style lang="scss">
.SlideShowItem {
    width: 100%;
    flex-shrink: 0; // this flex shit is used so that when in the beginning (not hydrated page) all slides are visible they are aligned horizontal and only the first one is in viewport

    &.active {
        animation: fade 1s ease-out;
    }
}

@keyframes fade {
    from {
        opacity: 0%;
        // filter: grayscale(100%) brightness(800%);
    }
    to {
        opacity: 100%;
        // filter: grayscale(0%) brightness(100%);
    }
}
</style>