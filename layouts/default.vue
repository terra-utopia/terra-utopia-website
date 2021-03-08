<template>
    <div>
        <NavBar />
        <Nuxt />
        <Footer />
    </div>
</template>


<script>
export default {};
</script>



<style lang="scss">
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
    min-height: 100%;
}

html {
    font-family: Jost;
    font-size: 20px; // used for 'rem' units
    font-weight: 400;
    color: #303B5E;
    background: repeating-linear-gradient(#3271d0, #303B5E 1500px, #3271d0 3000px);
}
</style>
