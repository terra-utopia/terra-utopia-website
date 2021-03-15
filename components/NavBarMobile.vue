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
                <img class="nav-menu-icon" src="~/assets/nav-menu-icon.svg" />
            </div>
        </div>

        <div class="opened-container"  :class="{ collapsed: collapsed }">
            <button @click="toggleNavCollapsed()">
                <img class="nav-menu-icon" src="~/assets/nav-menu-icon.svg" />
            </button >
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
        </div>
        
    </nav>
</template>


<script>
export default {
    props: ['entries', 'activeEntry'],
    data() {
        return {
            collapsed: true,
            dimensionsNavHeaderTextWrapper: {
                height: 0,
                width: 0,
            },
        };
    },
    methods:{
        toggleNavCollapsed() {
            this.collapsed = !this.collapsed;

            if (!this.collapsed) {
                addEventListenerOnce(window, 'click', this.toggleNavCollapsed);
            }
        },
    },
};

function addEventListenerOnce(target, eventType, listener) {
    target.addEventListener(eventType, function () {
        arguments;
        this;
        eventType;
    });
}
</script>


<style lang="scss" scoped>
@import "~/assets/shared-styles.scss";

img.nav-menu-icon {
    transform: translateY(3px);
}

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
             
            padding: 8px 8px;
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
                margin-left: 4px;
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
            margin-top: 53px;
            margin-bottom: 24px;
            padding: 8px;
            background: $nav-white-bg;
            border: $nav-white-border;
            border-radius: $nav-border-r;
            cursor: pointer;
        }

        .nav-link-container {
            // width: fit-content;
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

        &:not(.collapsed) {
            transition: clip-path .5s ease-in-out;
            clip-path: circle(142% at 100% 0%);
            
        }
        &.collapsed {
            transition: clip-path .5s ease-in-out;
            clip-path: circle(0% at 100% 0%);
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