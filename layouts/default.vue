<template>
    <div>
        <Nuxt />
    </div>
</template>


<script>
export default {};
</script>


<style lang="scss">
@import "../assets/fonts/loadCustomFonts";
@import "../assets/fonts/useCustomFonts";

*,
*::before,
*::after {
    /* DEFAULTS */
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 0;
    outline: none;
    background: none;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html {
    font-size: 16px; // used for 'rem' units
    color: white;
}

.drop-shadow-large {
    filter: drop-shadow(0vw 0.41vw 0.28vw rgba(0, 0, 0, 0.4));
}

@media (max-width: 600px) {
    .drop-shadow-large {
        filter: drop-shadow(0vw 0.6vw 0.4vw rgba(0, 0, 0, 0.4));
    }
}
</style>
