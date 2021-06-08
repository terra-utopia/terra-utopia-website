<template>
    <main class="StructureOfTerra">
        <CenteredBodyColumn>
            <Card
            :heading="'Roadmap For The Creation Of Terra'"
            :isSuperHeading="false"
            class="main-card"
            >
                <div class="flex-wrapper">
                    <RoadmapSideBar class="roadmap-sidebar" />
                    <div class="roadmap-texts">
                        Keks
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
.StructureOfTerra{

    .CenteredBodyColumn{

        .main-card{
            
            .flex-wrapper{
                display: flex;

                .roadmap-sidebar{

                }
            }
        }
    }
}
.roadmap-svg{
    width: 70%;
}

</style>