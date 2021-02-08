<template>
    <div class="InfoBox">
        <h3 class="drop-shadow-large">{{ title }}</h3>
        <SlideShow :slides="slides" :slogan="slogan"> </SlideShow>
        <div class="wrapper-for-opener-button" :class="{ hide: expanded }">
            <button
                class="opener-button drop-shadow-large"
                @click="expanded = true"
            >
                <div class="placeholder-message">Analyze</div>
                <div class="real-message">Analyze</div>
            </button>
        </div>
        <div class="content-body" :class="{ expanded }">
            <TruncatedHeight
                :expanded="expanded"
                :transition="'height 1.5s ease-out'"
            >
                <p
                    v-for="(paragraph, index) in paragraphs"
                    :class="{ expanded }"
                    :key="index"
                >
                    {{ paragraph }}
                </p>
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
        paragraphs: {
            type: Array, // Array of String
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
/* mobile-first (<480px) */

.InfoBox {
    width: 92vw;
    margin: 11vw auto; // automatic centering
    border: 1px solid white;
    background: rgba(255, 255, 255, 0.05);
    padding: 3.5vw;

    &:hover {
        background: rgba(255, 255, 255, 0.08);
        h3 {
            padding-right: 16px;
        }
    }
    h3 {
        text-align: right;
        font-weight: 500;
        font-style: italic;
        font-size: 7.2vw;
        // font-size: 2.5rem;
        transition: padding-right 0.5s ease-out; // toggled above, on parent hover
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        margin-bottom: 4vw;
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
                color: #fdfdff;
                font-weight: 300;
                opacity: 0;
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