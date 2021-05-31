<template>
    <article class="Card">
        <h1 v-if="heading" :class="{ 'card-super-heading': isSuperHeading }">
            <span v-for="(wordOrSpace, i) in heading.split(/(?= )|(?<= )/)" :key="i">{{ wordOrSpace }}</span>
        </h1>
        <slot></slot>
    </article>
</template>

<script>
export default {
    props: {
        heading: {
            type: String,
            default: "",
        },
        isSuperHeading: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../assets/shared-styles.scss';

.Card {
    // width: 100%; is default (adjusts to parent)
    text-align: center;
    background: #FAFBFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4), 0 4px 50px rgba(0,0,0, 0.25);
    padding: 40px 60px;
    @media (max-width: 650px) { padding: 30px 20px; }
    @media (max-width: 500px) { padding: 25px 20px; }
    @media (max-width: 380px) { padding: 25px 10px; }
    @include d-large-text;  // can be overwritten from outside this component ;), it's just the default
    
    h1 {
        margin-bottom: 32px;
        @media (max-width: 650px) { margin-bottom: 28px; }
        font-weight: 500; // medium

        &:not(.card-super-heading) {
            @include d-heading;
        }
        &.card-super-heading {
            @include d-super-heading;
            text-transform: uppercase;
        }

        // scale on hover
        transition: transform 0.3s;
        &:hover { transform: scale(1.03); }
    }

    // intensify box-shadow on hover
    transition: box-shadow 0.3s;
    &:hover { box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.6), 0px 4px 50px rgba(0, 0, 0, 0.6); }
}
</style>
