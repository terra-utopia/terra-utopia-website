<!-- explanation/concept: Pre-Rendering Gradients in a <canvas> has the advantage, that they dont flicker anymore on scroll :)) -->

<template>
    <div class="PreRenderedGradient" :style="{ background }">
        <canvas ref="canvas" :class="{ 'stretch-gaps': stretchGaps }"></canvas>
    </div>
</template>


<script>
export default {
    props: {
        background: {
            type: String,
            required: true,
        },
        strictVertical: {
            type: Boolean,
            default: false,
        },
        stretchGaps: {
            type: Boolean,
            default: false,
        },
        maxRenderFrameRate: {
            type: Number,
            default: 8,
        },
    },
    data() {
        return {
            svgImage: undefined,
            svgImageWasUpdated: undefined, // dont worry, will be set before first read (with call 'this.loadNewSvgImage();' in 'mounted')
            lastReRenderTimestamp: 0, // Milliseconds
        };
    },
    mounted() {
        this.loadNewSvgImage();
        this.renderLoop();
    },
    watch: {
        background() {
            this.loadNewSvgImage();
        },
    },
    methods: {
        loadNewSvgImage() {
            const svg = `
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">    <!-- THIS 100% SIZING ONLY WORKS IN RENDERED IMAGES, NOT IN STAND-ALONE SVG FILES OR HTML -->
                    <foreignObject x="0" y="0" width="100%" height="100%" externalResourcesRequired="true">
                        <div xmlns="http://www.w3.org/1999/xhtml" style="width: 100%; height: 100%; background: ${this.background};"></div>
                    </foreignObject>
                </svg>
            `;
            const svgDataUrl = `data:image/svg+xml;base64,${window.btoa(svg)}`;
            // const svgDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;    // alternative
            let img = new Image();
            img.addEventListener("load", () => {
                this.svgImage = img;
                this.svgImageWasUpdated = true;
            });
            img.src = svgDataUrl;
        },
        renderLoop() {
            // only render if there already is an image! and please regard the maxRenderFrameRate
            const frameRateOkay =
                performance.now() - this.lastReRenderTimestamp >=
                1000 / this.maxRenderFrameRate;
            if (this.svgImage && frameRateOkay) {
                // compute up-to-date canvas layout dimensions
                let w = this.$refs.canvas.offsetWidth; // * window.devicePixelRatio   // (disabled because it caused again flickering ...)
                let h = this.$refs.canvas.offsetHeight; // * window.devicePixelRatio
                if (this.strictVertical) {
                    w = 1;
                }
                // check if we need to re-render (either due to resize, or due to new svg image)
                if (
                    !(
                        this.$refs.canvas.width === w &&
                        this.$refs.canvas.height === h
                    ) ||
                    this.svgImageWasUpdated
                ) {
                    console.log("ok we re-render now");
                    this.lastReRenderTimestamp = performance.now();
                    this.svgImageWasUpdated = false;
                    // now: re-size and re-render
                    this.$refs.canvas.width = w;
                    this.$refs.canvas.height = h;
                    const ctx = this.$refs.canvas.getContext("2d");
                    ctx.drawImage(this.svgImage, 0, 0, w, h);
                }
            }
            requestAnimationFrame(this.renderLoop); // loop
        },
    },
};
</script>


<style lang="scss">
.PreRenderedGradient {
    // fall-back background-gradient set in-line (because of dynamic props)

    canvas {
        width: 100%;
        height: 100%;

        &.stretch-gaps {
            width: calc(100% + 2px);
            height: calc(100% + 2px);
            transform: translate(-1px, -1px);
        }
    }
}
</style>