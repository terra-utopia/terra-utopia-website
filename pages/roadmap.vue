<template>
    <main class="StructureOfTerra">
        <CenteredBodyColumn>
            <Card v-for="(text, i) in $options._staticData.texts" :key="i"
            :heading="text.title"
            :isSuperHeading="false"
            class="roadmap-card"
            >
            <img class="roadmap-svg"  :src="text.svg">
            <div v-html="text.htmlContent" />
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
    head() {  // metadata for the html '<head></head>' element
        return {
            // title: "Terra Utopia - Home - Necessity Of A World State",
        };
    },
};
</script>

<style lang="scss" scoped>
.roadmap-svg{
    width: 70%;
}

</style>