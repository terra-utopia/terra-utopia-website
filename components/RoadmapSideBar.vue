<template>
    <div class="roadmap-sidebar">
        <template v-for="(text, i) in $options._staticData.texts">
            <a 
                :href="'#'+text.title.replace(/ /g,'')"
                class="roadmap-link"
                :key="i"
            >
                <img
                    class="roadmap-svg"
                    :class="{active : (activeElement-1==i)}"
                    :src="text.svg"
                >
                <div class="roadmap-svg-caption-wrapper">
                    <div
                        class="roadmap-svg-caption"
                        v-html="text.title"
                    >
                </div>
                </div>
            </a>
            
            <img
                v-if="i < $options._staticData.texts.length-1" :key="i+0.5"
                class="roadmap-separator"
                src="~assets/roadmap-separator-vertical.svg"
            >
        </template>
    </div>
</template>

<script>
import texts from "~/assets/roadmap.js";

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
            let elements = document.getElementsByClassName("roadmap-text");
            let counter = 0;
            for(const element of elements){
                if (element.getBoundingClientRect().top<window.innerHeight*(0.5)) {
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

@media(min-width:760px){
    .roadmap-sidebar{
        height: 80vh;
        width: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;

        border-right: 1px solid $c-extradark;
        padding: 10px { left: 0px };

        .roadmap-link{

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
                    // transform: scale(1.05);
                    cursor: pointer;
                }
            }

            .roadmap-svg-caption-wrapper{
                display: none;
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
}

@media(max-width:759px){
    .roadmap-sidebar{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 30px;
        column-gap: 20px;
        margin: 20px 0px;
        align-items: flex-end;

        .roadmap-link{
            height: 100%;
            background-color: rgba($c-extradark, 0);

            .roadmap-svg{
                height: 100px;
                margin: 5px;
                max-height: 100px;
                width: 100%;
            }

            .roadmap-svg-caption-wrapper{
                height: 29px;
                display: flex;
                justify-content: center;
                align-items: center;


                .roadmap-svg-caption{
                    font-size: 20px;

                    @media(max-width:480px){
                        font-size: 16px;
                    }
                }
            }
        }

        .roadmap-separator{
            display: none;
        }
    }
}

</style>