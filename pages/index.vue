<template>
    <main class="IndexPage">
        <CenteredBodyColumn>
            <Card :heading="'Terra Utopia'" :isSuperHeading="true">
                <p>We are <span class="highlighted">Terra Utopia</span> - the movement for a <span class="highlighted">global, federal democracy</span>: <br> <span class="highlighted">TERRA</span>.</p>
                <p>Humanity faces multiple existential crises!</p>
                <p>Yet today’s global politics are primarily driven by national interests, neglecting that we will only have the power to solve these global problems if we tackle them together on a global scale.</p>
                <p>Therefore this is a rally cry to all humans:</p>
                <p>Let us unite in combating all global crises!
                <br>
                Let us unite in the struggle for a better world!
                <br>
                Let us forge a <span class="highlighted">global democracy!</span></p>
                <div class="flex-wrapper">
                    <div>
                        <img src="~assets/jump-down-icon.svg">
                        <a href="#common-ground"><ActionButton>Read More!</ActionButton></a>
                        <img src="~assets/jump-down-icon.svg">
                    </div>
                    <a href="/join/"><ActionButton>Join!</ActionButton></a>
                </div>
            </Card>
            <Card :heading="'The Common Ground'" :isSuperHeading="false" id="common-ground">
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
            <Card :heading="'At this point...'" :isSuperHeading="false">
                <section class="conclusion">
                    <p>... you may be thinking: "This whole idea sounds convincing, but it will remain a utopia. We will never achieve global democracy, will we?"</p>
                    <br>
                    <p>Firstly, yes, global democracy is a utopian idea.</p>
                    <p>Secondly, no, that does not mean that it will be impossible to achieve. In the past many ideas such as democracy, a strong welfare state or a world without aristocratic rule have been deemed unthinkable, but are now a reality in many nations.</p>
                    <p>Thirdly, the greatest utopia of our time is that humanity will survive much longer without overcoming the status quo of international anarchy. Sooner rather than later the national states will fail to combat the global, existential threats and humanity will become extinct. If we do not strive for a utopia in the face of this dystopian future, we have lost all sense of reality.</p>
                    <p>Fourthly, the question of wether this utopia will become a reality is a self-fulfilling prophecy. If everyone just agreed with these ideas, we could be this society of tomorrow today. If this movement fails, it is not because the goals where unattainable, the ideas unthinkable or the concepts unworkable, but simply because not enough people believed in them.</p>
                </section>
                <section class="further-reading">
                    If you want to know more, we invite you to read more on the following topics:
                    <div class="flex-wrapper">
                        <a href="/structure-of-terra/"><ActionButton>Structure!</ActionButton></a>
                        <a href="/roadmap/" ><ActionButton>Roadmap!</ActionButton></a>
                    </div>
                </section>
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

            .flex-wrapper{
                margin-top: 20px;

                @media (min-width: 480px){
                    display: flex;
                    justify-content: space-around;
                }

                & .ActionButton{
                    margin:10px;
                }
            }

            & > p {
                margin: 15px 0;
                span.highlighted { @include semi-bold-italic; }
            }

            &.crises-card {
                .InfoBox {
                    margin: 32px 0;
                }
            }

            .conclusion{
                text-align: justify;
                font-size: 20px;

                p{
                    margin-bottom: 10px;
                    text-indent: 10px;
                }
            }
        }
    }
}
</style>
