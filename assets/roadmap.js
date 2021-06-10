const texts = [
    {
        title: "Research",
        svg: "/_nuxt/assets/roadmapSVG/research.svg",
        htmlContent: `
        <p>In this phase we analyze similar projects, movements and aspirations. The goal is to understand developments of the past and why their success was only limited. The rough goals of our movement are being defined internally as well as a general strategy.</p>
        <p>Finding technical solutions for collaborating and working on this project is also part of this step. This includes digital platforms where participating activists can discuss their ideas or edit documents but also means of spreading our ideas and getting new, interested people involved.</p>
        `
    },
    {
        title: "First Concept",
        svg: "/_nuxt/assets/roadmapSVG/concept.svg",
        htmlContent: `
        <p>In order to motivate other people to support and join this movement, it is necessary to have a rough but compelling concept of the structure of Terra, as well as a plan for achieving our goals. This should make it easier for people to get an idea of what we aim for, what they can expect from this movement and how they can contribute. The further process involves the differentiation, modification and improvement of this concept as well as the incorporation of feedback and criticism.</p>
        `
    },
    {
        title: "Networking",
        svg: "/_nuxt/assets/roadmapSVG/networking.svg",
        htmlContent: `
        <p>The goal of this phase is forging a global network of activists that actively support the goal of creating a global, federal democracy. This makes it possible to consider a multitude of different opinions on the strategy of the movement and to incorporate different ideas and visions from all around the planet. We will also try to gain support from related projects, activist networks and experts worldwide.</p>
        `
    },
    {
        title: "Campaign",
        svg: "/_nuxt/assets/roadmapSVG/campaign.svg",
        htmlContent: `
        <p>The core of the strategy will be the global campaign. At the moment, the public debate on a global democracy is either non-existent or in its infancy. Therefore this movement has the chance of confronting a relatively unbiased public with ideas that are new to many people. This is a great opportunity to have a decisive impact on the public debate and convince the majority of people who do not yet have an opinion on this topic with compelling concepts and arguments.</p>
        <p>For the campaign, we envision a global network of people of the public interest, like artists, influencers, film-makers, musicians and celebrities, who each present the public with their ideas concerning Terra. These people will publish their work, thoughts, art, music and statements on the possibility of a global, federal democracy collectively at a specific date with a common hashtag and a call to action. In this way, we want to reach the public where they already are.</p>
        <p>The aim of the campaign is to spark worldwide protests that put pressure on national governments to hold free and democratic referendums on the draft of the global constitution - which has been developed by the global assembly - and accept their results.</p>
        `
    },
    {
        title: "Global Assembly",
        svg: "/_nuxt/assets/roadmapSVG/global-assembly.svg",
        htmlContent: `
        <p>Before or in parallel to the campaign, a global assembly must meet that writes a draft constitution for Terra. This is necessary because we are neither legitimized nor do we have the resources to write a draft constitution. Mainly because today the infrastructure needed for a global election does not exist, the deputies for the global assembly can not be elected directly. Therefore we propose that the global assembly should take place as a participatory citizens’ council. The members will be selected at random, however the final composition of the global assembly must meet certain criteria to ensure that it is representative of the world’s population in terms of gender, age, education, nationality, place of residence and ethnicity. In a process accompanied by professional moderators and experts, this global assembly will craft the draft constitution that the nations will vote on in the next phase.</p>
        `
    },
    {
        title: "Transformation",
        svg: "/_nuxt/assets/roadmapSVG/referendum.svg",
        htmlContent: `
        <p>The ultimate goal is that all nations run referendums deciding whether to ratify the constitution proposed by the global assembly. It is extremely unlikely that all nations will hold such referendums. However, we hope that a second wave of protest will pressure most democratic nations into doing so. This could give the project new legitimacy and provide citizens of authoritarian nations with a vision of a democratic future where they want to join the free peoples of the planet. Driven by this common vision, countries that refuse a referendum might see a wave of democratization all around the globe that leaves only a few independent nations. Eventually, when Terra proves its merits and humanity expands its presence in space and on other planets, perhaps these remaining nations will join as well.</p>
        `
    }
]

export default texts.map((text, i) => {
    return Object.assign(text, { htmlId: `text-roadmap-${i+1}` });
});