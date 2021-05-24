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
    box-shadow: 0px 2px 4px rgba(black, 0.40);

    $padding-v: 6px;
    $padding-h: 16px;

    &:not(.inverted), &.inverted:hover {
        color: $c-extralight;
        text-shadow: 0 2px 4px rgba(black, 0.40);  // overwrites `text-shadow` from mixin `d-large-text`
        background: $c-dark;
        padding: {
            top: $padding-v;
            bottom: $padding-v;
            left: $padding-h;
            right: $padding-h;
        };
    }
    &:not(.inverted):hover, &.inverted {
        color: $c-dark;
        text-shadow: 0 2px 4px rgba(black, 0.25);  // overwrites `text-shadow` from mixin `d-large-text`
        background: transparent;
        $border-width: 2px;
        border: $border-width solid $c-dark;
        padding: {
            top: $padding-v - $border-width;
            bottom: $padding-v - $border-width;
            left: $padding-h - $border-width;
            right: $padding-h - $border-width;
        };
    }
    &:hover {
        cursor: pointer;
    }
}
</style>