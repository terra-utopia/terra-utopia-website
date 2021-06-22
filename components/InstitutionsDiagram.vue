<template>
    <div class="institutions-diagram">
        <div id="diagram" v-html="buildDiagram()"></div>
        <img class="next-button-icon" src="~/assets/jump-down-icon.svg">
        <ActionButton id="next-button"> Next! </ActionButton>
        <img class="next-button-icon" src="~/assets/jump-down-icon.svg">
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
    hueDivDepth: 60,
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
            currentDepth: 0, //keeps track of which layer of the diagram is active
            elementIDs: [],
        }
    },
    mounted(){ //called when website is loaded
        this.displayCurrentChildren();
        this.updateInnerText();
        this.updateInstitutionsText();
        this.addEventListeners();
        this.saveIDs();
    },
    watch:{
        $route(){ // called when the URL or query changes
            this.displayCurrentChildren();
            this.updateInnerText();
            this.updateInstitutionsText();
        }
    },
    methods: {
        /**
         * Creates the html for the diagram svg
         * @returns html for #diagram-svg
         */
        buildDiagram(){
            const width = settings.width; //width of the narrowest/deepest ring of the diagram
            const ratioInnerCircle = settings.ratioInnerCircle; //defines how large the radius of the inner circle should be in relation to the width
            const growthRatio = settings.growthRatio; //defines how much larger outer/shallower rings should be in comparison to the ones further in
            const maxDepth = this.getMaxDepth(this.content); //the amount of layers that the diagram will have
            const size = 1.05*((maxDepth*growthRatio+1+ratioInnerCircle)*2*width); //width and height of the diagram

            let html = "";

            html += '<svg id="diagram-svg" viewBox="'+(-size/2)+' '+(-size/2)+' '+size+' '+size+'" width="100%" style="max-width:'+size+'px">'; //create svg with id 'diagram-svg', define viewbox size and origin, make svg scale if screen is smaller than max-width

            html += this.buildSection(this.content, 0, '', maxDepth); //create the sections of the diagram

            html += this.buildInnerCircle(); //create the white inner circle

            html += '</svg>';

            html += '<div style="max-width:'+1.8*width*ratioInnerCircle+'px" id="diagram-inner">Branches Of Government</div>'; //create inner text

            return html;
        },
        /**
         * Recursive function creating the sections and layers of the diagram svg
         * @param array an array of the sections and their children
         * @param depth the depth of the layer that is supposed to be built
         * @param parentID the ID of the section above
         * @param maxDepth the maximum depth of the diagram
         * @returns path and circle elements as html
         */
        buildSection(array, depth, parentID, maxDepth){
            //if depth, parentID and maxDepth are not given, they are calculated here
            if (!depth) {
                depth = 0;
            }
            if (!parentID) {
                parentID = '';
            }
            if (!maxDepth) {
                maxDepth = this.getMaxDepth(array);
            }

            const width = settings.width; //width of the narrowest/deepest ring of the diagram
            const offsetAngle = settings.startingAngle+settings.divAngle*depth; //the angle where the first section should start, clockwise relative to the bottom
            const ratioInnerCircle = settings.ratioInnerCircle;  //defines how large the radius of the inner circle should be in relation to the width
            const growthRatio = settings.growthRatio; //defines how much larger outer/shallower rings should be in comparison to the ones further in

            const outerRadius = width*(1+ratioInnerCircle+(maxDepth-depth)*growthRatio); //the outer radius of the sections

            let html="";
            let childhtml = "";
            let elCounter = 0; //keeps track of which section is currently being added

            for(let element of array)
            {
                const startingAngle = -1*(offsetAngle+2*Math.PI/array.length*elCounter); //the starting angle of the section
                const endingAngle = -1*(offsetAngle+2*Math.PI/array.length*(elCounter+1)); //the ending angle of the section
                const elID = ((parentID) ? parentID+'-':'')+element.title.replace(/ /g,''); //the ID of the section

                let elhtml = (array.length==1)?'<circle ':'<path '; //if there is only one section in the layer, it is a full circle, otherwise a path element is used to create a circular sector

                elhtml += 'fill="'+this.calculateColor(depth, array.length, elCounter)+'" '; //the color of the section is being calculated

                elhtml += 'id="'+elID+'" '; //the ID is added

                elhtml += (depth!=0)?'style="opacity: 0; pointer-events: none;"':''; //if the layer is not the first one, its sections are hidden and pointer events are being prevented
                
                if (array.length==1) {
                    elhtml += 'cx="0" cy="0" r="'+outerRadius+'" />'; //the circle tag receives its defining properties
                } else {
                    //the path tag receives its d attribute
                    elhtml += 'd=" ';

                    //the pen is moved to the starting point
                    elhtml += 'M '
                    +outerRadius*Math.sin(startingAngle)+' '
                    +outerRadius*Math.cos(startingAngle)+' ';

                    //an arch is drawn to the ending point
                    elhtml += 'A '
                    +outerRadius+' '
                    +outerRadius+' '
                    +0+' '
                    +0+' '
                    +1+' '
                    +outerRadius*Math.sin(endingAngle)+' '
                    +outerRadius*Math.cos(endingAngle)+' ';

                    //a line is drawn to the middle of the diagram
                    elhtml += 'L '
                    +0+' '
                    +0+' ';

                    //the path is being finished
                    elhtml += 'Z" />';
                }

                html += elhtml; //the newly created section is added to the html

                //if the section has children, they are being created
                if (element.children) {
                    childhtml += this.buildSection(element.children, depth+1, elID, maxDepth);
                }

                elCounter++; //element counter incremented
            }

            html += childhtml; //the child elements are added to the html

            return html;
        },
        /**
         * Creates the html for the inner circle
         * @returns circle element as html
         */
        buildInnerCircle(){
            const width = settings.width;
            const ratioInnerCircle = settings.ratioInnerCircle;
            const radius = width*ratioInnerCircle;

            let html = '<circle id="inner-circle" fill="#fff" cx="0" cy="0" r="'+radius+'" />'; //create white circle with the ID inner-circle

            return html;
        },
        /**
         * Recursive function calculating the maximum depth of a given array
         * @param array an array of the sections an their children
         * @returns the depth of the array as a number
         */
        getMaxDepth(array){
            let maxDepth = 0;
            for (let element of array){
                if (element.children) { //if an element of an array has children...
                    let newDepth = 1+this.getMaxDepth(element.children); // ... its maximum is calculated and incremented by one ...
                    maxDepth = (newDepth > maxDepth) ? newDepth : maxDepth; // ... and overrides the current current value, if its higher
                }
            }
            return maxDepth;
        },
        /**
         * Calculates the color for a section of the diagram
         * @param depth the depth of the layer that contains the section
         * @param numberOfElements the number of elements within that layer
         * @param elCounter the number of the section
         * @returns an hsla value for the color of the section
         */
        calculateColor(depth, numberOfElements, elCounter){
            const hueStart = settings.hueStart; //the hue of the first section of the first layer
            const hueDivPiece = settings.hueDivPiece; //the amount the hue should increase from section to section
            const hueDivDepth = settings.hueDivDepth; //the amount the hue should increase from layer to layer

            let hue = hueStart+Math.pow(-1,depth+1)*hueDivPiece*elCounter+Math.pow(-1,depth+1)*hueDivDepth*depth; //the hue of the section's color
            let saturation = 43+40/numberOfElements*elCounter+"%"; //the saturation of the section's color
            let lightness = 43+40/numberOfElements*elCounter+"%"; //the lightess of the section's color
            let alpha = 1; //the alpha of the section's color

            let color = 'hsla('+hue+','+saturation+','+lightness+','+alpha+')'; //the color of the section
            return color;
        },
        /**
         * Adds all the event listeners to the path and circle elements in the svg
         */
        addEventListeners(){
            for (const path of document.getElementById("diagram-svg").childNodes) {
                path.addEventListener("click", this.click);
                if (path.id != "inner-circle"){
                    path.addEventListener("mouseover", this.hover);
                    path.addEventListener("mouseleave", this.updateInnerText);
                }
            }
            let nextButton = document.getElementById("next-button");
            nextButton.addEventListener("click", this.nextSection);
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
            let innerText = "Branches Of Government";
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
            let institutionsText = "<h2>Explore the diagram or use the button below it!</h2>";
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
            const pathElements = document.getElementById("diagram-svg").childNodes;
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
        saveIDs(array, parentID){
            if (!array) {
                array = this.content;
            }

            for (const text of array) {
                const elID = ((parentID) ? parentID+'-':'')+text.title.replace(/ /g,''); //the ID of the section
                this.elementIDs.push(elID);
                if (text.children) {
                    this.saveIDs(text.children, elID);
                }
            }
        },
        nextSection(){
            const target = this.$route.query.target;
            const elementIDs = this.elementIDs;
            let query = elementIDs[0];
            for (const elID of elementIDs) {
                if (elID == target) {
                    const index = elementIDs.indexOf(elID);
                    if(index<elementIDs.length) {
                        const newTarget = elementIDs[index+1];
                        query = newTarget;
                    }
                }
            }
            this.$router.push({ path: "" , query: { target: query } });
        },
        getChildElements(id){
            const pathElements = document.getElementById("diagram-svg").childNodes;
            let children = [];
            for (const path of pathElements) {
                if (path.id.startsWith(id)) {
                    children.push(path);
                }
            }
            return children;
        }
    },
}
</script>

<style lang="scss"> //not scoped, because otherwise the svg will not be affected
@import "~/assets/shared-styles.scss";
.institutions-diagram{
    #diagram{
        position: relative;
        margin: 10px 0;

        #diagram-inner{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%,-50%,0);
            pointer-events: none;
        }

        #diagram-svg{
            stroke-width: 2px;
            stroke: #fff;

            path, circle{
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

    .next-button-icon{
        transform: rotate(-90deg);
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

        margin: 20px 0;

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