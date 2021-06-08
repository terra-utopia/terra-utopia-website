<template>
    <div class="roadmap-sidebar">
        <template v-for="(text, i) in $options._staticData.texts">
            <img class="roadmap-svg" :key="i" :src="text.svg">
            <img
                v-if="i < $options._staticData.texts.length-1" :key="i+0.5"
                class="roadmap-separator"
                src="~assets/roadmapSVG/separator-vertical.svg"
            />
        </template>
    </div>
</template>

<script>
import texts from "~/assets/roadmap.js";
import research from "~/assets/roadmapSVG/research.svg";
import concept from "~/assets/roadmapSVG/concept.svg";
import networking from "~/assets/roadmapSVG/networking.svg";
import campaign from "~/assets/roadmapSVG/campaign.svg";
import globalAssembly from "~/assets/roadmapSVG/global-assembly.svg";
import referendum from "~/assets/roadmapSVG/referendum.svg";

export default {
    _staticData: {  // this custom property is not reactivley bound by Vue (in contrast to the 'data' property)
        texts,
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/shared-styles.scss";

.roadmap-sidebar{
    height: 80vh;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    // border: 2px solid $c-extradark;
    padding: 10px 0px;
    border-radius: 5px;


    .roadmap-svg{
        margin: 5px;
        max-width: 80px;
        width: auto;
        transition: transform .2s ease-in-out;
    }

    .roadmap-separator{
        margin: 0px 5px;
        height: 100%;
        max-width: 80px;
    }
}
</style>