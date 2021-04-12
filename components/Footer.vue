<template>
    <footer class="Footer">
        <NuxtLink
                v-for="(entry, i) in entries"
                :to="entry.to"
                v-html="entry.name"
                :key="i"
                class="nav-link"
            />
    </footer>
</template>

<script>
export default {
    data: ()=>{
        return{
            entries: [
                { name: 'Disclaimer', to: '/disclaimer/' },
                { name: 'Data Policy', to: '/dataPolicy/' },
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
@import '~/assets/shared-styles.scss';

.Footer {
    width: fit-content;
    margin: auto;
    display: flex;
    flex-flow: row;
    align-items: center;
    border-top: $nav-white-border;
    margin-bottom: 20px;

    a {
        position: relative;  // for absolute positioned child '::before'
        padding: 6px 16px;
        @media (max-width: 1140px) { padding: 6px 8px; }
        margin: 0 16px;
        @media (max-width: 1300px) { margin: 0 5px; }
        text-align: center;
        color: $c-extralight;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
        font-size: 24px;
        @media (max-width: 1450px) { font-size: 20px; }
        @include bold-italic;
        opacity: 0.7;
        transition: opacity 0.3s ease-in-out;

        &:hover{
            opacity: 1;
        }
    }
}
</style>