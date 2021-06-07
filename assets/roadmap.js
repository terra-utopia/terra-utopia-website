const texts = [
    {
        title: "Research",
        svg: "/_nuxt/assets/roadmapSVG/research.svg",
        htmlContent: `<p>In this phase we analyze similar projects, movements and aspirations. The goal is to understand developments of the past and why their success was only limited. The rough goals of our movement are being defined internally as well as a general strategy.</p>
        <p>Finding technical solutions for collaborating and working on this project is also part of this step. This includes digital platforms where participating activists can discuss their ideas or edit documents but also means of spreading our ideas and getting new, interested people involved.</p>
        `
    }
]

export default texts.map((text, i) => {
    return Object.assign(text, { htmlId: `text-roadmap-${i+1}` });
});