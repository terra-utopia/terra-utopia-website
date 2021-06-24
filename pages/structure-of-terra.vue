<template>
    <main class="JoinPage">
        <CenteredBodyColumn>
            <Card :heading="'Structure Of Terra'" :isSuperHeading="false">
                <p>Here we want to explain our vision of a federal, global democracy. However, we are neither legitimized nor do we have the resources to propose a global constitution that could apply to all of humanity in the future. Therefore, this is not a draft constitution, but rather a collection of ideas for how Terra could look like. It is meant to spark discussion and give you a better understanding of how we envision our future as one united species.</p>
                <p>The actual structure of Terra will be laid down in the global constitution which will be drawn up by a representative, diverse, independent, democratic and global institution - the global assembly - and legitimized by the people of each nation through a referendum.</p>
            </Card>
            <Card :heading="'Global Institutions'" :isSuperHeading="false">
                <p>To prevent arbitrary decision-making and the abuse of power, various independent global political institutions with different competencies must exist. Their structure must follow the concept of separation of powers. We propose four independent branches of government:</p>
                <ul>
                    <li>a legislative,</li>
                    <li>a judicial,</li>
                    <li>an executive and</li>
                    <li>an informative branch.</li>
                </ul>
                <p class="diagram-header">Learn more about them by exploring the diagram or using the buttons below:</p>
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

            p{
                text-align: justify;
            }

            ul{
                margin: {left:40px};
                text-align: left;
            }

            span.highlighted { @include semi-bold-italic; }

            .diagram-header{
                margin-top: 20px;
                text-align: center;
            }
        }
    }
}
</style>