<template>
    <button class="ActionButton" :class="{ 'inverted': inverted }">
        <slot></slot>
    </button>
</template>



<script>
export default {
    props: {
        inverted: {
            type: Boolean,
            default: false,
        },
    },
};
</script>


<style lang="scss" scoped>
@import '~/assets/shared-styles.scss';

button.ActionButton {
    @include d-large-text;
    @include bold;
    letter-spacing: 0.05em;
    padding: 6px 16px;

    &:not(.inverted):not(:hover), &.inverted:hover {
        color: $c-extralight;
        text-shadow: 0 2px 4px rgba(black, 0.40);  // overwrites `text-shadow` from mixin `d-large-text`
        background: $c-dark;
        box-shadow: 0px 2px 4px rgba(black, 0.40);
    }
    &:not(.inverted):hover, &.inverted:not(:hover) {
        color: $c-dark;
        text-shadow: 0 2px 4px rgba(black, 0.25);  // overwrites `text-shadow` from mixin `d-large-text`
        position: relative; // for `absolute` position child `::after`

        &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border: 2px solid $c-dark;
            filter: drop-shadow(0 1.2px 2px rgba(black, 0.30));
        }
    }
    &:hover {
        cursor: pointer;
    }
}
</style>