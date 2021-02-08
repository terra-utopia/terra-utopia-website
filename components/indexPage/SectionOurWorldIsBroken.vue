<template>
    <section id="our-world-is-broken">
        <PreRenderedGradient
            background="linear-gradient(to bottom, #303a5e, #42569c 20%, #343e62)"
            :strictVertical="true"
            :stretchGaps="true"
        />
        <div class="content-wrapper">
            <p class="humanity-we-have-to-talk drop-shadow-large">
                Humanity, <span class="underlined">we have to talk</span>.<br />
                Our world is broken.
            </p>
            <Bookshelf />
            <div class="anchor-for-background-text">
                <div class="background-text">the thing is...</div>
            </div>
            <div class="countries-are-the-problem drop-shadow-large">
                <div class="sandwich">
                    <p>Countries can not fix it.</p>
                    <p>They are the problem.</p>
                </div>
            </div>
            <p class="read-on drop-shadow-large">
                Read on to find out why the most<br />
                reasonable solution<br />
                is to unite as
                <span class="highlighted"
                    >one effective<br />
                    world government</span
                >.
            </p>
            <div class="anchor-for-earth-stripes-background">
                <EarthStripesBackground />
            </div>
            <InfoBox v-bind="$options.staticData.infobox_ClimateChange" />
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
            // border-top: 1px solid red;
        }
    }
    & > .content-wrapper {
        padding-top: 15vw;
        padding-bottom: 22vw;

        p.humanity-we-have-to-talk {
            text-align: right;
            font-size: 7vw;
            font-style: italic;
            font-weight: 500;
            margin-right: 3vw;
            line-height: 140%;
            letter-spacing: 0.25vw;

            span.underlined {
                position: relative;

                &::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    left: 0;
                    top: 100%;
                    border-bottom: 2px solid white;
                    transform: translateY(-1vw);
                }
            }
        }

        .Bookshelf {
            margin-right: 18%;
        }
        .anchor-for-background-text {
            z-index: -1;
            position: relative;
            height: 22vw;

            .background-text {
                position: absolute;
                display: inline-block;
                top: 50%;
                left: 50%;
                transform-origin: center center;
                transform: translate(-50%, -50%) translateY(8vw) rotate(10deg);
                font-size: 17vw;
                font-weight: 900;
                color: rgba(255, 255, 255, 0.05);
                white-space: nowrap;
            }
        }

        .countries-are-the-problem {
            position: relative; // for proper z-index stacking in relation to above .bookshelf-wrapper
            margin-top: 6vw;
            margin-bottom: 16vw;
            text-align: center;
            font-weight: 500;
            font-style: italic;

            .sandwich {
                display: inline-block;
                border-top: 1px solid white;
                border-bottom: 1px solid white;
                padding: 1vw 4vw;

                p {
                    font-size: 6vw;
                    text-align: center;
                    padding: 0.5rem 0;
                }
            }
        }
        .read-on {
            font-size: 4.8vw;
            text-align: center;
            letter-spacing: 0.12vw;
            line-height: 150%;

            span.highlighted {
                font-style: italic;
                font-weight: 500;
            }
        }
        .anchor-for-earth-stripes-background {
            z-index: -1;
            position: relative;
            height: 15vw;
            // outline: 1px solid red;

            .EarthStripesBackground {
                position: absolute;
                width: 50vw;
                left: -4vw;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
}
</style>