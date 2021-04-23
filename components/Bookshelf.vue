<template>
    <div class="Bookshelf" :class="{ someEntryIsHovered }">
        <template v-for="(infobox, i) in $options._staticData.infoboxes">
            <a :key="i"
                :href="`#${infobox.htmlId}`"
                v-html="infobox.title"
                @mouseenter="someEntryIsHovered=true"
                @mouseleave="someEntryIsHovered=false"
            />
            <img v-if="i < $options._staticData.infoboxes.length-1" :key="i+0.5" class="bookshelf-separator"
                src="~assets/bookshelf-separator.svg"
            />
        </template>
    </div>
</template>


<script>
import infoboxes from "~/assets/necessity-of-a-world-state.js";

export default {
    _staticData: {  // this custom property is not reactivley bound by Vue (in contrast to the 'data' property)
        infoboxes,
    },
    data() {
        return {
            someEntryIsHovered: false,
        };
    },
};
</script>


<style lang="scss" scoped>
.Bookshelf {
    padding: 32px 0;

    display: flex;
    flex-flow: column;
    align-items: center;

    img.bookshelf-separator {
        margin: { top: 14px; bottom: 8px; };
    }

    @media (hover: hover) {  // only for devices whose primary pointer device supports hover (exludes most mobile devices)
        a {
            position: relative; // for absolute positioned children '::before' '::after'
            padding: 0 calc(2px + 18px + 8px);
            transition: opacity 0.15s linear;

            &::before, &::after {
                content: "";
                position: absolute;
                width: 18px;    // original dimensions of svg icon
                height: 17px;   //
                background: url('~assets/bookshelf-jump-down-icon.svg');
                top: 11px;
                opacity: 0;
                transition: opacity 0.15s linear;
            }
            &::before {
                left: 2px;
            }
            &::after {
                right: 2px;
            }
        }
        &.someEntryIsHovered {
            a:not(:hover) {
                opacity: 0.6;
            }
        }
        a:hover {
            opacity: 1;
            &::before, &::after {
                opacity: 1;
            }
        }
    }
}
</style>