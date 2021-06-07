<template>
    <main class="JoinPage">
        <CenteredBodyColumn>
            <Card :heading="'Join The Movement'" :isSuperHeading="false">
                <p>Terra Utopia is aiming to become a global movement!</p>
                <br>
                <p>Whoever you are, wherever you live, however much time you have to spare, we invite you to join us in shaping the society of tomorrow!</p>
                <br>
                <p>In the current phase of our journey we are defining our goals, developing our strategy and building our internal structure. Therefore we welcome every idea, criticism and suggestion.</p>
                <br>
                <p>If you want to participate, we invite you:</p>
                <br>
                <a href="https://discord.gg/bejkCdQeKy" target="_blank"><ActionButton>Join Us On Discord!</ActionButton></a>
            </Card>
        </CenteredBodyColumn>
    </main>
</template>


<style lang="scss" scoped>
@import '~/assets/shared-styles.scss';

.JoinPage{
    .CenteredBodyColumn {
        .Card {
            margin-bottom: 32px;

            span.highlighted { @include semi-bold-italic; }
        }
    }
}
</style>