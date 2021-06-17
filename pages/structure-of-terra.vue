<template>
    <main class="JoinPage">
        <CenteredBodyColumn>
            <Card :heading="'Structure Of Terra'" :isSuperHeading="false">
                
                <InstitutionsDiagram :content="$options._staticData.institutions" />
            </Card>
        </CenteredBodyColumn>
    </main>
</template>

<script>
import institutions from "~/assets/structure-of-terra.js";

export default {
    _staticData: {
        institutions,
    },
}
</script>

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