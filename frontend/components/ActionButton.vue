<template>
    <div class="ActionButton" @click="$emit('click')">
        <button>
            <div class="message">{{ message }}</div>
        </button>
    </div>
</template>


<script>
export default {
    props: {
        message: {
            type: String,
            required: true,
        },
    },
};
</script>


<style lang="scss">
.ActionButton {
    button {
        border: none;
        border-radius: 0;
        width: 15rem;
        padding: 0.8rem 0;
        // border: 2px solid white;
        background: white;
        // background-color: rgba(255, 255, 255, 0.05);

        .message {
            font-size: 2rem;
            color: #445387;
            font-weight: bold;
            letter-spacing: 0.05rem;
            text-shadow: 0 3px 4px rgba(0, 0, 0, 0.5);
            transition: all 0.3s ease-out;
        }
        &:hover {
            cursor: pointer;

            .message {
                letter-spacing: 0.12rem;
                // text-shadow: 0 2px 2.5px rgba(0, 0, 0, 0.5);
                // filter: drop-shadow(0 2px 1.1px rgba(0, 0, 0, 0.7));
            }
        }
    }
}
</style>