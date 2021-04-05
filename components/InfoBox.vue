<template>
    <div class="InfoBox" :class="{ expanded: expanded }">
        <h2><span v-html="title"></span></h2>
        <!-- <SlideShow :slides="slides" :slogan="slogan"> </SlideShow> -->
        <div class="content-body">
            <TruncatedHeight
                :expanded="expanded"
                :transition="'height 1.5s ease-out'"
            >
                <div v-html="htmlContent"></div>
            </TruncatedHeight>
        </div>
        <button v-show="!expanded" class="opener-button" @click="expanded=true">Read Text</button>
        <button v-show="expanded" class="collapse-button" @click="expanded=false">Collapse</button>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        slogan: {
            type: String,
            required: true,
        },
        slides: {
            type: Array, // Array of {imageSrc: String, caption: String}
            required: true,
        },
        htmlContent: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            expanded: false,
        };
    },
};
</script>

<style lang="scss">
@import "~/assets/shared-styles.scss";


.InfoBox {
    border: 1px solid $c-extradark;
    background: rgba($c-extradark, 0.05);
    padding: 16px;
    // @media (min-height: 600px) { padding: 42px; };

    &:hover {
        background: rgba($c-extradark, 0.08);  // little bit darker
        h2 {
            span {
                transform: translateX(-6px);
            }
        }
    }
    h2 {
        margin-bottom: 16px;
        text-align: right;
        @include medium-italic;
        font-size: 24px;
        // @media (min-height: px) { font-size: px; }; // XXX
        border-bottom: 1px solid rgba($c-extradark, 0.5);
        span {
            display: inline-block; // because 'transform' does not work on 'inline' elements
            transition: transform 0.3s ease-out;  // toggled on parent hover (see above)
        }
    }
    .content-body {
        @include d-small-text; // (font-size, text-shadow, letter-spacing)
        color: $c-extradark;
        opacity: 1;                         // XXX
        transition: opacity 1.5s linear;    // XXX
        &.expanded { opacity: 1; }          // XXX

        .TruncatedHeight {
            p {
                padding: 3vw 0;
                text-indent: 20px;
                text-align: justify;
            }
        }
    }
    button {  // for '.opener-button' and '.collapse-button' ('.collapse-button' has extra ruleset below)
        display: block;
        width: fit-content;
        margin-top: 8px;
        letter-spacing: calc(0.05 * 18px);
        color: $c-extralight;
        text-shadow: 0 1.5px 3px rgba(black, 0.25);
        background: $c-extradark;
        box-shadow: 0 1.5px 3px rgba(black, 0.25);
        &:hover { cursor: pointer; }

        &.opener-button {
            margin: { left: auto; right: auto};  // centered
            padding: 6px 12px;
            font-size: 18px;
            @include bold;
        }
        &.collapse-button {
            padding: 4px;
            margin-left: auto; // positioned right
            font-size: 16px;
            position: sticky;   // let's button stick at the bottom of the screen
            bottom: 8px;        // 
        }
    }
    

    &.expanded {
        .content-body {
            min-height: 10.5vw; // to ensure smooth patch/replacement of the height of .wrapper-for-opener-button
        }
    }
}

@keyframes content-body-fadein {
    from {
        height: 10.5vw;
        opacity: 0;
    }
    to {
        height: 100vw;
        opacity: 1;
    }
}
</style>
