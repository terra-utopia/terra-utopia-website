<template>
    <main class="StructureOfTerra">
        <CenteredBodyColumn>
            <Card
            :heading="'Roadmap For The Creation Of Terra'"
            :isSuperHeading="false"
            class="main-card"
            >
                <p class="introduction">Here we want to describe the preliminary plan for the creation of a global, federal democracy.</p>
                <div class="flex-wrapper">
                    <RoadmapSideBar class="roadmap-sidebar" />
                    <div class="roadmap-main">
                        <div
                        v-for="(text,i) in $options._staticData.texts"
                        :key="i"
                        :class="'roadmap-text '+(text.title.replace(/ /g,''))"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-duration="1000"
                        >
                            <h2>{{text.title}}</h2>
                            <section v-html="text.htmlContent" />
                        </div>
                    </div>
                </div>
            </Card>
        </CenteredBodyColumn>
    </main>
</template>

<script>
import texts from "~/assets/roadmap.js";

export default {
    _staticData: {  // this custom property is not reactivley bound by Vue (in contrast to the 'data' property)
        texts,
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/shared-styles.scss";

.StructureOfTerra{

    .CenteredBodyColumn{

        .main-card{

            .introduction{
                margin-bottom:20px;
            }
            
            .flex-wrapper{
                display: flex;

                .roadmap-sidebar{
                    position: -webkit-sticky; /* Safari */
                    position: sticky;
                    top: 10vh;
                }

                .roadmap-main {

                    .roadmap-text{
                        padding: 10px { left: 30px; bottom: 30px };

                        h2{
                            font-size: 30px;
                        }

                        section{
                            text-align: justify;
                            font-size: 20px;
                        }
                    }
                }
            }
        }
    }
}
.roadmap-svg{
    width: 70%;
}

</style>