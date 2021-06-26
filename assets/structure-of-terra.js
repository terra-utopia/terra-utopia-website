const institutions = [
    {
        title: "Legislative Branch",
        htmlContent: `
        <p>The legislature includes all institutions that pass laws. Whoever controls them possesses vast power over Terra because they set the fundamental rules that society follows. Therefore these institutions must have the status of a branch of government, meaning that they are completely independent and only subordinate to the people.</p>
        <br>
        <p>We plead for a three chamber system that includes a global parliament, a global council and global participatory citizens’ assemblies.</p>
        `,
        children: [
            {
                title: "The Global Parliament",
                htmlContent: `
                <p>The global parliament is formed by elected deputies from global parties. The elections take place every 4 or 5 years and they are direct, free, equal, secret and common. The people vote for the parties in a global popular vote that determines how many seats each party receives in the global parliament. We consider an electoral threshold from 2 to 5 percent for single parties to be useful.</p>
                <br>
                <p>A referendum will take place in parallel to the election. For more details read <a class="institutions-link" to="LegislativeBranch-DirectDemocracy">Direct Democracy</a>.</p>
                `
            },
            {
                title: "The Global Council",
                htmlContent: `
                <p>Each national government sends representatives that form the global council. This chamber ensures that the interests of the nations are taken into account in the global legislation. How many representatives a nation can send is determined by the size of their population, but each nation can always send at least one.</p>
                `
            },
            {
                title: "Global Citizens' Assemblies",
                htmlContent: `
                <p>For every legislative proposal and proposed amendment to the law, a global participatory citizens’ assembly must meet concerning itself with the topic.</p>
                <p>The members of this citizens’ council are chosen in a two-staged procedure that ensures that the composition is representative of the world’s population. In the first step, potential participants are drawn at random, and in the second step a selection is made that matches static criteria including gender, age, nationality, level of education, migration background, size of residence, income and potentially more.</p>
                <p>This assembly holds several meetings and discusses its respective legislative proposal. All discussions are moderated by professionals, ensuring that every voice is heard equally, and experts accompany the process, providing information and answering questions.</p>
                `
            },
            {
                title: "The Legislative Process",
                htmlContent: `
                <p>The first step on the way to a new global law is the legislative initiative. The global parliament, the world government and the global council have a right of initiative.</p>
                <p>Another possibility is that after a petition for a new law or an amendment to the law has passed a certain quorum, a global participatory citizens’ assembly meets that concerns itself with the topic and draws up a legislative proposal. In this case this citizens’ assembly also has a right of initiative.</p>
                <br>
                <p>In the second phase, the three chambers debate the proposed law individually. Because each global assembly only discusses one proposal, a new one must be initiated, unless one already exists because the proposal was submitted through a petition.</p>
                <br>
                <p>In the third phase, the three chambers have to negotiate the final version. First the parliament and the respective citizens’ assembly have to find a consensus. This process is accompanied by a mediation committee that seeks to find a compromise. If no consensus is reached, the proposed law will be discarded.</p>
                <p>If the parliament and the citizens’ assembly come to an agreement, the law is passed on to the council. If the council approves the law, it becomes legally binding.</p>
                <p>If the council raises objections, the mediation committee is extended to the council and all three chambers try to find a compromise. If the compromise is approved by all three institutions, it is legally binding. If the parliament or the citizens’ assembly do not approve the compromise, the law is discarded.</p>
                <p>If the compromise is not approved by the council, there are two different cases: Most laws are objection laws that can be passed even though the global council opposes them, if the global parliament and the respective global citizens’ assembly overrule the council’s objections. However, laws changing the constitution or affecting the finances of the national states or their organizational or administrative sovereignty are called approval laws - they can only be passed if the global council approves them.</p>
                `
            },
            {
                title: "Direct Democracy",
                htmlContent: `
                <p>We propose to allow referendums in the following two ways:</p>
                <br>
                <p>Firstly, every party that passed the electoral threshold in the last election may submit one legislative proposal six months before the next election. If the global constitutional court finds that the proposal does not violate the constitution<!-- and the global court of auditors approves the funding concept-->, it will be put to vote during the election. On election day, the people then vote on the parties, as well as on their respective legislative proposals.
                This measure is meant to increase voter turnout and combat political apathy: if someone votes for a party that does not become part of government or that does not even cross the electoral threshold, they will be less likely to find their vote pointless if they are part of the majority in some of the referendums.</p>
                <br>
                <p>Secondly, people may start a petition for a legislative proposal. If the petition passes a first quorum, a global citizens’ assembly is initiated that discusses the proposal with the global parliament and the global council as described in <a class="institutions-link" to="LegislativeBranch-TheLegislativeProcess">The Legislative Process</a>. If the legislative institutions reach an agreement that also satisfies the initiators of the petition, the proposal becomes legally binding without the need for a referendum. If however the proposal is rejected, a referendum may be initiated but only if the initial petition passes a second, significantly higher quorum. The referendum will then either be held on election day or on a day halfway through the legislative period.</p>
                <p>On request of the world government, the global parliament or the global council, the global constitutional court may examine the legislative proposal at any time.</p>
                <p>The global parliament as well as the global citizens’ assembly that initially discussed the proposed law may each submit an alternative proposal that will also be put to vote.</p>
                `
            },
            {
                title: "Regular Global Constituent Assemblies",
                htmlContent: `
                <p>Because the future cannot be accurately predicted, an unchangeable constitution will eventually become outdated. It is impossible to create a constitution today that will still be modern in a century. Therefore we propose that a regular participatory global assembly will meet, for example once in a decade, deliberating on a general overhaul of the constitution. The proposed changes are legitimated in a referendum afterwards and do not need the approval of the global parliament and global council. However, if the assembly concludes that there is no need for a major revision of the constitution or that only minor changes are necessary, it may decide against a referendum and submit its proposals under the standard legislative process.</p>
                <p>These regular global constituent assemblies are meant to encourage democratic participation and critical thinking. We hope that they foster a habit of reevaluating fundamental concepts. In this way the constitution has a chance of always adapting to the needs of its time.</p>
                `
            },
        ],
    },
    {
        title: "Judicial Branch",
        htmlContent: `
        <p>The judiciary includes all institutions that interpret laws by carrying out court cases. Whoever controls them possesses vast power over Terra because they can bend and distort the meaning of legal texts in such a way that it benefits their interests and profits them. Therefore these institutions must have the status of a branch of government meaning that they are completely independent and only subordinate to the people.</p>
        <p>A global constitutional court dealing with issues concerning the global constitution as well as several global supreme courts dealing with issues concerning the individual fields of law have to be established.</p>
        `
    },
    {
        title: "Executive Branch",
        htmlContent: `
        <p>The executive includes all institutions that execute and enforce laws. Whoever controls them possesses the monopoly of global legitimate physical power and can decide on which laws must be obeyed and which resolutions are implemented. Therefore these institutions must have the status of a branch of government meaning that they are completely independent and only subordinate to the people.</p>
        `,
        children:[
            {
                title: "The World Government",
                htmlContent:`
                <p>The heart of the executive branch is the world government. It consists of several ministries, their respective ministers and a head of government. It guides and supervises global politics and has a right of initiative in the legislative process. It is elected by the global parliament.</p>
                `
            },
            {
                title: "The Military",
                htmlContent:`
                <p>The entire military of the national states will be united and completely disarmed, forming an unarmed global crisis response force. Its main purpose will be fighting humanitarian crises all around the world ensuring peace, stability and democratic values. The minister of global security will be the commander in chief. As long as the process of disarmament is not completed, the parliament must authorize the deployment of the military unless there is imminent danger.</p>
                `
            },
            {
                title: "The Global Police",
                htmlContent:`
                <p>A global police force will be established to enforce the law and fight terrorism and international crime.</p>
                `
            },
        ],
    },
    {
        title: "Informative Branch",
        htmlContent: `
        <p>The informative branch includes all institutions that store, publish or deliver information or data, also known as media, especially those reaching a large number of people.</p>
        <p>By deciding which issues are important enough to cover, the media guides the attention of the public and the legislators, thereby influencing which laws are made. In reporting on changes to the law, executive orders and court rulings, they exercise enormous executive power because if the public did not know the rules, they would not be obeyed, no matter how harshly the police would enforce them. By criticising new laws, they enable the public to judge the work of their politicians, and through investigative journalism they expose crimes and entanglements between politics and business, possibly triggering lawsuits. This shows that the media heavily influences the legislative, judicial and executive branches, with the result that whoever controls them possesses vast power over Terra. Therefore these institutions must have the status of a branch of government meaning that they are completely independent and only subordinate to the people.</p>
        `,
        children:[
            {
                title: "Public Service Media",
                htmlContent: `
                <p>Global public service media will be established that include several news outlets and broadcasters that are completely independent. They guarantee journalistic quality through self-control and are financed by broadcasting fees that every household must pay. They are obliged to cover all topics of public interest and have to educate the public on issues concerning politics and society. They and journalists in general are granted a status of immunity, which especially includes whistleblowers.</p>
                `
            },
            {
                title: "Private Media",
                htmlContent: `
                <p>The existence of private media in parallel to the public service media is allowed. They have the same rights but need to meet similar quality standards. If the influence of the private media grows too large, they may be restricted, democratized or put under state control.</p>
                `
            },
            {
                title: "Social Media",
                htmlContent: `
                <p>Social media plays an increasingly important role in the exchange of information. In order to combat the polarizing nature of these networks we must burst the filter bubbles by prohibiting tracking and profiling of the users. The collection of personal data must be kept at an absolute minimum and this data may only be used to enable the primary functions of these platforms. If they become systemically relevant, they may be put under state control, as part of the informative branch, to guarantee their independent operation.</p>
                `
            },
        ]
    }
]

export default institutions;