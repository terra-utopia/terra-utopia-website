<template>
    <nav class="NavBarDesktop">
        <NuxtLink to="/" class="home-logo">
            <img src="~/assets/logo.svg" />
        </NuxtLink>

        <div class="nav-link-container">
            <NuxtLink
                v-for="(entry, i) in entries"
                :to="entry.to"
                v-html="entry.name"
                :key="i"
                class="nav-link"
                :class="{ disabled: !entry.to, active: entry.active }"
            />
        </div>
    </nav>
</template>


<script>
export default {
    props: ['entries'],
};
</script>


<style lang="scss" scoped>
@import "~/assets/shared-styles.scss";

.NavBarDesktop {
    margin: 8px 40px 40px 40px;
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    align-items: center;

    a.home-logo {
        margin-top: 4px;
        margin-right: 24px;

        img {
            width: 140px;
            background: $c-extralight;
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        transform: scale(1);
        transition: 0.3s;
        &:hover {
            transform: scale(1.05);
        }
    }

    .nav-link-container {
        flex-grow: 1;
        margin: { left: auto; right: auto; }; // kinda "center" the links
        max-width: 1630px; // to prevent that nav-links become one-liners (would make them stick to the top of the screen)
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-around; // only important for really really wide monitors ??

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

            &.active {
                text-decoration: underline;
            }

            &.disabled {
                text-shadow: none;
                color: rgba($c-extralight, 0.5);
                cursor: default;
            }

            &:not(.disabled) {
                &::before {
                    content: "";
                    width: 100%;
                    height: 100%;
                    background: $nav-white-bg;
                    border: $nav-white-border;
                    border-radius: $nav-border-r;
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    opacity: 0;
                    transform: scale(0.95);
                    transition: 0.3s;
                }

                &:hover::before {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        }
    }
}
</style>

<style lang="scss" scoped>
/* PREVENT THAT THE SERVER-SIDE-RENDERED DESKTOP NAVBAR IS SHOWN ON MOBILE DEVICES */
@media not all and (min-width: 1060px) {
    .NavBarDesktop {
        justify-content: center;
        margin-bottom: 20px;
        
        & > *:not(a.home-logo) {
            display: none;
        }
        a.home-logo {
            margin: 0;

            img {
                width: 100px;
            }
        }
    }
}
</style>