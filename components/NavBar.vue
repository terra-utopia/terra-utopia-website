<template>
    <NavBarDesktop v-if="!isMobileNavigation" :entries="entries" />
    <NavBarMobile v-else :entries="entries" :activeEntry="activeEntry" />
</template>

<script>
const entries = [
    { name: 'Home • Necessity Of A World State', to: '/' },
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
            isMobileNavigation: false,  // will be dynamically overwritten in `created()` (client-only)
        };
    },
    computed: {
        entries() {
            return entries.map(entry => Object.assign({ ...entry }, { active: entry.to === this.$route.path }));
        },
        activeEntry() {
            return this.entries.filter(entry => { return entry.active; })[0];
        },
    },
    mounted() {
        if (process.client) {  // only react to screen size if we're on a physical device (instead of the render server)
            const updateMobileNavigation = () => {
                this.isMobileNavigation = window.innerWidth < 1060;
            };
            updateMobileNavigation(); // initial evaluation of screen size
            window.addEventListener('resize', updateMobileNavigation); // always reevaluate when screen size changes
        }
    },
};
</script>
