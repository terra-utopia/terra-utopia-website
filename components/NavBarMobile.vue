<template>
    <nav class="NavBarMobile">
        
        <div class="collapsed-container">
            
            <NuxtLink to="/" class="home-logo">
                <img src="~/assets/logo.svg" />
            </NuxtLink>

            <div class="nav-header" @click="toggleNavCollapsed()">
                <NuxtLink
                    class="nav-header-text"
                    :to="activeEntry.to"
                    v-html="activeEntry.name"
                ></NuxtLink>
                <img role="button" class="nav-menu-icon" src="~/assets/nav-menu-icon.svg" />
            </div>
        </div>

        <div class="opened-container" :class="{ collapsed: collapsed }">
            <button>
                <img class="nav-menu-icon" src="~/assets/nav-menu-icon.svg" />
            </button>
            <div class="nav-link-container">
                <NuxtLink
                    v-for="(entry, i) in entries"
                    :to="entry.to"
                    :key="i"
                    class="nav-link"
                    :class="{ disabled: !entry.to }"
                >
                    <span class="nav-link-text-wrapper">
                        <span v-html="entry.name" />
                        <img
                            v-if="entry.active"
                            src="~/assets/active-nav-link-pointer.svg"
                        />
                    </span>
                </NuxtLink>
            </div>
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
    methods: {
        toggleNavCollapsed() {
            this.collapsed = !this.collapsed;

            if (!this.collapsed) {
                // collapse/close navigation on ANY click
                window.addEventListener('click', this.toggleNavCollapsed, {
                    capture: true,  // needed to not instantly trigger on the opening click
                    once: true,
                });
            }
        },
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
        overflow: visible;  // necessary to make the containers height match the height of its content (?? XXX)
        padding: 20px;
        margin-bottom: 28px;

        a.home-logo {
            margin: 0px 10px;

            img {
                width: 160px;
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
        
        .nav-header {
            margin-left: auto;  // lets the element float to the right in the parent flex box
            width: fit-content;
            padding-left: 4px;
            background: $nav-white-bg;
            border: $nav-white-border;
            border-radius: $nav-border-r;
            text-align: center;
            color: $c-extralight;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
            font-size: 20px;
            @include bold-italic;

            display: flex;
            flex-flow: row;
            align-items: center;

            .nav-header-text{
                margin: 5px 0 5px 4px;
            }

            img.nav-menu-icon {
                margin-left: 12px;
            }

            &:hover{
                cursor: pointer;
            }

        }
        
    }

    .opened-container {
        position: absolute;
        z-index: 1;
        width: 100%;
        top: 0;
        left: 0;
        background: linear-gradient(to bottom, $c-special2 0%, $c-extradark 85%);
        padding: 28px 20px 28px 10px;
        border-radius: 0 0 20px 20px;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.50);
        display: flex;
        flex-flow: column;
        align-items: flex-end;

        button {  // burger-button
            margin-top: 56px;    // positioning, to be exactly over the 'img.nav-menu-icon' from the '.opened-container'
            margin-bottom: 16px;
            background: $nav-white-bg;
            border: $nav-white-border;
            border-radius: $nav-border-r;
            cursor: pointer;

            img.nav-menu-icon {
                display: block;  // fixes weird spacings of inline display (vertical-align: baseline)
            }
        }

        .nav-link-container {
            margin-bottom: 56px;
            max-width: calc(100% - 12px - 12px);

            background: $nav-white-bg;
            border: $nav-white-border;
            border-radius: $nav-border-r;

            display: flex;
            flex-flow: column;
            align-items: stretch;

            a {
                padding: 8px 16px 8px 32px;
                text-align: right;
                color: $c-extralight;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
                font-size: 16px;
                @include bold-italic;
                position: relative; // for absolute '::after'

                &:hover {
                    background: $nav-white-bg;
                }
                &:not(:last-child)::after {
                    // separation lines
                    content: "";
                    position: absolute;
                    top: 100%;
                    left: 16px;
                    right: 8px;
                    border-top: $nav-white-border;
                }
                
                span.nav-link-text-wrapper {
                    position: relative;  // for absolute positioned 'img' child
                    margin-left: 18px;  // free space for potential jumping pointer/arrow

                    span.nav-link-text{
                    }
                    img {
                        position: absolute;
                        right: 100%;
                        top: 50%;
                        animation: jumping-pointer 1.0s infinite ease-in-out;
                    }
                }
            }
        }

        $circle_center: calc(100% - 42px) 104px;
        &:not(.collapsed) {
            transition: clip-path 0.5s linear;
            clip-path: circle(142% at $circle_center);
        }
        &.collapsed {
            transition: clip-path 0.5s linear;
            clip-path: circle(0% at $circle_center);
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