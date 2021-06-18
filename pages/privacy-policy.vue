<template>
    <main class="PrivacyPolicyPage">
        <CenteredBodyColumn>
            <Card :heading="'Privacy Policy'" :isSuperHeading="false">
                
                <h4>Introduction</h4>
                <p>
                    This privacy policy page is intended to make it transparent to the user how we handle their personal data. It explains in detail which personal data we process and store.
                </p>

                <h4>Informal abstract</h4>
                <p>
                    We only process data that is necessarily transmitted to us when accessing our website. We delete any user data as soon as our hoster allows it.
                    <br>
                    As a non-profit organisation our sole intent is to contribute to a save and pleasant user experience. Therefore we naturally refrain from using cookies, tracking or profiling of any kind.
                </p>

                <h4>Processing of personal data</h4>
                <p>
                    The functioning of the internet necessitates that when a user or automated system calls up the website from our hoster's server system, a series of information is transmitted to and temporarily processed by the server in order to be able to deliver the content. This information includes:
                </p>
                <ul>
                    <li>the sub-website accessed,</li>
                    <li>the date and time of access,</li>
                    <li>the Internet protocol address (IP address) of the accessing system,</li>
                    <li>the Internet service provider of the accessing system</li>
                    <li>the browser type and version used,</li>
                    <li>the operating system used by the accessing system,</li>
                    <li>the website from which the accessing system has been referred (if applicable)</li>
                    <li>any other similar data and information</li>
                </ul>
                <p>
                    For each access to our website, our hoster's server system automatically stores the data listed above in log files, which we, unfortunately, can not prevent. Both we as the website operators and the hoster technically have access to the log files. However, we do not subsequently access, process or analyze the log files in any way for reasons that lie beyond cyber security, and our hoster is not allowed to as well (see below). We explicitly refrain from using any cookies, tracking tools or profiling software. The log files are treated confidential and are deleted on the eighth day after the user visited our website.
                </p>

                <h4>Legal basis for the processing</h4>
                <p>
                    These processing operations are based on <a href="https://gdpr-info.eu/art-6-gdpr/" target="_blank" rel="noopener noreferrer">Article 6(1) lit. f GDPR</a> for the purposes of the legitimate interests pursued by our organisation, which is to ensure the technical functionality of our website.
                </p>

                <h4>External hosting service</h4>
                <p>
                    Our website is hosted by an external service provider (hoster). Our hoster has access to the information listed above in the interest of a secure, fast and efficient provision of our online service by a professional provider (<a href="https://gdpr-info.eu/art-6-gdpr/" target="_blank" rel="noopener noreferrer">Article 6(1) lit. f GDPR</a>).
                </p>
                <p>
                    We have concluded a GDPR Data Processing Agreement (DPA) with our hoster in order to ensure data proctection compliant processing. This DPA legally requires the hoster to process personal data exclusively for the purpose of meeting their performance obligations and to not store any more data than we do.
                </p>
                <p>
                    We use the following hoster:<br>
                    BIOHOST - Lars-Helge Wilbrandt<br>
                    Nahrungsberg 70<br>
                    35390 Gießen<br>
                    <a href="https://www.biohost.de/" target="_blank" rel="noopener noreferrer">https://www.biohost.de/</a>
                </p>

                <h4>Additional transparency</h4>
                <p>
                    Our website is 100% open source, meaning that you can read the complete <a href="https://github.com/terra-utopia/terra-utopia-website" target="_blank" rel="noopener noreferrer">source code on Github</a>.
                </p>

                <h4>Contact</h4>
                <p>
                    For any questions related to the privacy policy, you may at any time contact us at <a href="mailto:contact@terra-utopia.world" target="_blank">contact@terra-utopia.world</a>.
                </p>
                <br>
            </Card>
        </CenteredBodyColumn>
    </main>
</template>



<style lang="scss" scoped>
@import '~/assets/shared-styles.scss';

.PrivacyPolicyPage {
    .CenteredBodyColumn {
        .Card {
            text-align: left;

            & > p, & > ul {
                @include d-small-text;
            }
            & > p {
                margin: 10px 0;
            }
            & > ul {
                margin: { left: 30px; bottom: 10px; };
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