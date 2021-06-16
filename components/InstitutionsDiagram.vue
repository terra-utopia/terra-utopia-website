<template>
    <div id="institutions-diagram" v-html="buildDiagram()"></div>
</template>

<script>
const settings = {
    width: 50,
    marginRatio: 0,
    ratioInnerCircle: 2,
    growthRatio: 0.4,

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
    data(){
        return {
            currentDepth: 0,
        }
    },
    methods: {
        buildDiagram(){
            const width = settings.width;
            const ratioInnerCircle = settings.ratioInnerCircle;
            const maxDepth = this.getMaxDepth(this.content);

            let html = "";

            html += '<svg class="diagram-svg" height="'+((maxDepth+1+ratioInnerCircle)*2*width)+'" width="'+((maxDepth+1+ratioInnerCircle)*2*width)+'">';

            html += this.buildSection(this.content, 0, '', maxDepth);

            html += '</svg>';

            html += '<div style="max-width:'+1.8*width*ratioInnerCircle+'px" id="diagram-inner">Institutions</div>';

            return html;
        },
        buildSection(array, depth, parentClass, maxDepth){
            if (!depth) {
                depth = 0;
            }
            if (!parentClass) {
                parentClass = '';
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
            const innerRadius = Math.pow(1.05,maxDepth-1-depth)*width*(ratioInnerCircle);

            let html="";
            let childhtml = "";
            let elCounter = 0;

            for(let element of array)
            {
                const elClass = ((parentClass) ? parentClass+' '+parentClass+'-':'')+element.title.replace(/ /g,'');
                let elhtml = '<path ';

                elhtml += 'fill="'+this.calculateColor(depth, array.length, elCounter)+'" ';

                elhtml += 'class="'+elClass+'" ';

                elhtml += (depth!=0)?'style="opacity: 0; pointer-events: none;"':'';
                
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

                elhtml += 'Z" />';

                html += elhtml;

                if (element.children) {
                    childhtml += this.buildSection(element.children, depth+1, elClass, maxDepth);
                }

                elCounter++;
            }

            html += childhtml;

            html += '<path id="inner-circle" fill="#fff" d=" ';

            html += 'M '
            +maxRadius+' '
            +(maxRadius+1.05*(innerRadius+margin))+' ';

            html += 'A '
            +1.05*(innerRadius+margin)+' '
            +1.05*(innerRadius+margin)+' '
            +0+' '
            +0+' '
            +1+' '
            +maxRadius+' '
            +(maxRadius-1.05*(innerRadius+margin))+' ';

            html += 'A '
            +1.05*(innerRadius+margin)+' '
            +1.05*(innerRadius+margin)+' '
            +0+' '
            +0+' '
            +1+' '
            +maxRadius+' '
            +(maxRadius+1.05*(innerRadius+margin))+' ';

            html += '"Z />';

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
            for (const path of document.getElementsByTagName("path")) {
                if (path.id != "inner-circle"){
                    path.addEventListener("click", this.click);
                    path.addEventListener("mouseover", this.hover);
                    path.addEventListener("mouseleave", this.mouseleave);
                }
            }
        },
        click(e){
            const pathElements = document.getElementById("institutions-diagram").getElementsByTagName("path");
            const children = document.getElementsByClassName(e.target.classList[e.target.classList.length-1]);
            if (this.currentDepth+1 == e.target.classList.length) {
                if (children.length>1) {
                    this.currentDepth++;
                }
                for (const child of children) {
                    if (child.classList.length == this.currentDepth+1) {
                        child.style.opacity = 1;
                        child.style.pointerEvents = "initial";
                    }
                }
                this.$router.push({ path: "" , query: { target: e.target.classList[e.target.classList.length-1] } });
            } else {
                this.currentDepth=e.target.classList.length-1;
                for (const path of pathElements) {
                    if (path.classList.length > this.currentDepth+1) {
                        path.style.opacity = 0;
                        path.style.pointerEvents = "none";
                    }
                }
            }
        },
        hover(e){
            let targetSelection = e.target.classList[e.target.classList.length-1].split("-");
            let targetText = this.getTargetText(this.content, targetSelection);
            document.getElementById("diagram-inner").innerHTML=targetText.title;
        },
        getTargetText(texts, targetSelection){
            let targetClasses = [...targetSelection];
            let targetText = "";
            let targetClass = targetClasses.shift();
            for (const text of texts) {
                if (text.title.replace(/ /g,"")===targetClass) {
                    if (text.children && targetClasses.length>0) {
                        targetText = this.getTargetText(text.children, targetClasses);
                    } else {
                        targetText = text;
                    }
                }
            }
            return targetText;
        },
        mouseleave(){
            if (this.$route.query.target) {
                let targetSelection = this.$route.query.target.split("-");
                let targetText = this.getTargetText(this.content, targetSelection);
                document.getElementById("diagram-inner").innerHTML=targetText.title;
            } else {
                document.getElementById("diagram-inner").innerHTML="Institutions";
            }
        },
        displayCurrentChildren(){
            if (this.$route.query.target) {
                let targetSelection = this.$route.query.target.split("-");

                let newTargetSelection = [];
                let counter = 0;
                for (let targetClass of targetSelection) {
                    let newTargetClass = "";
                    for (let i = 0; i < counter; i++) {
                        newTargetClass += targetSelection[i]+'-';
                    }
                    newTargetClass += targetClass;
                    newTargetSelection[counter] = newTargetClass;
                    counter++;
                };
                const pathElements = document.getElementById("institutions-diagram").getElementsByTagName("path");
                
                this.currentDepth=newTargetSelection.length;

                while (newTargetSelection.length>0) {
                    let target;
                    for (const path of pathElements) {
                        if (newTargetSelection.length===path.classList.length&&newTargetSelection.every((value,index)=>value===path.classList[index])) {
                            target = path;
                        }
                    }
                    
                    if (target) {
                        const children = document.getElementsByClassName(target.classList[target.classList.length-1]);
                        if (this.currentDepth+1 > target.classList.length) {
                            for (const child of children) {
                                if (child.classList.length <= this.currentDepth+1) {
                                    child.style.opacity = 1;
                                    child.style.pointerEvents = "initial";
                                }
                            }
                        } else {
                            for (const path of pathElements) {
                                if (path.classList.length > this.currentDepth+1) {
                                    path.style.opacity = 0;
                                    path.style.pointerEvents = "none";
                                }
                            }
                        }
                    }

                    newTargetSelection.pop();
                }
            }
        }
    },
    mounted(){
        this.displayCurrentChildren();
        this.addEventListeners();
    }
}
</script>

<style lang="scss"> //not scoped, because otherwise the svg will not be affected
@import "~/assets/shared-styles.scss";
#institutions-diagram{
    position: relative;

    #diagram-inner{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%,-50%,0);
    }

    .diagram-svg{
        stroke-width: 2px;
        stroke: #fff;

        path{
            transition: transform 0.2s ease-in-out, opacity .5s ease-in-out;
            transform-origin: center;

            &:not(#inner-circle):hover, &.active-section{
                
                transform: scale(1.03);
                cursor: pointer;
            }
        }
    }
}

</style>