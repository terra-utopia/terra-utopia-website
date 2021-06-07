<template>
    <main class="DisclaimerPage">
        <CenteredBodyColumn>
            <Card :heading="'Disclaimer'" :isSuperHeading="false">
                <!-- text losely based on the disclaimer generator at https://datenschutz-generator.de (German) -->

                <h4>General exclusion of liability</h4>
                <p>
                    All content on this website has has been created in good faith, in according to our current state of knowledge, and is intended for general information purposes only. We do not make any warranties about the completeness, reliability or accuracy of this information, and any action you take upon it is strictly at your own risk. The information on this website comes without any legally binding effect, except for the legally mandatory information, like the <NuxtLink to="/privacy-policy/">privacy policy</NuxtLink><!-- renders to an <a> tag -->.
                    We reserve the right to modify or delete the contents in whole or in part.
                </p>

                <h4>Links to external websites</h4>
                <p>
                    Contents of third-party websites to which we refer through the hyperlinks present on our website are outside our scope of responsibility. The provider of the linked websites is solely liable for all contents and for damages arising from the use of the information available on the linked websites. The links on our website to other websites do not imply a recommendation for all the content present on these sites. Site owners and content can change without notice at any time, which may occur before we have the opportunity to remove a link.
                </p>

                <h4>Copyrights and trademark rights</h4>
                <p>
                    All contents presented on this website, such as texts, photographs, graphics and trademarks, are protected by the respective intellectual property rights (copyright, trademark rights). The use, reproduction, etc. are subject to our rights or to the rights of the respective right holder.
                </p>

                <h4>Indications of infringements</h4>
                <p>
                    If you notice any violations of the law within our website, we ask you to notify us. We will remove illegal content and links immediately after notice.
                </p>

            </Card>
        </CenteredBodyColumn>
    </main>
</template>



<style lang="scss" scoped>
@import '~/assets/shared-styles.scss';

.DisclaimerPage {
    .CenteredBodyColumn {
        .Card {
            text-align: left;

            & > p {
                @include d-small-text;
            }
            & > p {
                margin: 10px 0;
            }
            & > h4 {
                margin-top: 20px;
            }
            // span.highlighted { @include semi-bold-italic; }
            a { @include default-text-link; }
        }
    }
}
</style>