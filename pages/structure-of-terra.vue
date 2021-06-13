<template>
    <main class="JoinPage">
        <CenteredBodyColumn>
            <Card :heading="'Structure Of Terra'" :isSuperHeading="false">
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