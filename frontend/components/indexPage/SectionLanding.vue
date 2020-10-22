<template>
    <section id="landing">
        <PreRenderedGradient
            background="linear-gradient(to bottom, #4b62b4, #303a5e)"
            :strictVertical="true"
            :stretchGaps="true"
        />
        <div class="background-text">
            &nbsp;&nbsp;End Nationalism <br />
            Act Globally
        </div>
        <DotsBackground />
        <div class="content-wrapper text-shadow-effect">
            <div class="heading-wrapper1">
                <div class="heading-wrapper2">
                    <h1>World United</h1>
                    <div class="underline"></div>
                </div>
            </div>
            <div class="slogans">
                <p>
                    The movement for a
                    <span class="highlighted">world government</span>.
                </p>
                <p>
                    Let's take responsibility on a
                    <span class="highlighted">global level</span>.
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
/* desktop-first design, mobile with media query later */

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
        top: 68%;
        transform: translate(-15%, -50%) rotate(-16.18deg);
        transform-origin: center center;
        color: rgba(255, 255, 255, 0.03);
        font-size: 16vw;
        font-weight: 900;
        text-transform: uppercase;
        white-space: nowrap;
        line-height: 100%;
    }
    .Dots {
        z-index: -1;
        position: absolute;
        top: 100%;
        transform: translateY(-50%);
    }

    .content-wrapper {
        padding-top: 5vw;
        padding-bottom: 22vw;

        .heading-wrapper1 {
            // just to ensure we still fill full width

            .heading-wrapper2 {
                display: inline-block; // shrink to fit content
                padding: 2vw;
                margin-left: 10vw;
                text-align: center;

                &:hover {
                    -webkit-text-fill-color: transparent;
                    -webkit-text-stroke: 3px white;
                }
                h1 {
                    font-family: "Bebas Neue";
                    font-style: normal;
                    font-weight: normal;
                    font-size: 11vw;
                    line-height: 85%;
                    letter-spacing: 0.8vw;
                    padding-left: 0.4vw; // correct wrong font-family textbox
                }
                .underline {
                    border-bottom: 3px solid white;
                    transform: translateY(0vw);
                }
            }
        }

        .slogans {
            display: inline-block;
            margin-left: 15vw;
            width: 40vw;

            p {
                padding: 1.5vw 0;
                font-size: 2.6vw;
                letter-spacing: 0.2vw;
                line-height: 120%;

                span.highlighted {
                    font-style: italic;
                    font-weight: 500;
                }
            }
        }
    }
}

@media (max-width: 600px) {
    // mobile design

    section#landing {
        .background-pane {
        }
        .background-text {
            top: 85%;
            font-size: 20vw;
        }
        .Dots {
            height: 90vw;
            top: 120%;
        }

        .content-wrapper {
            padding-top: 18vw;
            padding-bottom: 18vw;
            text-align: center;

            .heading-wrapper1 {
                .heading-wrapper2 {
                    padding: 4vw;
                    margin-left: 0;

                    &:hover {
                        -webkit-text-stroke: 2px white;
                    }
                    h1 {
                        font-size: 16vw;
                        // line-height: 85%;
                        // letter-spacing: 0.8vw;
                    }
                    .underline {
                        border-bottom-width: 2px;
                        // transform: translateY(0vw);
                    }
                }
            }

            .slogans {
                margin-left: 0;
                margin-top: 6vw;
                width: 72vw;

                p {
                    padding: 3vw 0;
                    font-size: 6vw;
                    // letter-spacing: 0.2vw;
                    // line-height: 120%;

                    span.highlighted {
                    }
                }
            }
        }
    }
}
</style>
