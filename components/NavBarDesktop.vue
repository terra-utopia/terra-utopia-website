<template>
    <nav class="NavBarDesktop">
        <!-- LOGO -->
        <NuxtLink to="/" class="home-logo">
            <img src="~/assets/logo.svg" />
        </NuxtLink>

        <!-- Main Navigation List -->
        <div class="nav-link-container">
            <NuxtLink
                v-for="(entry, i) in entries"
                :to="entry.to"
                v-html="entry.name"
                :key="i"
                class="nav-link"
                :class="{ disabled: !entry.to, active: entry.active }"
            >
            </NuxtLink>
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
    padding: 20px 40px;
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    align-items: flex-start;

    a.home-logo {
        margin-right: 24px;

        img {
            width: 160px;
            background: $c-extralight;
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        transform: scale(1);
        transition: 0.6s;
        &:hover {
            transform: scale(1.05);
        }
    }

    div.mobile-navigation-header {
        // disabled on desktop
        display: none;
    }

    .nav-link-container {
        flex-grow: 1;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-around;

        a {
            position: relative;
            padding: 8px;
            margin: 0 5px;
            min-width: 120px;
            text-align: center;
            color: $c-extralight;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
            font-size: 24px;
            @include bold-italic;

            @media (max-width: 1450px) {
                font-size: 20px;
            }
            @media (max-width: 1260px) {
                min-width: initial;
            }

            &.active {
                text-decoration: underline;
            }

            &.disabled {
                text-shadow: none;
                color: rgba($c-extralight, 0.5);

                cursor: default;
            }

            &:not(.disabled) {
                &::after {
                    content: "";
                    width: 100%;
                    height: 100%;
                    background: rgba(#fff, 0);
                    border-radius: $nav-border-r;
                    border: 1px solid rgba(#fff, 0);
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    z-index: -1;
                    transform: scale(0.95);
                    transition: 0.6s;
                }

                &:hover::after {
                    background: $nav-white-bg;
                    border: $nav-white-border;
                    transform: scale(1);
                }
            }
        }
    }
}
</style>