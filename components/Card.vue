<template>
    <article class="Card">
        <h1 v-if="heading" :class="{ 'super-heading': isSuperHeading }">
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
    // width; determined by parent
    text-align: center;
    background: #FAFBFF;
    padding: 40px 60px;
    @media (max-width: 650px) { padding: 30px 20px; }
    @media (max-width: 500px) { padding: 25px 20px; }
    
    h1 {
        margin-bottom: 24px;
        @media (max-width: 650px) { margin-bottom: 16px; }
        @media (max-width: 500px) { margin-bottom: 12px; }
        font-weight: 500; // medium

        &:not(.super-heading) {
            @include d-heading;
        }
        &.super-heading {
            @include d-super-heading;
            width: fit-content;
            margin: { left: auto; right: auto; };
            text-transform: uppercase;

            span {
                position: relative;  // for absolute positioned '::after'
                
                &::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    border-bottom: 2px solid #303B5E;
                    transform: translateY(-13%);
                }
            }
        }
    }
}
</style>
