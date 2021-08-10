<template>
    <NavBarDesktop v-if="!isMobileNavigation" :entries="entries" />
    <NavBarMobile v-else :entries="entries" />
</template>

<script>
import routeNames, { compareRoutes } from '~/assets/route-names.js';

export default {
    data() {
        return {
            isMobileNavigation: false,  // will be dynamically overwritten in `mounted()` (client-only)
        };
    },
    computed: {
        entries() {
            return routeNames
                .filter(route => !route.noNavBar)
                .map(route => ({
                    name: route.name,
                    to: route.path,
                    active: compareRoutes(route.path, this.$route.path),
                }));
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
