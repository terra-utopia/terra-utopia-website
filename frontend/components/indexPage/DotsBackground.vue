<template>
    <div class="Dots">
        <svg width="100%" height="100%">
            <defs>
                <pattern
                    id="dot-pattern"
                    patternUnits="userSpaceOnUse"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                >
                    <circle
                        cx="8"
                        cy="8"
                        r="2"
                        fill="rgba(255, 255, 255, 0.5)"
                    />
                </pattern>
                <pattern
                    id="dot-pattern-highlight"
                    patternUnits="userSpaceOnUse"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                >
                    <circle cx="8" cy="8" r="2" fill="rgba(255, 255, 255, 1)" />
                </pattern>
                <clipPath id="clip-path" clipPathUnits="objectBoundingBox">
                    <path
                        d="M 0.6312380000000001 0.27286200000000005 C 0.36521800000000004 0.293673 0.433712 0.5098820000000001 0.22200299999999998 0.52549 C 0.0102932 0.541099 0.114543 0.6163690000000001 0.0486914 0.683311 C 0.0268528 0.704133 0.0107411 0.717238 0 0.7229 V 1 C 0.0440387 0.988407 0.07159109999999999 0.914982 0.171843 0.8370839999999999 C 0.248979 0.7771480000000001 0.33546800000000004 0.889113 0.475224 0.7469009999999999 C 0.656024 0.562924 0.889447 0.957269 1 0.6023189999999999 V 0 C 0.911442 0 0.782064 0.261062 0.6312380000000001 0.27286200000000005 Z"
                    />
                </clipPath>
                <filter id="drop-shadow-filter">
                    <feDropShadow
                        dx="0"
                        dy="0"
                        stdDeviation="2.5"
                        flood-color="white"
                        flood-opacity="0.75"
                    />
                </filter>
            </defs>

            <rect
                width="100%"
                height="100%"
                fill="url(#dot-pattern)"
                clip-path="url(#clip-path)"
            />
            <g :clip-path="highlightClipPath" filter="url(#drop-shadow-filter)">
                <rect
                    width="100%"
                    height="100%"
                    fill="url(#dot-pattern-highlight)"
                    clip-path="url(#clip-path)"
                />
            </g>
        </svg>
    </div>
</template>

<script>
export default {
    name: "Dots",
    data() {
        return {
            clientX_abs: 0, // absolute, means relative to viewport
            clientY_abs: 0,
            clientX_rel: -100, // relative, means relative to .Dots container
            clientY_rel: -100,
            width: 1,
            height: 1,
        };
    },
    computed: {
        highlightClipPath() {
            const xPerc = (this.clientX_rel / this.width) * 100;
            const yPerc = (this.clientY_rel / this.height) * 100;
            return `circle(8% at ${xPerc}% ${yPerc}%)`;
        },
    },
    methods: {
        updateHighlight(evt) {
            // goal: update mouseX, mouse>
            if (evt.type === "mousemove") {
                this.clientX_abs = evt.clientX;
                this.clientY_abs = evt.clientY;
            }
            const { x, y, width, height } = this.$el.getBoundingClientRect();
            this.clientX_rel = this.clientX_abs - x;
            this.clientY_rel = this.clientY_abs - y;
            this.width = width;
            this.height = height;
        },
    },
    mounted() {
        // 'mounted' life-cycle hook
        window.document.addEventListener("mousemove", this.updateHighlight); // we can't install listener directly on element, because it's z-index -1, therefore no pointer events
        window.document.addEventListener("scroll", this.updateHighlight);
    },
};
</script>

<style lang="scss">
.Dots {
    width: 100%;
    height: 70vw;
}
</style>