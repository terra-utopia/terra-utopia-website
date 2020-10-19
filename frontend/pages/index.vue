<template>
    <main>
        <section id="landing">
            <div class="background-pane"></div>
            <Dots />
            <div class="landing-content">
                <div class="heading-wrapper">
                    <h1>World United</h1>
                    <div class="underline"></div>
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
        <section id="our-world-is-broken">
            <div class="background-pane"></div>
        </section>
    </main>
</template>

<script>
export default {
    head() {
        return {
            title: "World United",
        };
    },
};
</script>

<style lang="scss">
main {
    section#landing {
        position: relative; // for absolute children

        .background-pane {
            z-index: -2;
            position: absolute;
            width: 100%;
            height: 100%;
            background: url("~assets/img/blue-background-1.png");
            background-size: 100% 100%;
        }
        .Dots {
            z-index: -1;
            position: absolute;
            top: 65%;
            top: 100%;
            transform: translateY(-30%);
        }

        .landing-content {
            padding: 5vw 0;
            filter: drop-shadow(0vw 0.33vw 0.14vw rgba(0, 0, 0, 0.25));

            .heading-wrapper {
                display: inline-block;
                padding: 2vw;
                margin-left: 10vw;

                h1 {
                    display: inline-block;
                    font-family: "Bebas Neue";
                    font-style: normal;
                    font-weight: normal;
                    font-size: 11vw;
                    line-height: 100%;
                    letter-spacing: 0.8vw;

                    &:hover {
                        -webkit-text-fill-color: transparent;
                        -webkit-text-stroke: 3px white;
                    }
                }
                .underline {
                    border-bottom: 3px solid white;
                    transform: translateY(-1vw);
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

    section#our-world-is-broken {
        height: 200vh;
        position: relative; // for absolute children

        .background-pane {
            z-index: -2;
            position: absolute;
            width: 100%;
            height: 100%;
            background: url("~assets/img/blue-background-2.png");
            background-size: 100% 100%;
        }
    }
}
</style>
