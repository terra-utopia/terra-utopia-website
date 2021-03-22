<template>
    <div>
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


*,
*::before,
*::after {
    /* DEFAULTS */
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

html {
    min-height: 100%;  // 100% to ensure fully-rendered background
    overflow-y: scroll;
}

html {
    font-family: Jost;
    font-size: 20px; // used for 'rem' units
    font-weight: 400;
    color: #303B5E;
    background: repeating-linear-gradient($c-medium, $c-extradark 1500px, $c-medium 3000px);
}
</style>
