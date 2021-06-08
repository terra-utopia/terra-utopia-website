const texts = [
    {
        title: "Research",
        svg: "/_nuxt/assets/roadmapSVG/research.svg",
        htmlContent: `<p>In this phase we analyze similar projects, movements and aspirations. The goal is to understand developments of the past and why their success was only limited. The rough goals of our movement are being defined internally as well as a general strategy.</p>
        <p>Finding technical solutions for collaborating and working on this project is also part of this step. This includes digital platforms where participating activists can discuss their ideas or edit documents but also means of spreading our ideas and getting new, interested people involved.</p>
        `
    },
    {
        title: "First Concept",
        svg: "/_nuxt/assets/roadmapSVG/concept.svg",
        htmlContent: `<p>In order to motivate other people to support and join this movement, it is necessary to have a rough but compelling concept of the objective, as well as a plan for achieving those goals. This should make it easier for people to get an idea of what we aim for, what they can expect from this movement and how they can contribute. The further process involves the differentiation, modification and improvement of this concept as well as the incorporation of feedback and criticism.</p>`
    },
    {
        title: "Networking",
        svg: "/_nuxt/assets/roadmapSVG/networking.svg",
        htmlContent: ``
    },
    {
        title: "Campaign",
        svg: "/_nuxt/assets/roadmapSVG/campaign.svg",
        htmlContent: ``
    },
    {
        title: "Global Assembly",
        svg: "/_nuxt/assets/roadmapSVG/global-assembly.svg",
        htmlContent: ``
    },
    {
        title: "Transformation",
        svg: "/_nuxt/assets/roadmapSVG/referendum.svg",
        htmlContent: ``
    }
]

export default texts.map((text, i) => {
    return Object.assign(text, { htmlId: `text-roadmap-${i+1}` });
});