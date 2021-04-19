<template>
    <div class="InfoBox">
        <h2><span v-html="title"></span></h2>
        <SlideShow :slides="slides" :slogan="slogan"> </SlideShow>
        <TruncatedHeight
            :expanded="expanded"
            :cssTransitionDurationMs="1000"
            :cssTransitionEasing="'ease-in-out'"
        >
            <div v-html="htmlContent"></div>
        </TruncatedHeight>
        <button v-show="!expanded" class="opener-button" @click="expanded=true">Read Text</button>
        <button v-show="expanded" class="collapse-button" @click="expanded=false">Collapse <img src="~/assets/collapse-icon.svg" /></button>
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
    @media (min-width: 600px) { padding: 24px; };

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
        @media (min-width: 500px) { font-size: 30px; };
        @media (min-width: 740px) { font-size: 36px; };
        border-bottom: 1px solid rgba($c-extradark, 0.5);
        span {
            display: inline-block; // because 'transform' does not work on 'inline' elements
            transition: transform 0.3s ease-out;  // toggled on parent hover (see above)
        }
    }
    .TruncatedHeight {
        &:not(.expanded) {
            pointer-events: none;
        }

        .TruncatedHeight-body {
            @include d-small-text; // (font-size, text-shadow, letter-spacing)
            color: $c-extradark;

            p {
                padding-bottom: 20px;
                text-indent: 20px;
                text-align: justify;
            }
            table {
                border-collapse: collapse; // better than default `separate`

                tbody tr {
                    &:target {
                        // text-decoration: underline;
                        // text-decoration-color: $c-extradark;
                        // text-decoration-thickness: 1px;
                        background: rgba($c-special1, 0.25);
                    }

                    td:nth-child(1) {
                        vertical-align: baseline; // float at the top (default is `middle`)
                        text-align: right;
                        padding: { left: 6px; right: 6px; };
                    }
                    td:nth-child(2) {
                        line-break: anywhere;
                        text-align: left;
                        padding-left: 2px;
                    }
                }
            }
        }
    }
    button {  // for '.opener-button' and '.collapse-button' ('.collapse-button' has extra ruleset below)
        display: block;
        width: fit-content;
        margin-top: 8px;
        letter-spacing: calc(0.05 * 18px);
        color: $c-extralight;
        text-shadow: 0 1px 2px rgba(black, 0.25);
        background: $c-extradark;
        box-shadow: 0 2px 4px rgba(black, 0.25);
        &:hover { cursor: pointer; }

        &.opener-button {
            margin: { left: auto; right: auto};  // centered
            padding: 6px 12px;
            font-size: 18px;
            @include bold;
        }
        &.collapse-button {
            padding: 4px 8px;
            margin-left: auto; // positioned right
            font-size: 16px;
            position: sticky;   // lets the button stick at the bottom of the screen
            bottom: 8px;        //

            img {
                vertical-align: bottom;
            }
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
