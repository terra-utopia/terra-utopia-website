// general hint: middleware is consumed/configured/installed in `nuxt.config.js`

import routeNames from '../assets/route-names';


/**
 * middleware function (which is naturally called on every page navigation) to update the page title according to the current route
 */
export default function(context) {
    const activeRoute = routeNames.filter(({ path }) => path === context.route.path)[0];
    if (!activeRoute) {
        console.warn(`❌ Unknown route '${context.route.path}'. This should never happen because we have 'enforce-routes' middleware!`);
    }
    context.store.commit('updatePageTitle', `Terra Utopia - ${activeRoute ? activeRoute.name : 'XXX'}`);
};
