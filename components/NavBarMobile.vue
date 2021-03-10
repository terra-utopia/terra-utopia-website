<template>

    <nav class="NavBarMobile" :class="{ collapsed: collapsed}">
        <div class="nav-header-container">
            <!-- LOGO -->
            <NuxtLink to="/" class="home-logo">
                <img src="~/assets/svg/Logo.svg" />
            </NuxtLink>

            <!-- MOBILE NAVIGATION HEADER -->
            <div class="nav-header">
                <NuxtLink :to="activeEntry.to" v-html="activeEntry.name"></NuxtLink>
                <img src="~/assets/svg/menu-icon.svg" />
            </div>
        </div>

        <!-- Main Navigation List -->
        <div class="nav-link-container">
            <NuxtLink v-for="(entry, i) in entries"
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
    props: ['entries', 'activeEntry'],
    data() {
        return {
            collapsed: true,
        };
    },
};
</script>


<style lang="scss" scoped>
@import '~assets/shared-styles';

.NavBarMobile {
    
    .nav-header-container {
        position: relative; //XXX
        overflow: auto; // necessary to make the containers height match the height of its content
        padding: 20px 40px;

        a.home-logo {
            float:left;
            
            img {
                width: 160px;
                background: $c-extralight;
                border-radius: 50%;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
            }

            transform: scale(1);
            transition: .6s;
            &:hover {
                transform: scale(1.05);
            }
        }

        .nav-header {
            float: right;
            text-align: center;
            height: 100%;
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
            position: relative;  // for absolute '::after'

            &:not(:last-child)::after {  // separation lines
                content: '';
                position: absolute;
                top: 100%;
                left: 16px;
                right: 8px;
                border-top: $nav-white-border;
            }
            &:hover {
                background: $nav-white-bg;
            }
        }
    }

    &.collapsed {

    }
}
</style>