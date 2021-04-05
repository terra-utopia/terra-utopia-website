<template>
    <div class="Bookshelf">
        <a v-for="(infobox, i) in $options._staticData.infoboxes" :key="i"
            :href="`#${infobox.htmlId}`"
            v-html="infobox.title"
        >
        </a>
    </div>
</template>


<script>
import infoboxes from "~/assets/necessity-of-a-world-state.js";

export default {
    _staticData: {  // this custom property is not reactivley bound by Vue (in contrast to the 'data' property)
        infoboxes,
    },
}
</script>


<style lang="scss" scoped>
.Bookshelf {
    
    a {
        display: block;
    }
}
</style>