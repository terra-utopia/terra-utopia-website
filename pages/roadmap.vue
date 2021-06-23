<template>
    <main class="StructureOfTerra">
        <CenteredBodyColumn>
            <Card
            :heading="'Roadmap For The Creation Of Terra'"
            :isSuperHeading="false"
            class="main-card"
            >
                <p class="introduction">Here we want to describe the preliminary plan for the creation of a global, federal democracy:</p>
                <div class="flex-wrapper">
                    <RoadmapSideBar class="roadmap-sidebar" />
                    <div class="roadmap-main">
                        <div
                        v-for="(text,i) in $options._staticData.texts"
                        :key="i"
                        class="roadmap-text"
                        >
                            <h2>{{text.title}}</h2>
                            <section v-html="text.htmlContent" />
                            <div class="scroll-anchor" :id="(text.title.replace(/ /g,''))"></div>
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

                .roadmap-main {

                    .roadmap-text{
                        padding: 10px { bottom: 30px };
                        position: relative;

                        h2{
                            font-size: 30px;
                            text-decoration: underline;
                        }

                        section{
                            text-align: justify;
                            font-size: 20px;
                        }

                        .scroll-anchor{
                            position: absolute;
                            top: -30vh;
                        }
                    }
                }

                @media(min-width:760px){
                    display: flex;
                    .roadmap-sidebar{
                        position: -webkit-sticky; /* Safari */
                        position: sticky;
                        top: 10vh;
                    }

                    .roadmap-main{

                        .roadmap-text{

                            padding-left: 30px;
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