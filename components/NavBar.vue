<template>
    <NavBarDesktop v-if="!isMobileNavigation" :entries="entries" />
    <NavBarMobile v-else :entries="entries" :activeEntry="activeEntry" />
</template>

<script>
const entriesRaw = [  // without 'active' property
    { name: 'Home • Necessity Of A World State', to: '/' },
    { name: 'Structure Of The World State', to: '/abc/' },
    { name: 'Roadmap', to: '' },
    { name: 'A New Economic System', to: '' },
    { name: 'Join', to: '' },
    { name: 'FAQ', to: '' },
    { name: 'About', to: '' },
];


export default {
    data() {
        return {
            isMobileNavigation: false,  // will be dynamically overwritten in `mounted()` (client-only)
        };
    },
    computed: {
        entries() {  // entriesRaw + 'active' property
            return entriesRaw.map(entry => Object.assign({ ...entry }, { active: entry.to === this.$route.path }));
        },
        activeEntry() {
            const activeEntry = this.entries.filter(entry => { return entry.active; })[0];  // can be `undefined` (ie. if user is on a route like `/disclaimer` `/privacy-policy`)
            return activeEntry;
        },
    },
    mounted() {
        if (process.client) {  // only react to screen size if we're on a physical device (instead of the render server)
            const updateMobileNavigation = () => {
                this.isMobileNavigation = window.innerWidth < 1060;  // WATCH OUT: there are other occurances of this number '1060' in other files
            };
            updateMobileNavigation(); // initial evaluation of screen size
            window.addEventListener('resize', updateMobileNavigation); // always re-evaluate when screen size changes
        }
    },
};
</script>
