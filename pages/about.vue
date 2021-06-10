<template>
    <main class="AboutPage">
        <CenteredBodyColumn>
            <Card :heading="'About Terra Utopia'" :isSuperHeading="false">
                <p>Terra Utopia is the movement for a global, federal democracy - "Terra".</p>
                <br>
                <p>Our objective is to create a global society that will rise to the challenges of the 21st century.</p>
                <br>
                <p>We believe that every human being should have the right and the possibility to pursue a self-determined life far from phyiscal and psychological violence. Furthermore, it must be possible for everyone to claim their human rights.</p>
                <br>
                <p>We are democratic, peaceful and non-partisan. We see diversity as a strength and try to promote it wherever possible.</p>
                <br>
                <p>We want to inspire people with our ideas and encourage them to unite in the struggle against global crises and in the fight for a livable future.</p>
                <br>
                <p>We fight for democracy, human rights and dignity, global peace and equality. We oppose discrimination of any kind, the exploitation of natural ressources and the abuse of people.</p>
                <div class="line"/>
                <p>Feel free to contact us via e-mail:</p>
                <p><a href="mailto:contact@terra-utopia.world">contact@terra-utopia.world</a></p>
            </Card>
        </CenteredBodyColumn>
    </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '~/assets/shared-styles.scss';
.AboutPage{
    .CenteredBodyColumn {
        .Card {
            margin-bottom: 32px;

            span.highlighted { @include semi-bold-italic; }

            a { @include default-text-link; }

            .line {
                background-color: $c-extradark;
                height: 1px;
                width: 50%;
                margin: 50px auto;
            }
        }
    }
}
</style>