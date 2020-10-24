<template>
    <div class="SlideShow">
        <div class="SlideShow-viewport">
            <div class="slide-wrapper">
                <slot><!-- All the <SlideShowItem> children --></slot>
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
                v-show="activeIndex !== slideCount - 1"
            >
                <svg width="14" height="32">
                    <path d="M 0 0 L 14 16 L 0 32" />
                </svg>
            </button>
            <p class="counter">{{ this.activeIndex + 1 }} / {{ slideCount }}</p>
        </div>
        <slot name="alternative"></slot>
    </div>
</template>


<script>
import { moduloWithNegative } from "../../assets/js/utils.js";

export default {
    data() {
        return {
            activeIndex: 0,
        };
    },
    mounted() {
        this.updateActiveState();
    },
    methods: {
        updateActiveState() {
            this.$scopedSlots.default().forEach((vnode, index) => {
                // vnode is a <SlideShowItem>
                vnode.componentInstance.active = index === this.activeIndex;
            });
        },
        rotateIndex(delta) {
            this.activeIndex += delta;
            this.activeIndex = moduloWithNegative(
                // unneccessary in theory, because buttons are disabled on the boundaries or index interval
                this.activeIndex,
                this.slideCount
            );
            this.updateActiveState();
        },
    },
    computed: {
        slideCount() {
            return this.$slots.default.length;
        },
    },
};
</script>

<style lang="scss">
.SlideShow {
    // extra wrapper so that .SlideShow's CSS can not overwritten
    .SlideShow-viewport {
        position: relative;

        .slide-wrapper {
            display: flex; // this flex shit is used so that when in the beginning (not hydrated page) all slides are visible they are aligned horizontal and only the first one is in viewport
            flex-flow: row;
            flex-wrap: nowrap;
            overflow: hidden;
            width: 100%;
        }
        button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%) scale(1);
            transition: transform 0.3s ease-out;
            background: rgba(0, 0, 0, 0.5);
            width: calc(14px + 28px);
            height: calc(32px + 75px);
            transform-origin: 50% 50%;
            // no padding svg child centers itself (absolute)

            &.previous {
                left: 24px;
            }
            &.next {
                right: 24px;
            }
            &:hover {
                cursor: pointer;
                transform: translateY(-50%) scale(1.1);
                background: rgba(0, 0, 0, 0.43);
            }
            svg {
                position: absolute;
                top: 50%;
                left: 50%;
                overflow: visible;
                transform: translate(-50%, -50%);

                path {
                    fill: none;
                    stroke: white;
                    stroke-width: 1.8px;
                }
            }
        }
        p.counter {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            font-size: 0.8rem;
            padding: 8px 0;
        }
    }
}
</style>