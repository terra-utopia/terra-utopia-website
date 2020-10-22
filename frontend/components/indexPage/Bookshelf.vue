<template>
    <div class="Bookshelf">
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
                "Global Inequality",
                "War and Weapons of\nMass Destruction",
                "Human Rights\nViolations",
                "Mega Corporations",
                "Critical Technology",
            ],
        };
    },
};
</script>

<style lang="scss">
.Bookshelf {
    display: inline-block; // for text-align to work
    position: relative;
    width: 70vw;
    height: 35vw; // has to be static because bookshelf entries are 'position:absolute'

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