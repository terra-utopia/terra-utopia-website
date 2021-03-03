<template>
    <nav class="NavBar">
        <NuxtLink v-for="entry in entries"
            :to="entry.to"
            v-html="entry.name"
            :key="entry.to"
            :class="{ inactive: !entry.to }"
        >
        </NuxtLink>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            entries: [
                { name: 'Home <br> Necessity Of A World State', to: '/'},
                { name: 'Structure Of The World State', to: '/abc' },
                { name: 'Roadmap', to: '' },
                { name: 'A New Economic System', to: '' },
                { name: 'Join', to: '' },
                { name: 'FAQ', to: '' },
                { name: 'About', to: '' },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
.NavBar {

    a {

        &.inactive {

        }
    }
}
</style>