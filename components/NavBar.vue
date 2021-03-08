<template>
    <nav class="NavBar" :class="{ opened: opened, mobileNavigation: mobileNavigation }">

        <!-- LOGO -->
        <NuxtLink to="/">
            <img src="~/assets/svg/Logo.svg" />
        </NuxtLink>

        <!-- MOBILE NAVIGATION HEADER -->
        <div class="mobile-navigation-header">
            <NuxtLink :to="activeEntry.to" v-html="activeEntry.name"></NuxtLink>
            <img src="~/assets/svg/menu-icon.svg" />
        </div>

        <!-- Main Navigation List -->
        <NuxtLink v-for="(entry, i) in entries"
            :to="entry.to"
            v-html="entry.name"
            :key="i"
            class="nav-link"
            :class="{ disabled: !entry.to, active: entry.active }"
        >
        </NuxtLink>
    </nav>
</template>

<script>
const entries = [
    { name: 'Home <br> Necessity Of A World State', to: '/'},
    { name: 'Structure Of The World State', to: '/abc' },
    { name: 'Roadmap', to: '' },
    { name: 'A New Economic System', to: '' },
    { name: 'Join', to: '' },
    { name: 'FAQ', to: '' },
    { name: 'About', to: '' },
];


export default {
    data() {
        return {
            opened: true,
            mobileNavigation: undefined,
        }
    },
    computed: {
        entries() {
            console.log('entries computed:', entries.map(entry => Object.assign({ ...entry }, { active: entry.to === this.$route.path })))
            return entries.map(entry => Object.assign({ ...entry }, { active: entry.to === this.$route.path }));
        },
        activeEntry() {
            return this.entries.filter(entry => { return entry.active })[0];
        }
    },
    created() {
        const updateMobileNavigation = () => {
            this.mobileNavigation;  // XXX
        }

        updateMobileNavigation();
        window.addEventListener('resize', updateMobileNavigation)
    },
};
</script>

<style lang="scss" scoped>
.NavBar {

    a {

        &.disabled {

        }
    }
}

.NavBar.opened {
    
}
</style>