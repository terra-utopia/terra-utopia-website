<template>
    <article class="Card">
        <h1 :class="{'super-heading': isSuperHeading}">
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
    text-align: center;
    background: #FAFBFF;
    padding: 20px 60px;
    @media (max-width: 650px) { padding: 20px 20px }
    
    h1 {
        @include d-heading;
        font-weight: 500;

        &.super-heading {
            @include d-super-heading;
            width: fit-content;
            margin: 0 auto;
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
