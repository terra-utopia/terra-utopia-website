<template>
    <div class="roadmap-sidebar">
        <template v-for="(text, i) in $options._staticData.texts">
            <img
                class="roadmap-svg"
                :class="{active : (activeElement-1==i)}"
                :key="i"
                :src="text.svg"
            >
            <img
                v-if="i < $options._staticData.texts.length-1" :key="i+0.5"
                class="roadmap-separator"
                src="~assets/roadmapSVG/separator-vertical.svg"
            >
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
    },
    data(){
        return{
            activeElement: 1
        }
    },
    methods: {
        updateActiveElement() {
            console.log("Hello World");
            let elements = document.getElementsByClassName("roadmap-text");
            let counter = 0;
            for(const element of elements){
                if (element.getBoundingClientRect().top<window.innerHeight*(0.75)) {
                    counter++;
                }
            }
            this.activeElement=counter;
        }
    },
    mounted(){
        document.addEventListener("scroll", this.updateActiveElement);
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
    justify-content: space-between;
    align-content: center;

    border-right: 1px solid $c-extradark;
    padding: 10px { left: 0px };

    .roadmap-svg{
        margin: 5px;
        padding-left: 10px;
        max-width: 80px;
        opacity: .6;

        border-left: 2px solid $c-extradark;
        border-color: rgba($c-extradark, 0);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;

        transition: .3s;

        &.active{
            opacity: 1;
            border-color: rgba($c-extradark, 1);
        }

        &:hover{
            opacity: 1;
            transform: scale(1.05);
            cursor: pointer;
        }
    }

    .roadmap-separator{
        flex-grow: 1;
        height: 0px; //necessary for flex to work properly
        max-width: 80px;

        margin: 0px 5px;
        padding-left: 10px;
        
        opacity: .6;
    }
}
</style>