<template>
    <div class="institutions-diagram">
        <svg height="300" width="300" v-html="buildDiagram(content, 0)">
        </svg>
        <!-- {{this.content[0].htmlContent}} -->
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Array,
            required: true,
        }
    },
    methods: {
        buildDiagram(array, depth, parentID, maxDepth){
            if (!depth) {
                depth = 0;
            }
            if (!parentID) {
                parentID = '';
            }
            if (!maxDepth) {
                maxDepth = this.getMaxDepth(array);
            }

            const margin = 5;
            const width = 50;
            const maxRadius = width*(2+maxDepth);
            const outerRadius = width*(2+depth);
            const innerRadius = width*(1+depth);

            let html="";
            let elCounter = 0;

            for(let element of array)
            {
                let elhtml = '<path d=" ';

                elhtml += 'M '
                +(maxRadius+(outerRadius-margin)*Math.sin(2*Math.PI/array.length*elCounter))+' '
                +(maxRadius+(outerRadius-margin)*Math.cos(2*Math.PI/array.length*elCounter))+' ';

                elhtml += 'A '
                +(outerRadius-margin)+' '
                +(outerRadius-margin)+' '
                +0+' '
                +1+' '
                +1+' '
                +(maxRadius+(outerRadius-margin)*Math.sin(2*Math.PI/array.length*(elCounter+1)))+' '
                +(maxRadius+(outerRadius-margin)*Math.cos(2*Math.PI/array.length*(elCounter+1)))+' ';

                elhtml += 'L '
                +(maxRadius+(innerRadius+margin)*Math.sin(2*Math.PI/array.length*(elCounter+1)))+' '
                +(maxRadius+(innerRadius+margin)*Math.cos(2*Math.PI/array.length*(elCounter+1)))+' ';

                elhtml += 'A '
                +(innerRadius+margin)+' '
                +(innerRadius+margin)+' '
                +0+' '
                +1+' '
                +0+' '
                +(maxRadius+(innerRadius+margin)*Math.sin(2*Math.PI/array.length*elCounter))+' '
                +(maxRadius+(innerRadius+margin)*Math.cos(2*Math.PI/array.length*elCounter))+' ';

                elhtml += '" />';

                html += elhtml;

                console.log(element.title);
                elCounter++;
            }
            console.log(html);
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
        }
    }
}
</script>

<style lang="scss" scoped>

</style>