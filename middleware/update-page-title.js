// general hint: middleware is consumed/configured/installed in `nuxt.config.js`

import routeNames, { compareRoutes } from '../assets/route-names';


/**
 * middleware function (which is naturally called on every page navigation) to update the page title according to the current route
 */
export default function(context) {
    const activeRoute = routeNames.filter(({ path }) => compareRoutes(path, context.route.path))[0];
    if (!activeRoute) {
        console.warn(`❌ Unknown route '${context.route.path}'; this should never happen`);
    }
    context.store.commit('updatePageTitle', `Terra Utopia - ${activeRoute ? activeRoute.name : 'XXX'}`);
};
