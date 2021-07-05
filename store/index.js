export const state = () => ({
    pageTitle: undefined,  // will be replaced by middleware (which also works for static site generation)
});

export const mutations = {

    updatePageTitle(state, pageTitle) {
        state.pageTitle = pageTitle;
    },

};
