<template>
    <section id="our-world-is-broken">
        <PreRenderedGradient
            background="linear-gradient(to bottom, #303a5e, #42569c 20%, #343e62)"
            :strictVertical="true"
            :stretchGaps="true"
        />
        <div class="content-wrapper">
            <div class="heading-wrapper1 drop-shadow-large">
                <div class="heading-wrapper2">
                    <h2>Our world is broken.</h2>
                    <div class="underline"></div>
                </div>
            </div>
            <div class="bookshelf-wrapper drop-shadow-large">
                <Bookshelf />
                <EarthStripesBackground />
            </div>
            <div class="countries-are-the-problem">
                <div class="sandwich">
                    <p>Countries can not fix it.</p>
                    <p>They are the problem.</p>
                </div>
            </div>
            <InfoBox v-bind="$options.staticData.infobox_ClimateChange" />
            <!-- 'v-bind' passes the object's key-value pairs as instance props ('slides', 'slogan', 'paragraphs') -->
            <InfoBox v-bind="$options.staticData.infobox_SocialInequality" />
        </div>
    </section>
</template>


<script>
import {
    infobox_ClimateChange,
    infobox_SocialInequality,
} from "../../assets/content/necessity-of-a-world-government.js";

export default {
    staticData: {
        infobox_ClimateChange,
        infobox_SocialInequality,
    },
};
</script>


<style lang="scss">
section#our-world-is-broken {
    position: relative; // for absolute children

    .PreRenderedGradient {
        z-index: -2;
        position: absolute;
        width: 100%;
        height: 100%;
        canvas {
            border-top: 1px solid red;
        }
    }
    & > .content-wrapper {
        padding-top: 5vw;
        padding-bottom: 22vw;

        .heading-wrapper1 {
            // just to ensure we still fill full width
            text-align: right;
            padding: 3vw 0;

            .heading-wrapper2 {
                text-align: right;
                display: inline-block; // shrink to fit content
                margin-right: 6vw;
                padding: 1vw;

                h2 {
                    font-size: 4vw;
                    font-style: italic;
                    font-weight: 500;
                }
                .underline {
                    border-bottom: 0.2vw solid white;
                    transform: translateY(0vw);
                }
            }
        }

        .bookshelf-wrapper {
            padding: 3vw 0;
            text-align: center;
            position: relative; // for <EarthStripesBackground>
            border: 1px solid blue;

            .Bookshelf {
            }

            .EarthStripesBackground {
                // z-index: -1;
                // z-index: 2;
                position: absolute;
                bottom: -50%;
                left: -24px;
            }
        }
        .countries-are-the-problem {
            z-index: 0;
            // width: 20rem;

            // padding: 0.8rem;

            .sandwich {
                display: inline-block;
                margin: 6vw 5% 6vw auto;
                border-top: 1px solid white;
                border-bottom: 1px solid white;
                p {
                    font-size: 1.6rem;
                    text-align: center;
                    padding: 0.5rem 0;
                }
            }
        }
    }
}
</style>