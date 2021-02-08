<template>
    <div class="SlideShow drop-shadow-large">
        <div
            v-for="(slide, index) in slides"
            class="SlideShow-item"
            v-show="index === activeIndex"
            :class="{ active: index === activeIndex }"
            :key="index"
        >
            <FixedAspectRatio :heightPercentage="100 / Math.sqrt(2)">
                <img :src="slide.imageSrc" />
            </FixedAspectRatio>
            <div class="bottom-shadow"></div>
            <div class="caption-wrapper">
                <p class="caption">{{ slide.caption }}</p>
            </div>
        </div>
        <button
            class="previous"
            @click="rotateIndex(-1)"
            v-show="activeIndex !== 0"
        >
            <svg width="14" height="32">
                <path d="M 14 0 L 0 16 L 14 32" />
            </svg>
        </button>
        <button
            class="next"
            @click="rotateIndex(+1)"
            v-show="activeIndex !== slides.length - 1"
        >
            <svg width="14" height="32">
                <path d="M 0 0 L 14 16 L 0 32" />
            </svg>
        </button>
        <p class="slogan">{{ slogan }}</p>
        <p class="counter">{{ activeIndex + 1 }} / {{ slides.length }}</p>
    </div>
</template>


<script>
import { moduloWithNegative } from "../../assets/js/utils.js";

export default {
    props: {
        slides: {
            type: Array, // Array of {imageSrc: String, caption: String}
            required: true,
        },
        slogan: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            activeIndex: 0,
        };
    },
    methods: {
        rotateIndex(delta) {
            this.activeIndex += delta;
            this.activeIndex = moduloWithNegative(
                // unneccessary in theory, because buttons are disabled on the boundaries or index interval
                this.activeIndex,
                this.slides.length
            );
        },
    },
};
</script>

<style lang="scss">
/* mobile-first (<480px) */

.SlideShow {
    width: 100%; // ok because parent has padding
    // height is bloated by child
    margin-top: 25vw; // for p.slogan
    margin-bottom: calc(3vw + 36px); // for p.counter
    position: relative; // for absolute positioned children (button .slogan p.counter)
    flex-flow: row;
    flex-wrap: nowrap;
    // overflow: hidden;
    // width: 100%;

    .SlideShow-item {
        width: 100%;
        // height is bloated by child
        flex-shrink: 0; // this flex shit is used so that when in the beginning (not hydrated page) all slides are visible they are aligned horizontal and only the first one is in viewport
        position: relative; // for absolute positioned .caption .bottom-shadow

        &.active {
            animation: fade 1s ease-out;
        }
        .FixedAspectRatio {
            width: 100%;
            // fixed height, by fixed aspect ratio

            img {
                width: 100%;
                height: 100%;
            }
        }
        .bottom-shadow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                to top,
                rgba(0, 0, 0, 0.6) 0%,
                rgba(0, 0, 0, 0.6) 8%,
                transparent 25%
            );
        }
        div.caption-wrapper {
            position: absolute;
            left: 50%;
            width: 100%;
            transform: translateX(-50%);
            bottom: 10px;
            text-align: center;

            p.caption {
                display: inline-block; // shrink to fit content
                max-width: 80%;
                // text-align: center;
                padding: 4px 8px;
                background: rgba(255, 255, 255, 0.1);
                color: white;
                font-size: 0.8rem;
                // white-space: pre;
            }
        }
    }
    button {
        position: absolute;
        top: 40%;
        // top: 50%;
        width: calc(14px + 28px);
        height: calc(32px + 75px);
        transform-origin: 50% 50%;
        transform: translateY(-50%) scale(0.7);
        transition: transform 0.3s ease-out;
        background: rgba(0, 0, 0, 0.5);
        // svg child centers itself (absolute)

        &.previous {
            left: 4vw;
            // left: 24px;
        }
        &.next {
            right: 4vw;
            // right: 24px;
        }
        &:hover {
            cursor: pointer;
            transform: translateY(-50%) scale(0.85);
            // transform: translateY(-50%) scale(1.1);
            background: rgba(0, 0, 0, 0.43);
        }
        svg {
            position: absolute;
            top: 50%;
            left: 50%;
            overflow: visible;
            transform: translate(-50%, -50%);
            // width, height from svg inline

            path {
                fill: none;
                stroke: white;
                stroke-width: 1.8px;
            }
        }
    }
    p.slogan {
        position: absolute;
        width: 100%;
        bottom: calc(100% + 12.5vw);
        left: 50%;
        transform: translateX(-50%) translateY(50%);
        padding: 0 4vw;
        text-align: center;
        font-size: 5vw;
        letter-spacing: 1.3vw;
        white-space: pre-wrap;
        color: #d9e1ff;

        // display: inline-block; // shrink to fit content
        // padding: 4px 12px;
        // border: 1px solid white;
        // background: rgba(255, 255, 255, 0.18);
        // &:hover {
        //     background: rgba(255, 255, 255, 0.24);
        // }
        // bottom: 42px;
        // left: 24px;
        // max-width: 80%;
        // text-align: left;
        // font-size: 1.2rem;
    }
    p.counter {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        font-size: 12px;
        padding: 8px 0;
        text-align: center;
    }
}

@keyframes fade {
    from {
        opacity: 0%;
        // filter: grayscale(100%) brightness(800%);
    }
    to {
        opacity: 100%;
        // filter: grayscale(0%) brightness(100%);
    }
}
</style>