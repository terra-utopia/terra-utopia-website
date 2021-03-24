<template>
    <div class="InfoBox" :class="{ expanded: expanded }">
        <h2>{{ title }}</h2>
        <!-- <SlideShow :slides="slides" :slogan="slogan"> </SlideShow> -->
        <div class="wrapper-for-opener-button"> <!-- needed for fade-out transition that does not take up page area -->
            <button
                class="opener-button"
                @click="expanded = true"
            >
                <div class="placeholder-message">Analyze</div>
                <div class="real-message">Analyze</div>
            </button>
        </div>
        <div class="content-body">
            <TruncatedHeight
                :expanded="expanded"
                :transition="'height 1.5s ease-out'"
            >
                <div v-html="htmlContent"></div>
            </TruncatedHeight>
        </div>
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
    padding: 42px;

    &:hover {
        background: rgba($c-extradark, 0.08);  // little bit darker
        h3 {
            padding-right: 16px;
        }
    }
    h3 {
        text-align: right;
        font-weight: 500;
        font-style: italic;
        font-size: 7.2vw; // XXX
        // media queries XXX
        transition: padding-right 0.5s ease-out;  // toggled on parent hover (see above)
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        margin-bottom: 4vw; // XXX
    }
    .wrapper-for-opener-button {
        position: relative; // for absolute child button
        width: 100%;
        height: 10.5vw; // has to be hardcoded because child is absolute

        button.opener-button {
            position: absolute;
            display: inline-block;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            padding: 2vw 7vw;
            background: white;
            font-size: 5.5vw;
            color: #445387;
            font-weight: bold;
            letter-spacing: 0.05rem;
            text-shadow: 0 0.8vw 0.8vw rgba(0, 0, 0, 0.3);
            transition: all 0.8s ease-out; // transform, opacity

            .placeholder-message {
                position: static;
                opacity: 0;
            }
            .real-message {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                transition: letter-spacing 0.3s ease-out;
            }
            &:hover {
                cursor: pointer;

                .real-message {
                    letter-spacing: 0.12rem;
                }
            }
        }
        &.hide {
            height: 0;
            button.opener-button {
                opacity: 0;
                transform: translateX(-50%) translateY(-30px);
                pointer-events: none;
            }
        }
    }
    .content-body {
        &.expanded {
            min-height: 10.5vw; // to ensure smooth patch/replacement of the height of .wrapper-for-opener-button
        }
        .TruncatedHeight {
            p {
                padding: 3vw 0;
                text-indent: 4vw;
                text-align: justify;
                font-size: 1rem;
                line-height: 1.7rem;
                letter-spacing: 0.08rem;
                text-shadow: 0 3px 2px rgba(0, 0, 0, 0.6);
                color: $c-extradark;
                font-weight: 300;
                opacity: 1; // XXX
                transition: opacity 1.5s linear;
                &.expanded {
                    opacity: 1;
                }
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
