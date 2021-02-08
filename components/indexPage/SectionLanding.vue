<template>
    <section id="landing">
        <PreRenderedGradient
            background="linear-gradient(to bottom, #4b62b4, #303a5e)"
            :strictVertical="true"
            :stretchGaps="true"
        />
        <div class="background-text">
            &nbsp;&nbsp;End Nationalism<br />
            Act Globally
        </div>
        <DotsBackground />
        <div class="content-wrapper drop-shadow-large">
            <div class="heading-wrapper">
                <h1>World United</h1>
            </div>
            <div class="slogans">
                <p>
                    The movement for a
                    <span class="highlighted">world government</span>.
                </p>
                <p>
                    It is time to take responsibility on a
                    <span class="highlighted">global level</span>.
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
/* mobile-first (<480px) */

section#landing {
    position: relative; // for absolute children

    .PreRenderedGradient {
        z-index: -2;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .background-text {
        z-index: -1;
        position: absolute;
        transform: translate(-15%, -50%) rotate(-16.18deg);
        transform-origin: center center;
        font-size: 20vw;
        font-weight: 900;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.03);
        white-space: nowrap;
        line-height: 100%;
        top: 68%;
        // font-size: 16vw;
    }
    .DotsBackground {
        z-index: -1;
        position: absolute;
        transform: translateY(-50%);
        width: 100%;
        height: 90vw;
        top: 100%;
        // height: 70vw;
    }

    .content-wrapper {
        padding-top: 14vw;
        padding-bottom: 48vw;

        .heading-wrapper {
            text-align: center;

            h1 {
                display: inline-block;
                font-family: "Bebas Neue";
                font-style: normal;
                font-weight: normal;
                font-size: 15vw;
                line-height: 90%;
                letter-spacing: 0.8vw;
                padding-left: calc(
                    0.03 * 15vw
                ); // correction for wrong font-family textbox
                border-bottom: 2px solid white; // 3px

                &:hover {
                    -webkit-text-fill-color: transparent;
                    -webkit-text-stroke: 1.5px white; // 3px
                }
            }
        }

        .slogans {
            margin-top: 6vw;
            text-align: center;
            // margin-left: 15vw;
            // width: 40vw;

            p {
                display: inline-block;
                width: 70%;
                padding: 3vw 0;
                // padding: 1.5vw 0;
                font-size: 6vw;
                // font-size: 2.6vw;
                letter-spacing: 0.5vw;
                line-height: 120%;

                span.highlighted {
                    font-style: italic;
                    font-weight: 500;
                }
            }
        }
    }
}
</style>
