<template>
    <div>
        <div class="background-pane"></div>
        <img class="earth-stripes-background" src="~/assets/earth-stripes-background.svg" />
        <NavBar />
        <Nuxt /><!-- the 'page' component -->
        <Footer />
    </div>
</template>


<script>
export default {};
</script>



<style lang="scss">
@import "~/assets/shared-styles.scss";


// === DEFAULTS ===
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;  // for <button>
    border-radius: 0;  // for <button>
    outline: none;  // for <button>, <input>
    background: none;  // for <button>
    text-decoration: none; // for <a>
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
h1 {
    font-weight: 400;
}
a {
    color: inherit;
}


// === LAYOUT STYLE ===

html {
    overflow-y: scroll; // to prevent flashing scrollbar on page navigations

    font-family: Jost;
    font-size: 20px; // used for 'rem' units
    @include regular-normal;
    color: #303B5E;
}

div.background-pane {
    position: fixed;
    z-index: -1;
    background: linear-gradient($c-medium, $c-extradark 150%);
    width: 100vw;
    height: 100vh;
    bottom: 0;
    left: 0;
}

img.earth-stripes-background {
    @media (max-width: 1200px) { display: none; }
    width: 400px;
    position: fixed;
    z-index: -1;
    left: calc(50% + 345px);
    top: 70%;
    transform: translateY(-50%);
}
</style>
