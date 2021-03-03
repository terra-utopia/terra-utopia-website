<template>
    <main class="IndexPage">
        <div class="main-column">
            <Card :heading="'Terra Utopia'" :isSuperHeading="true">
                <p>We are <span class="highlighted">Terra Utopia</span> - the movement for a <span class="highlighted">world state.</span></p>
                <p>Humanity faces multiple existential crises!</p>
                <p>Yet today’s global politics are primarily driven by national interests, neglecting that we will only have the power to solve these global problems if we tackle them together on a global scale.</p>
                <p>Therefore this is a rally cry to all humans:</p>
                <p>Let us unite in combating all global crises!
                <br>
                Let us unite in the struggle for a better world!
                <br>
                Let us forge a <span class="highlighted">federal, democratic world state!</span></p>
            </Card>
            <Card :heading="'The Common Ground'" :isSuperHeading="false">
                <p><span class="highlighted">Every human being</span> should have the right and the possibility to pursue a self-determined life in the absence of physical and psychological violence. Furthermore it must be possible for everyone to claim their human rights.</p>
                <p>This is the minimal consensus that we hope all humans can agree upon. However in our modern world there are <span class="highlighted">numerous</span> threats to this common ground. Some of the most concerning ones are listed here:</p>
            </Card>
        </div>
    </main>
</template>


<script>
export default {
    head() {
        return {
            title: "Terra Utopia - Home - The Necessity For A New Economic System",
        };
    },
};
</script>


<style lang="scss">
@import '../assets/shared-styles.scss';

@mixin shadow-wide {
    filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.4)) drop-shadow(0 4px 50px rgba(0,0,0, 0.25));
}

@mixin text-shadow-standard {
    text-shadow: 0px 1.5px 3px rgba(0, 0, 0, 0.25);
}

@mixin text-shadow-large {
    text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
}

.IndexPage {
    .main-column {
        @include shadow-wide;
        width: 94%;
        max-width: 960px;
        margin: 0 auto;

        .Card {
            margin: 20px 0;
            @include text-shadow-standard;

            p {
                margin: 0 0 20px 0;
                font-size: 24px; // asdfdafasdfasdf

                .highlighted {
                    @include semi-bold-italic;
                }
            }
        }
    }
}

@media (min-width: 480px) {
    .IndexPage {
        .main-column {
            .Card {}
        }
    }
}
</style>
