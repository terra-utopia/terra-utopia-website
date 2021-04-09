<template>
    <div class="SlideShow">
        <div class="SlideShow-item" :class="{ fadeInAnimation }">
            <FixedAspectRatio :heightPercentage="680 / 960 * 100">
                <div role="img" :style="{ 'background-image': `url('${slides[activeIndex].imageSrc}')` }" /><!-- `<div>` instead of `<img>`, to enable usage of `background-size: contain/cover` which is needed to adapt any image to the fixed aspect ratio -->
            </FixedAspectRatio>
            <div class="bottom-shadow"></div>
            <p class="caption">
                <span>{{ slides[activeIndex].caption }}</span>
            </p>
        </div>
        <button
            class="previous"
            @click="activeIndex--"
            v-show="activeIndex !== 0"
        >
            <img src="~/assets/slide-show-button-icon.svg" />
        </button>
        <button
            class="next"
            @click="activeIndex++"
            v-show="activeIndex !== slides.length - 1"
        >
            <img src="~/assets/slide-show-button-icon.svg" />
        </button>
        <p class="counter">{{ activeIndex + 1 }} / {{ slides.length }}</p>
    </div>
</template>


<script>
import { forceReflow } from '~/assets/util.js';

export default {
    props: {
        slides: {
            type: Array, // Array<{ imageSrc: String, caption: String }>
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
            fadeInAnimation: false,
        };
    },
    watch: {

        activeIndex: {
            immediate: true,
            async handler(newValue, oldValue) {  // called every time `activeIndex` changes, and once initially (at the time of `created()` hook)

                if (!process.client) return; // because not needed for SSR

                // re-start fadeIn animation if `activeIndex` changes
                if (oldValue !== undefined) {  // to skip initial invocation
                    this.fadeInAnimation = false;
                    await new Promise(resolve => { this.$nextTick(resolve) });  // wait for DOM update
                    forceReflow();  // trigger browser reflow to ensure the toggle is recognized
                    this.fadeInAnimation = true;
                }

                // always preload the next slide's image
                const nextSlide = this.slides[this.activeIndex+1];
                if (nextSlide) {
                    new Image().src = nextSlide.imageSrc;
                    // image should be automatically garbage-collected (cleared from memory) because Node that is not inserted in DOM and without variable reference
                }
            }
        }
    },
};
</script>

<style lang="scss">
.SlideShow {
    max-width: 600px;
    margin: { left: auto; right: auto; bottom: 10px; };
    @media (min-width: 700px) { margin-bottom: 28px; }
    position: relative; // for absolute positioned 'button's

    .SlideShow-item {
        position: relative; // for absolute positioned '.caption' '.bottom-shadow'

        &.fadeInAnimation {
            animation: fade-in 1s ease-out;
        }
        .FixedAspectRatio {
            // width; // autom. 100%
            // height bloated by fixed aspect ratio

            div[role="img"] {
                // background-image;  // set in-line via vue template (see above)
                width: 100%;
                height: 100%;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
            }
        }
        .bottom-shadow {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 25%;
            background: linear-gradient(
                to top,
                rgba(0, 0, 0, 0.6) 0%,
                rgba(0, 0, 0, 0.6) 32%,
                transparent 100%
            );
        }
        p.caption {
            position: absolute;
            bottom: 10px;
            width: 100%;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;

            span {
                display: inline-block; // for 'max-width' to work
                max-width: 80%;
                padding: 4px 8px;
                background: rgba(255, 255, 255, 0.1);
                color: white;
                font-size: 16px;
            }
        }
    }
    button {
        position: absolute;
        &.previous { left: 24px; }
        &.next { right: 24px; }
        width: 42px;    // adjusted to match svg <img> dimensions, further size is adjusted via scale
        height: 107px;  //
        top: 40%;  // slightly higher than 50% (exactly vertically centered)
        transform-origin: 50% 50%;
        transform: translateY(-50%) scale(0.7);
        transition: transform 0.3s ease-out;
        background: rgba(0, 0, 0, 0.5);

        img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        } 
        &.previous {
            img { transform: translate(-50%, -50%) scaleX(-1); }
        }
        @media (hover: hover) {  // only for devices whose primary pointer device supports hover (exludes most mobile devices)
            &:hover {
                cursor: pointer;
                transform: translateY(-50%) scale(0.85);  // larger
                background: rgba(0, 0, 0, 0.43);  // lighter
            }
        }

        // for mobile devices...
        @media (max-width: 480px) {
            top: 32%; // higher
            &.previous { left: 4px; }   // more outwards
            &.next { right: 4px; }      //
            transform: translateY(-50%) scale(0.6);

            @media (hover: hover) {  // only for devices whose primary pointer device supports hover (exludes most mobile devices)
                &:hover {
                    transform: translateY(-50%) scale(0.72);
                }
            }
        }
    }
    p.counter {
        font-size: 12px;
        padding: 8px 0;
        text-align: center;
    }
}

@keyframes fade-in {
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