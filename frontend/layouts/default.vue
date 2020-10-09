<template>
  <div>
    <Nuxt />
  </div>
</template>


<script>
import { install_reactive_vh } from "../assets/js/reactive_vh.js";
export default {
  beforeMount() {
    // not called on server-render 👍
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
}

html {
  font-size: 16px; // used for 'rem' units
  color: white;
}
</style>
