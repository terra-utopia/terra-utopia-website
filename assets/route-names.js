import { ensureTrailingSlash } from "./util";


export default [  // the order matters for rendering the <NavBar>
    { path: '/', name: 'Home • Necessity Of A Global Democracy' },
    { path: '/structure-of-terra', name: 'Structure Of Terra' },
    { path: '/roadmap', name: 'Roadmap' },
    { path: '', name: 'A New Economic System' },
    { path: '/join', name: 'Join' },
    { path: '', name: 'FAQ' },
    { path: '/about', name: 'About' },
    { path: '/disclaimer', name: 'Disclaimer', noNavBar: true },           // << shall be excluded from <NavBar>
    { path: '/privacy-policy', name: 'Privacy Policy', noNavBar: true },   // <<
];


/**
 * checks whether two routes are equivalent
 * 
 * @param {string} routeA
 * @param {string} routeB
 * @returns {boolean} whether the routes are equivalent or not
 */
export const compareRoutes = (routeA, routeB) => {
    // don't match empty routes
    if ([routeA,routeB].some(s => !s || !s.startsWith('/'))) {
        return false;
    }

    return ensureTrailingSlash(routeA) === ensureTrailingSlash(routeB);
}