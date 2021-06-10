<template>
    <main class="IndexPage">
        <CenteredBodyColumn>
            <Card :heading="'Terra Utopia'" :isSuperHeading="true">
                <p>We are <span class="highlighted">Terra Utopia</span> - the movement for a <span class="highlighted">global, federal democracy: "TERRA".</span></p>
                <p>Humanity faces multiple existential crises!</p>
                <p>Yet today’s global politics are primarily driven by national interests, neglecting that we will only have the power to solve these global problems if we tackle them together on a global scale.</p>
                <p>Therefore this is a rally cry to all humans:</p>
                <p>Let us unite in combating all global crises!
                <br>
                Let us unite in the struggle for a better world!
                <br>
                Let us forge a <span class="highlighted">global democracy!</span></p>
            </Card>
            <Card :heading="'The Common Ground'" :isSuperHeading="false">
                <p><span class="highlighted">Every human being</span> should have the right and the possibility to pursue a self-determined life far from physical and psychological violence. Furthermore, it must be possible for everyone to claim their human rights.</p>
                <p>This is the minimal consensus that hopefully all humans can agree upon. However, in our modern world, there are <span class="highlighted">numerous threats</span> to this common ground. Some of the most alarming ones are discussed here.</p>
            </Card>
            <Card :heading="'Global Crises'" :isSuperHeading="false" class="crises-card">
                <Bookshelf />
                <InfoBox v-for="(infobox, i) in $options._staticData.infoboxes" :key="i"
                    :id="infobox.htmlId"
                    :title="infobox.title"
                    :slogan="infobox.slogan"
                    :slides="infobox.slides"
                    :htmlContent="infobox.htmlContent"
                />
            </Card>
        </CenteredBodyColumn>
    </main>
</template>


<script>
import infoboxes from "~/assets/necessity-of-a-world-state.js";

export default {
    _staticData: {  // this custom property is not reactivley bound by Vue (in contrast to the 'data' property)
        infoboxes,
    },
    head() {  // metadata for the html '<head></head>' element
        return {
            // title: "Terra Utopia - Home - Necessity Of A Global Democracy",
        };
    },
};
</script>


<style lang="scss">
@import '~/assets/shared-styles.scss';

.IndexPage {
    .CenteredBodyColumn {
        .Card {
            margin-bottom: 32px;

            & > p {
                margin: 10px 0;
                span.highlighted { @include semi-bold-italic; }
            }

            &.crises-card {
                .InfoBox {
                    margin: 32px 0;
                }
            }
        }
    }
}
</style>
