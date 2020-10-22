<template>
    <section id="our-world-is-broken">
        <PreRenderedGradient
            background="linear-gradient(to bottom, #303a5e, #42569c 20%, #343e62)"
            :strictVertical="true"
            :stretchGaps="true"
        />
        <div class="content-wrapper text-shadow-effect">
            <div class="heading-wrapper1">
                <div class="heading-wrapper2">
                    <h2>Our world is broken.</h2>
                    <div class="underline"></div>
                </div>
            </div>
            <div class="bookshelf-wrapper">
                <Bookshelf />
            </div>
        </div>
    </section>
</template>


<style lang="scss">
section#our-world-is-broken {
    height: 200vh;
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
    .content-wrapper {
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

            .Bookshelf {
            }
        }
    }
}
</style>