<template>
    <nav class="NavBarMobile">
        
        <div class="collapsed-container">
            
            <NuxtLink to="/" class="home-logo">
                <img src="~/assets/logo.svg" />
            </NuxtLink>

            <div class="nav-header" @click="collapsed=!collapsed">
                <NuxtLink
                    class="nav-header-text"
                    v-if="activeEntry"
                    :to="activeEntry.to"
                    v-html="activeEntry.name"
                ></NuxtLink>
                <img role="button" class="nav-menu-icon" src="~/assets/nav-menu-icon.svg" />
            </div>
        </div>

        <div class="blocking-pane" :class="{ collapsed: collapsed }" @click="collapsed=true"></div>

        <div class="opened-container" :class="{ collapsed: collapsed }">
            <img class="cancel-icon" src="~/assets/cancel-icon.svg" @click="collapsed=true" />
            <div class="nav-link-container">
                <NuxtLink
                    v-for="(entry, i) in entries"
                    :to="entry.to"
                    :key="i"
                    class="nav-link"
                    :class="{ disabled: !entry.to }"
                    @click.native="collapsed=!!entry.to"
                >  <!-- `.native` is required for events on `<NuxtLink>` elements in general --><!-- `=!!entry.to` prevents collapse if `entry` is disabled -->
                    <span class="nav-link-text-wrapper">
                        <span v-html="entry.name" />
                        <img
                            v-if="entry.active"
                            src="~/assets/active-nav-link-pointer.svg"
                        />
                    </span>
                </NuxtLink>
            </div>
            <img class="nav-bg-logo" src="~/assets/logo.svg" />
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
@import "~/assets/shared-styles.scss";


.NavBarMobile {

    .collapsed-container {
        display: flex;
        flex-flow: row;
        align-items: center;
        margin: { top: 8px; bottom: 40px; left: 40px; right: 40px; };
        @media (max-width: 700px) { margin: { left: 12px; right: 12px; }; }
        @media (max-width: 650px) { margin-bottom: 30px; }
        @media (max-width: 410px) { margin-bottom: 20px; }

        a.home-logo {
            margin-top: 4px;
            margin-right: 24px;
            @media (max-width: 410px) { margin-right: 12px; }

            img {
                width: 140px;
                @media (max-width: 650px) { width: 120px; }
                @media (max-width: 410px) { width: 100px; }
                background: $c-extralight;
                border-radius: 50%;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
            }

            transition: transform 0.3s;
            &:hover { transform: scale(1.05); }
        }
        
        .nav-header {
            margin-left: auto;  // lets the element float to the right in the parent flex box
            width: fit-content;
            background: $nav-white-bg;
            border: $nav-white-border;
            border-radius: $nav-border-r;
            text-align: center;
            color: $c-extralight;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
            @include bold-italic;
            @media (max-width: 460px) { font-size: 18px; } // instead of default '20px' von 'html:root'
            @media (max-width: 380px) { font-size: 16px; }

            display: flex;
            flex-flow: row;
            align-items: center;

            .nav-header-text{
                margin: 5px 12px 5px 12px;
            }

            img.nav-menu-icon {
                filter: drop-shadow(0 2px 2px rgba(0,0,0,0.25));
            }

            @media (hover: hover) {  // only for devices whose primary pointer device supports hover (exludes most mobile devices)
                &:hover{
                    cursor: pointer;
                    background: $nav-white-bg-highlighted;
                }
            }
        }
    }

    $opening-transition-duration: 0.65s;  // variable, because identical value is used twice

    .blocking-pane {
        position: fixed;
        z-index: 1;
        top: 0;
        right: 0;
        left: 0;
        height: calc(100% + 100px);  // to fix mobile browser problems with collapsible navigation header (dynamic height)
        background: rgba(0, 0, 0, 0.65);

        transition: opacity $opening-transition-duration linear;
        &.collapsed {
            opacity: 0;
            pointer-events: none;  // make the object not only invisble but also permeable for pointer interactions
        }
        &:not(.collapsed) {
            opacity: 1;
        }
    }

    .opened-container {
        position: absolute;
        z-index: 1;
        width: 100%;
        top: 0;
        right: 0;
        @media (min-width: calc(600px + 32px + 50px)) {  // when '.opened-container' becomes fix-width-sized not full-width-sized
            right: 32px;
            width: 600px;
        }
        background: linear-gradient(to bottom, $c-medium 0%, $c-dark 100%);
        padding: 28px 20px;
        @media (max-width: 400px) { padding: 28px 12px; }
        border-radius: 0 0 20px 20px;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.50);
        overflow: hidden; // to hide bg logo overflow
        
        display: flex;
        flex-flow: column;
        align-items: flex-end;

        transition: transform $opening-transition-duration ease-in-out;
        &.collapsed {
            transform: translateY(calc(-100% - 40px));
        }
        &:not(.collapsed) {
            transform: translateY(0);
        }

        img.cancel-icon {
            margin-bottom: 16px;
            cursor: pointer;
            filter: drop-shadow(0 2px 2px rgba(0,0,0,0.25));
            // display: block;  // fixes weird spacings of inline display (vertical-align: baseline)
        }

        .nav-link-container {
            // this element is aligned right because of parent's `align-items: flex-end`
            background: $nav-white-bg;
            border: $nav-white-border;
            border-radius: $nav-border-r;

            display: flex;
            flex-flow: column;
            align-items: stretch;

            a {
                padding: { top: 8px; bottom: 8px; left: 58px; right: 20px; };
                @media (max-width: 400px) { padding: {left: 44px; right: 16px; } }
                text-align: right;
                font-size: 16px;
                line-height: 130%;
                @include bold-italic;
                position: relative; // for absolute '::after' separation lines
                &:not(.disabled) {
                    color: $c-extralight;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
                    &:hover {
                        background: $nav-white-bg;  // on top of parent element's background (same transparent color twice lets it look even more white/highlighted)
                    }
                }
                &.disabled {
                    color: rgba($c-extralight, 0.5);
                    cursor: default;
                }

                &:not(:last-child)::after {  // separation lines
                    content: "";
                    position: absolute;
                    top: 100%;
                    left: 16px;
                    right: 8px;
                    border-top: $nav-white-border;
                }

                span.nav-link-text-wrapper {
                    position: relative;  // for absolute positioned 'img' child

                    span.nav-link-text{
                    }
                    img {
                        position: absolute;
                        right: 100%;
                        top: calc(0.5 * 1.3 * 16px * 1.11); // 50% line-height, plus a little deeper
                        animation: jumping-pointer 1.0s infinite ease-in-out;
                        filter: drop-shadow(0 2px 2px rgba(0,0,0,0.25));
                    }
                }
            }
        }

        .nav-bg-logo {
            position: absolute;
            left: -60px;
            bottom: -120px;
            width: 400px;
            filter: brightness(60%);
            opacity: .3;
            z-index: -1;
        }
    }
}

@keyframes jumping-pointer {
    0% {
        transform: translateY(-50%) translateX(-16px);
    }
    50% {
        transform: translateY(-50%) translateX(-8px);
    }
    100% {
        transform: translateY(-50%) translateX(-16px);
    }
}
</style>