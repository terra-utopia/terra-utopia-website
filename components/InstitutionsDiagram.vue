<template>
    <div class="institutions-diagram" v-html="buildDiagram()"></div>
</template>

<script>
const settings = {
    width: 50,
    marginRatio: 0.2,
    ratioInnerCircle: 2,
    growthRatio: 0.3,

    startingAngle: Math.PI*3/4,
    divAngle: -Math.PI/4,

    hueStart: 227,
    hueDivPiece: 10,
    hueDivDepth: 50,
}

export default {
    props: {
        content: {
            type: Array,
            required: true,
        }
    },
    methods: {
        buildDiagram(){
            const width = settings.width;

            let html = "";
            const maxDepth = this.getMaxDepth(this.content);
            const ratioInnerCircle = settings.ratioInnerCircle;

            html += '<svg class="diagram-svg" height="'+((maxDepth+1+ratioInnerCircle)*2*width)+'" width="'+((maxDepth+1+ratioInnerCircle)*2*width)+'">';

            html += this.buildSection(this.content, 0, '', maxDepth);

            html += '</svg>';

            return html;
        },
        buildSection(array, depth, parentID, maxDepth){
            if (!depth) {
                depth = 0;
            }
            if (!parentID) {
                parentID = '';
            }
            if (!maxDepth) {
                maxDepth = this.getMaxDepth(array);
            }

            const width = settings.width;
            const margin = settings.marginRatio*width/2;
            const offsetAngle = settings.startingAngle+settings.divAngle*depth;
            const ratioInnerCircle = settings.ratioInnerCircle;
            const growthRatio = settings.growthRatio;

            const maxRadius = width*(1+ratioInnerCircle+maxDepth);
            const outerRadius = width*(1+ratioInnerCircle+(maxDepth-depth)*growthRatio);
            const innerRadius = width*(ratioInnerCircle);

            let html="";
            let childhtml = "";
            let elCounter = 0;

            for(let element of array)
            {
                const ID = parentID+element.title.replace(/ /g,'');
                let elhtml = '<path ';

                elhtml += 'fill="'+this.calculateColor(depth, array.length, elCounter)+'" ';

                elhtml += 'id="'+ID+'" ';
                
                elhtml += 'd=" ';

                elhtml += 'M '
                +(maxRadius+(outerRadius-margin)*Math.sin(offsetAngle+2*Math.PI/array.length*elCounter))+' '
                +(maxRadius+(outerRadius-margin)*Math.cos(offsetAngle+2*Math.PI/array.length*elCounter))+' ';

                elhtml += 'A '
                +(outerRadius-margin)+' '
                +(outerRadius-margin)+' '
                +0+' '
                +0+' '
                +0+' '
                +(maxRadius+(outerRadius-margin)*Math.sin(offsetAngle+2*Math.PI/array.length*(elCounter+1)))+' '
                +(maxRadius+(outerRadius-margin)*Math.cos(offsetAngle+2*Math.PI/array.length*(elCounter+1)))+' ';

                elhtml += 'L '
                +(maxRadius+(innerRadius+margin)*Math.sin(offsetAngle+2*Math.PI/array.length*(elCounter+1)))+' '
                +(maxRadius+(innerRadius+margin)*Math.cos(offsetAngle+2*Math.PI/array.length*(elCounter+1)))+' ';

                elhtml += 'A '
                +(innerRadius+margin)+' '
                +(innerRadius+margin)+' '
                +0+' '
                +0+' '
                +1+' '
                +(maxRadius+(innerRadius+margin)*Math.sin(offsetAngle+2*Math.PI/array.length*elCounter))+' '
                +(maxRadius+(innerRadius+margin)*Math.cos(offsetAngle+2*Math.PI/array.length*elCounter))+' ';

                elhtml += '" />';

                html += elhtml;

                if (element.children) {
                    childhtml += this.buildSection(element.children, depth+1, '', maxDepth);
                }

                elCounter++;
            }

            html += childhtml;

            return html;
        },
        getMaxDepth(array){
            let maxDepth = 0;
            for (let element of array){
                if (element.children) {
                    let newDepth = 1+this.getMaxDepth(element.children);
                    maxDepth = (newDepth > maxDepth) ? newDepth : maxDepth;
                }
            }
            return maxDepth;
        },
        calculateColor(depth, numberOfElements, elCounter){
            const hueStart = settings.hueStart;
            const hueDivPiece = settings.hueDivPiece;
            const hueDivDepth = settings.hueDivDepth;

            let hue = hueStart+Math.pow(-1,depth+1)*hueDivPiece*elCounter+Math.pow(-1,depth+1)*hueDivDepth*depth;
            let saturation = 43+30/(numberOfElements-1)*elCounter+"%";
            let lightness = 43+30/(numberOfElements-1)*elCounter+"%";
            let alpha = 1;

            let color = 'hsla('+hue+','+saturation+','+lightness+','+alpha+')';
            return color;
        },
        addEventListeners(){
            // for (const path of document.getElementsByTagName("path")) {
            //     path.addEventListener("click", click);
            // }
        }
    },
    created(){
        this.addEventListeners();
    }
}
</script>

<style lang="scss"> //not scoped, because otherwise the svg will not be affected
@import "~/assets/shared-styles.scss";
.institutions-diagram{

    .diagram-svg{
        // fill: $c-dark;
        stroke-width: 2px;
        stroke: #fff;
        border-radius: 200px;
    }
}

</style>