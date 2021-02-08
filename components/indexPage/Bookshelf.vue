<template>
    <div class="Bookshelf drop-shadow-large">
        <div class="origin-bar">
            <BookshelfEntry
                v-for="(title, index) of bookshelf"
                :title="title"
                :key="index"
            />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bookshelf: [
                "Climate Crisis",
                "Social Inequality",
                "War and Weapons of\nMass Destruction",
                "Human Rights\nViolations",
                "Mega Corporations",
                "Critical Technology",
            ],
        };
    },
    mounted() {
        const updateBaseSize = () => {
            this.$el.style.setProperty(
                "--base-size",
                `${this.$el.offsetWidth * 0.01}px`
            );
        };
        updateBaseSize();
        window.addEventListener("resize", updateBaseSize);
    },
};
</script>

<style lang="scss">
.Bookshelf {
    position: relative; // for absolute child
    --base-size: 1vw; // overwritten on hydration with javascript
    height: calc(
        75 * var(--base-size)
    ); // has to be hard-coded because bookshelf entries are 'position:absolute'

    .origin-bar {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-flow: row;
        justify-content: center;
    }
}
</style>