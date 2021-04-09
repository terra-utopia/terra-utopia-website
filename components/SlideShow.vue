<template>
    <div class="SlideShow">
        <div
            v-for="(slide, index) in slides"
            class="SlideShow-item"
            v-show="index === activeIndex"
            :class="{ active: index === activeIndex }"
            :key="index"
        >
            <FixedAspectRatio :heightPercentage="680 / 960 * 100">
                <div role="img" :style="{ 'background-image': `url('${slide.imageSrc}')` }" /><!-- `<div>` instead of `<img>`, to enable usage of `background-size: contain/cover` which is needed to adapt any image to the fixed aspect ratio -->
            </FixedAspectRatio>
            <div class="bottom-shadow"></div>
            <div class="caption-wrapper">
                <p class="caption">{{ slide.caption }}</p>
            </div>
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
        };
    },
};
</script>

<style lang="scss">
.SlideShow {
    position: relative; // for absolute positioned 'button's

    .SlideShow-item {
        position: relative; // for absolute positioned '.caption' '.bottom-shadow'

        &.active {
            animation: fade 1s ease-out;
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
                // text-align: center; // XXX
                padding: 4px 8px;
                background: rgba(255, 255, 255, 0.1);
                color: white;
                font-size: 16px;
                // white-space: pre; // XXX
            }
        }
    }
    button {
        position: absolute;
        top: 40%;
        width: calc(14px + 28px);
        height: calc(32px + 75px);
        transform-origin: 50% 50%;
        transform: translateY(-50%) scale(0.7);
        transition: transform 0.3s ease-out;
        background: rgba(0, 0, 0, 0.5);
        // '<img'> child centers itself (with position absolute)

        img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        } 
        &.previous {
            left: 24px;
            img { transform: translate(-50%, -50%) rotate(180deg); }
        }
        &.next {
            right: 24px;
        }
        &:hover {
            cursor: pointer;
            transform: translateY(-50%) scale(0.85);  // larger
            background: rgba(0, 0, 0, 0.43);  // lighter
        }
    }
    p.counter {
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