<template>
    <main class="JoinPage">
        <div class="centered-body-column">
            <Card :heading="'Join The Movement'" :isSuperHeading="false">
                <p>Terra Utopia is aiming to become a global movement!</p>
                <br>
                <p>Whoever you are, wherever you live, however much time you have to spare, we invite you to join us in shaping the society of tomorrow!</p>
                <br>
                <p>In the current phase of our journey we are defining our goals, developing our strategy and building our internal structure. Therefore we welcome every idea, criticism and suggestion.</p>
                <br>
                <p>If you want to participate, we invite you:</p>
                <br>
                <a href="https://discord.gg/bejkCdQeKy" target="_blank"><button>Join Us On Discord!</button></a>
            </Card>
        </div>
    </main>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import '~/assets/shared-styles.scss';
.JoinPage{
    .centered-body-column {
        width: 95%;
        max-width: 960px;
        margin: 0 auto;

        .Card {
            margin-bottom: 32px;

            span.highlighted { @include semi-bold-italic; }

            button {
                @include d-large-text;
                font-weight: 500;
                font-style: italic;
                color: #fff;
                background-color: $c-extradark;
                padding: 6px 12px;
                cursor: pointer;
                box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4), 0 4px 50px rgba(0,0,0, 0.25);
                
                &:hover{
                    opacity: .9;
                }
            }
        }
    }
}
</style>