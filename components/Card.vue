<template>
    <article class="Card">
        <h1 :class="{'super-heading': isSuperHeading}"><span>{{heading}}</span></h1>
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
    
    h1 {
        @include d-heading;

        &.super-heading {
            @include d-super-heading;
            position: relative;
            width: fit-content;
            margin: 0 auto;
            font-weight: 500;
            text-transform: uppercase;

            // &::after {
            //     content: "";
            //     position: absolute;
            //     bottom: 0px;
            //     left: 0px;
            //     width: 100%;
            //     height: 2px;
            //     background: #303B5E;
            // }

            // span::after {
            //     content: "";
            //     position: absolute;
            //     bottom: 0px;
            //     left: 0px;
            //     width: 100%;
            //     height: 2px;
            //     background: #303B5E;
            // }

            span {
                border-bottom: 2px solid #303B5E;
            }


        }
    }
}
</style>
