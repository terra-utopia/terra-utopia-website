<template>
    <div class="InfoBox">
        <div class="heading-wrapper drop-shadow-large">
            <h3>Climate Crisis</h3>
            <div class="underline"></div>
        </div>
        <SlideShow class="drop-shadow-large">
            <SlideShowItem v-for="(slide, index) in slides" :key="index">
                <FixedAspectRatio :heightPercentage="100 / Math.sqrt(2)">
                    <img :src="slide.imageSrc" />
                </FixedAspectRatio>
                <div class="bottom-shadow"></div>
                <div class="caption">{{ slide.caption }}</div>
            </SlideShowItem>
            <template v-slot:alternative>
                <p
                    class="slogan"
                    v-html="'Humanity is failing to stop climate change'"
                ></p>
            </template>
        </SlideShow>
        <ActionButton
            v-show="!expanded"
            message="Analyze"
            @click="expanded = true"
        ></ActionButton>
        <div v-show="expanded" class="content-body">
            <p v-for="(paragraph, index) in paragraphs" :key="index">
                {{ paragraph }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
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

<style lang="scss" sc>
.InfoBox {
    width: 80vw;

    margin: 0 auto;

    border: 1px solid white;
    background: rgba(255, 255, 255, 0.05);
    padding: 1.5vw;
    text-align: center; // for the button

    &:hover {
        background: rgba(255, 255, 255, 0.08);
        .heading-wrapper > h3 {
            padding-right: 16px;
        }
    }
    .heading-wrapper {
        text-align: right;
        padding: 1vw 2vw;

        h3 {
            display: inline-block;
            font-weight: 500;
            font-style: italic;
            font-size: 2.5rem;
            transition: padding-right 0.5s ease-out;
        }
        .underline {
            width: 100%;
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        }
    }
    .SlideShow {
        width: 75%;
        // height is bloated by child
        margin: 1vw auto calc(1vw + 32px) auto;
        position: relative;

        .SlideShowItem {
            // width 100%, height bloated by child
            position: relative;

            .FixedAspectRatio {
                width: 100%;
                // height bloated by child

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
            .caption {
                position: absolute;
                bottom: 10px;
                left: 24px;
                padding: 4px 8px;
                background: rgba(255, 255, 255, 0.1);
                color: white;
                font-size: 0.8rem;
            }
        }
        p.slogan {
            position: absolute;
            bottom: 42px;
            left: 24px;
            display: inline-block;
            padding: 4px 12px;
            width: auto;
            max-width: 80%;
            white-space: pre-wrap;
            text-align: left;
            font-size: 1.2rem;
            border: 1px solid white;
            background: rgba(255, 255, 255, 0.18);
            &:hover {
                background: rgba(255, 255, 255, 0.24);
            }
        }
    }
    .ActionButton {
        display: inline-block; // for text-align to work
        margin-top: 2vw;
        margin-bottom: 0.5vw;
    }
    .content-body {
        width: 75%;
        margin: 1vw auto;
        text-align: justify;
        font-size: 1.1rem;
        line-height: 1.7rem;
        letter-spacing: 0.08rem;
        text-shadow: 0 3px 2px rgba(0, 0, 0, 0.6);
        color: #fdfdff;
        font-weight: 300;

        p {
            padding: 1vw 0;
            text-indent: 2vw;
        }
    }
}
</style>