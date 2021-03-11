<template>
    <nav class="NavBarMobile" :class="{ collapsed: collapsed }">
        <div class="nav-header-container">
            <!-- LOGO -->
            <NuxtLink to="/" class="home-logo">
                <img src="~/assets/logo.svg" />
            </NuxtLink>

            <!-- MOBILE NAVIGATION HEADER -->
            <div class="nav-header-wrapper">
                <div class="nav-header" v-on:click="toggleNavCollapsed">
                    <NuxtLink
                        :to="activeEntry.to"
                        v-html="activeEntry.name"
                    ></NuxtLink>
                    <img src="~/assets/menu-icon.svg" />
                </div>
            </div>
        </div>

        <!-- Main Navigation List -->
        <div class="nav-link-container">
            <NuxtLink
                v-for="(entry, i) in entries"
                :to="entry.to"
                :key="i"
                class="nav-link"
                :class="{ disabled: !entry.to }"
            >
                <img
                    v-if="entry.active"
                    src="~/assets/active-nav-link-pointer.svg"
                />
                <span v-html="entry.name"></span>
            </NuxtLink>
        </div>
    </nav>
</template>


<script>
export default {
    props: ['entries', 'activeEntry'],
    data() {
        return {
            collapsed: true,
        };
    },
    methods:{
        toggleNavCollapsed(event) {
            this.collapsed = !this.collapsed;
        }
    }
};
</script>


<style lang="scss" scoped>
@import "~/assets/shared-styles.scss";

.NavBarMobile {
    .nav-header-container {
        display: flex;
        align-items: center;
        overflow: visible; // necessary to make the containers height match the height of its content
        margin: 20px 40px;

        a.home-logo {

            img {
                width: 0px;
                opacity: 0;
                transition: opacity 0.2s linear, width .6s ease-in-out;
                background: $c-extralight;
                border-radius: 50%;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
            }

            transform: scale(1);
            transition: transform 0.3s;
            &:hover {
                transform: scale(1.05);
            }
        }
        
        .nav-header-wrapper{
            width: 100%;

            .nav-header {
                width: fit-content;
                float: right;
                
                padding: 5px;
                background: $nav-white-bg;
                border: $nav-white-border;
                border-radius: $nav-border-r;

                text-align: center;
                color: $c-extralight;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
                font-size: 20px;
                @include bold-italic;

                display: flex;
                align-items: center;

                a{
                    margin: 0 5px;
                    transform: translateX(100%);
                    transition: transform 1s ease-in-out;
                }

                img{
                    margin: 5px;
                }

                &:hover{
                    cursor: pointer;
                }

            }
        }
    }

    .nav-link-container {
        margin: 12px 16px 0 auto;
        width: fit-content;
        max-width: calc(100% - 12px - 12px);
        display: flex;
        flex-flow: column;
        align-items: stretch;
        background: $nav-white-bg;
        border: $nav-white-border;
        border-radius: $nav-border-r;

        a {
            padding: 8px 16px 8px 32px;
            text-align: right;
            color: $c-extralight;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
            font-size: 16px;
            @include bold-italic;
            position: relative; // for absolute '::after'

            &:not(:last-child)::after {
                // separation lines
                content: "";
                position: absolute;
                top: 100%;
                left: 16px;
                right: 8px;
                border-top: $nav-white-border;
            }

            &:hover {
                background: $nav-white-bg;
            }

            img {
                animation: jumping-pointer 1s infinite ease-in-out;
            }
        }
    }

    &.collapsed {
        
        .nav-header-container{

            a.home-logo{

                img{
                    transition: opacity .2s linear .4s, width .6s ease-in-out;
                    width: 160px;
                    opacity: 1;
                }
            }

            .nav-header-wrapper{

                .nav-header{

                    a{
                        transform: translateX(0%);
                    }
                }
            }
        }
    }
}

@keyframes jumping-pointer {
    0% {
        transform: translateX(-12px);
    }
    50% {
        transform: translateX(-2px);
    }
    100% {
        transform: translateX(-12px);
    }
}
</style>