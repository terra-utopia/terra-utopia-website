// general hint: middleware is consumed/configured/installed in `nuxt.config.js`

import routeNames from '../assets/route-names';


/**
 * middleware function (which is naturally called on every page navigation) to enforce that only routes in `route-names.js` can be accessed
 */
export default function(context) {
    // redirect to home if route is invalid
    if (routeNames.filter(route => route.path === context.route.path).length === 0) {
        console.warn(`❌ Unknown route '${context.route.path}'. This may happen if the user enters some gibberish. We'll redirect to home now...`);
        context.redirect({ path: '/' });
    }
}
