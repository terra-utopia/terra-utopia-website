<template>
    <div>
        <Nuxt />
    </div>
</template>


<script>
import { install_reactive_vh } from "../assets/js/reactive_vh.js";
export default {
    beforeMount() {
        // not called on server-render 👍 (because not allowed, because using window context)
        install_reactive_vh();
    },
};
</script>


<style lang="scss">
@import "../assets/fonts/loadCustomFonts";
@import "../assets/fonts/useCustomFonts";

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html {
    font-size: 16px; // used for 'rem' units
    color: white;
}

.text-shadow-effect {
    filter: drop-shadow(0vw 0.41vw 0.28vw rgba(0, 0, 0, 0.4));
}

@media (max-width: 600px) {
    .text-shadow-effect {
        filter: drop-shadow(0vw 0.6vw 0.4vw rgba(0, 0, 0, 0.4));
    }
}
</style>
