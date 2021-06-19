<template>
    <div class="institutions-diagram">
        <div id="diagram" v-html="buildDiagram()"></div>
        <div class="institutions-text-wrapper">
            <div id="institutions-text"></div>
        </div>
    </div>
</template>

<script>
const settings = {
    width: 55,
    ratioInnerCircle: 2,
    growthRatio: 0.4,

    startingAngle: Math.PI*3/4,
    divAngle: Math.PI/5,

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
            const size = ((maxDepth+1+ratioInnerCircle)*2*width);

            let html = "";

            html += '<svg class="diagram-svg" viewBox="'+(-size/2)+' '+(-size/2)+' '+size+' '+size+'" width="100%" style="max-width:'+size+'px">';

            html += this.buildSection(this.content, 0, '', maxDepth);

            html += '</svg>';

            html += '<div style="max-width:'+1.8*width*ratioInnerCircle+'px" id="diagram-inner">Institutions</div>';

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
            const offsetAngle = settings.startingAngle+settings.divAngle*depth;
            const ratioInnerCircle = settings.ratioInnerCircle;
            const growthRatio = settings.growthRatio;

            const outerRadius = width*(1+ratioInnerCircle+(maxDepth-depth)*growthRatio);
            const innerRadius = Math.pow(1.05,maxDepth-1-depth)*width*(ratioInnerCircle);

            let html="";
            let childhtml = "";
            let elCounter = 0;

            for(let element of array)
            {
                const startingAngle = -1*(offsetAngle+2*Math.PI/array.length*elCounter);
                const endingAngle = -1*(offsetAngle+2*Math.PI/array.length*(elCounter+1));
                const elID = ((parentID) ? parentID+'-':'')+element.title.replace(/ /g,'');
                let elhtml = '<path ';

                elhtml += 'fill="'+this.calculateColor(depth, array.length, elCounter)+'" ';

                elhtml += 'id="'+elID+'" ';

                elhtml += (depth!=0)?'style="opacity: 0; pointer-events: none;"':'';
                
                elhtml += 'd=" ';

                elhtml += 'M '
                +outerRadius*Math.sin(startingAngle)+' '
                +outerRadius*Math.cos(startingAngle)+' ';

                elhtml += 'A '
                +outerRadius+' '
                +outerRadius+' '
                +0+' '
                +0+' '
                +1+' '
                +outerRadius*Math.sin(endingAngle)+' '
                +outerRadius*Math.cos(endingAngle)+' ';

                elhtml += 'L '
                +innerRadius*Math.sin(endingAngle)+' '
                +innerRadius*Math.cos(endingAngle)+' ';

                elhtml += 'A '
                +innerRadius+' '
                +innerRadius+' '
                +0+' '
                +0+' '
                +0+' '
                +innerRadius*Math.sin(startingAngle)+' '
                +innerRadius*Math.cos(startingAngle)+' ';

                elhtml += 'Z" />';

                html += elhtml;

                if (element.children) {
                    childhtml += this.buildSection(element.children, depth+1, elID, maxDepth);
                }

                elCounter++;
            }

            html += childhtml;

            html += '<path id="inner-circle" fill="#fff" d=" ';

            html += 'M '
            +0+' '
            +1.05*innerRadius+' ';

            html += 'A '
            +1.05*innerRadius+' '
            +1.05*innerRadius+' '
            +0+' '
            +0+' '
            +1+' '
            +0+' '
            +(-1.05*innerRadius)+' ';

            html += 'A '
            +1.05*innerRadius+' '
            +1.05*innerRadius+' '
            +0+' '
            +0+' '
            +1+' '
            +0+' '
            +1.05*innerRadius+' ';

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
            for (const path of document.getElementById("diagram").getElementsByTagName("path")) {
                path.addEventListener("click", this.click);
                if (path.id != "inner-circle"){
                    path.addEventListener("mouseover", this.hover);
                    path.addEventListener("mouseleave", this.updateInnerText);
                }
            }
        },
        click(e){
            let query;
            if (e.target.id=="inner-circle") {
                let target = this.$route.query.target;
                if (target) {
                    query = target.replace(/-*(?!.*-).*/g,"");
                }
            } else{
                const targetDepth = e.target.id.split("-").length-1;
                if (this.currentDepth == targetDepth) {
                    query = e.target.id;
                } else {
                    query = e.target.id.replace(/-*(?!.*-).*/g,"");
                }
            }
            if (query) {
                this.$router.push({ path: "" , query: { target: query } });
            } else {
                this.$router.push({ path: "" });
            }
        },
        hover(e){
            let targetSelection = e.target.id.split("-");
            let targetText = this.getTargetText(this.content, targetSelection);
            document.getElementById("diagram-inner").innerHTML=targetText.title;
        },
        getTargetText(texts, targetSelection){
            let targetSubIDs = [...targetSelection];
            let targetText = "";
            let subID = targetSubIDs.shift();
            for (const text of texts) {
                if (text.title.replace(/ /g,"")===subID) {
                    if (text.children && targetSubIDs.length>0) {
                        let childText = this.getTargetText(text.children, targetSubIDs)
                        targetText = (childText)?childText:text;
                    } else {
                        targetText = text;
                    }
                }
            }
            return targetText;
        },
        updateInnerText(){
            let innerText = "Institutions";
            if (this.$route.query.target) {
                let targetSelection = this.$route.query.target.split("-");
                let targetText = this.getTargetText(this.content, targetSelection);
                if (targetText) {
                    innerText = targetText.title;
                }
            }
            document.getElementById("diagram-inner").innerHTML=innerText;
        },
        updateInstitutionsText(){
            let institutionsText = "<h2>Select An Institution!</h2>";
            if (this.$route.query.target) {
                let targetSelection = this.$route.query.target.split("-");
                let targetText = this.getTargetText(this.content, targetSelection);
                if (targetText) {
                    institutionsText = '<h2>'+targetText.title+'</h2>'+targetText.htmlContent;
                }
            }
            document.getElementById("institutions-text").innerHTML=institutionsText;
        },
        displayCurrentChildren(){
            const target = this.$route.query.target;
            const pathElements = document.getElementById("diagram").getElementsByTagName("path");
            let targetID = (target)?target:"";
            this.currentDepth =0;
            for (const path of pathElements) {
                if (targetID.startsWith(path.id.replace(/-*(?!.*-).*/g,""))) {
                    path.style.opacity = 1;
                    path.style.pointerEvents = "initial";
                    const pathDepth = path.id.split("-").length-1;
                    if (pathDepth>this.currentDepth) {
                        this.currentDepth = pathDepth;
                    }
                    if (targetID.startsWith(path.id)) {
                        path.classList=["selected"];
                    } else if (path.id.startsWith(targetID)) {
                        path.classList=["active"];
                    } else {
                        path.classList=["inactive"];
                    }
                } else if(path.id!="inner-circle") {
                    path.style.opacity = 0;
                    path.style.pointerEvents = "none";
                }
            }

        },
        getChildElements(id){
            const pathElements = document.getElementById("diagram").getElementsByTagName("path");
            let children = [];
            for (const path of pathElements) {
                if (path.id.startsWith(id)) {
                    children.push(path);
                }
            }
            return children;
        }
    },
    mounted(){
        this.displayCurrentChildren();
        this.updateInnerText();
        this.updateInstitutionsText();
        this.addEventListeners();
    },
    watch:{
        $route(){
            this.updateInstitutionsText();
            this.displayCurrentChildren();
            this.updateInnerText();
        }
    }
}
</script>

<style lang="scss"> //not scoped, because otherwise the svg will not be affected
@import "~/assets/shared-styles.scss";
.institutions-diagram{
    #diagram{
        position: relative;

        #diagram-inner{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%,-50%,0);
            pointer-events: none;
        }

        .diagram-svg{
            stroke-width: 2px;
            stroke: #fff;

            path{
                transition: transform 0.2s ease-in-out, opacity .5s ease-in-out, fill .2s ease-in-out;

                &:hover, &.selected{
                    cursor: pointer;
                    
                    &:not(#inner-circle){
                        transform: scale(1.03); //transform origin equals origin of user coordinate system specified by the "viewBox" attribute of the svg
                    }
                }
                &.inactive:not(:hover){
                    fill: #777;
                }
            }
        }
    }

    .institutions-text-wrapper{
        display: flex;
        justify-content: center;
        align-content: center;

        width: 100%;
        min-height: 30vh;
        background: rgba($c-extradark, .05);
        border: 1px solid $c-extradark;
        border-radius: 5px;
        padding: 24px;

        #institutions-text{
            align-self: center;

            h2{
                font-size: 30px;
                margin-bottom: 20px;
            }

            p{
                font-size: 20px;
                text-align: justify;
            }
        }
    }
}

</style>