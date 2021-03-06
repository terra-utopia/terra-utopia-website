<template>
    <div class="SlideShow">
        <div class="SlideShow-item"
            v-for="(slide, i) in slides" :key="i"
            :class="{ 'active': i === activeIndex }"
        >
            <FixedAspectRatio :heightPercentage="680 / 960 * 100">
                <div role="img" :style="{ 'background-image': (i <= highestHistoricActiveIndex + 1) ? `url('${ slide.imageSrc }')` : `none` }" /> <!-- images as <div role="img"> (instead of <img>), to enable usage of `background-size: contain/cover` (needed for image to conform to fixed aspect ratio properly) -->
            </FixedAspectRatio>
            <div class="bottom-shadow"></div>
            <p class="caption">
                <span>{{ slide.caption }}</span> <!-- exists to make dynamic fit-content width and `max-width` possible despite `position:absolute` possible -->
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
export default {
    props: {
        slides: {
            type: Array, // Array<{ imageSrc: String, caption: String }>
            required: true,
        },
    },
    data() {
        return {
            activeIndex: 0,
            highestHistoricActiveIndex: 0,  // used for preloading slide images
        };
    },
    watch: {
        activeIndex: async function () {  // update `highestHistoricActiveIndex` every time `activeIndex` changes
            this.highestHistoricActiveIndex = Math.max(this.highestHistoricActiveIndex, this.activeIndex);
        },
    },
};
</script>

<style lang="scss">
.SlideShow {
    max-width: 600px;
    margin: { left: auto; right: auto; bottom: 10px; };
    @media (min-width: 700px) { margin-bottom: 28px; }
    position: relative; // for absolute positioned 'button's and `.SlideShow-item:not(.active)`

    .SlideShow-item {
        position: relative; // for absolute positioned '.caption' and '.bottom-shadow'

        &:not(.active) {
            position: absolute; // pulls element out of page flow of parent, makes `width:0;height:0;`
            z-index: -1; // hides behind the `.active.SlideShow-item`
            opacity: 0;             // just in case some text bleeds over the edges under the `.active.SlideShow-item`
            pointer-events: none;   //
        }
        &.active {
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
            @media (max-width: 420px) { height: 42%; }
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

            span {  // exists to make dynamic fit-content width and `max-width` possible despite `position:absolute` possible
                display: inline-block; // for 'max-width' to work
                max-width: 80%;
                padding: 4px 8px;
                background: rgba(255, 255, 255, 0.1);
                color: white;
                font-size: 16px;
                @media(max-width: 600px){ font-size: 12px; }
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
        opacity: 0;
        // filter: grayscale(100%) brightness(800%);
    }
    to {
        opacity: 1;
        // filter: grayscale(0%) brightness(100%);
    }
}
</style>