<template>
    <div class="BookshelfEntry">
        <svg class="jump-to-arrow" viewBox="0 0 18 30" fill="none">
            <g id="upper-arrow">
                <path
                    d="M9.57687 4.1397L15.5292 0.579012C15.9555 0.323992 16.4971 0.631117 16.4971 1.12788L16.4971 2.52806C16.4971 2.75302 16.3789 2.96144 16.1858 3.07693L9.57687 7.03044C9.37468 7.15139 9.12238 7.15139 8.9202 7.03044L2.31124 3.07693C2.11819 2.96144 2 2.75302 2 2.52806L2 1.12788C2 0.631113 2.54161 0.32399 2.96791 0.57901L8.9202 4.1397C9.12238 4.26065 9.37469 4.26065 9.57687 4.1397Z"
                    fill="white"
                />
            </g>
            <use href="#upper-arrow" id="lower-arrow" y="6" />
        </svg>
        <div class="hitbox-up"></div>
        <div class="hitbox-diagonal"></div>
        <div class="line-up"></div>
        <div class="line-diagonal"></div>
        <a>{{ title }}</a>
        <!-- <div class="flag">
            <svg viewBox="-2 -2 72 6" fill="none">
                <path
                    d="M 0 4 L 9 0 L 70 0"
                    stroke="black"
                    stroke-width="0.4"
                    fill="none"
                />
            </svg>
            
        </div> -->
    </div>
</template>


<script>
export default {
    props: {
        title: {
            required: true,
            type: String,
        },
    },
    // computed: {
    //     titleTwoLines() {
    //         let lines = this.title.split("\n");
    //         if (lines.length === 1) {
    //             lines.push(" ");
    //         }
    //         return lines.join("\n");
    //     },
    // },
};
</script>


<style lang="scss">
.BookshelfEntry {
    // is a flex item
    flex-grow: 1; // grow and shrink as needed
    position: relative; // for absolute positioned child
    transition: flex-grow 0.6s ease-in-out;

    svg.jump-to-arrow {
        width: 3.5vw;
        filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, 0.4))
            drop-shadow(0.3vw 0.1vw 0 red);

        #lower-arrow {
            transform: translateY(0);
            transition: all 0.6s ease-in-out;
        }
    }
    div.hitbox-up {
        position: absolute;
        width: 100%;
        bottom: 100%;
        height: 10vw; // actually 5.8vw, but because of rotation we want to cover the missing area too!
        // border: 1px solid red;
    }
    div.hitbox-diagonal {
        position: absolute;
        width: 100%;
        bottom: 100%;
        height: 24vw;
        transform-origin: 50% 100%;
        transform: translateY(-5.8vw) rotate(34deg);
        // border: 1px solid red;
    }
    div.line-up {
        position: absolute;
        left: 50%;
        bottom: 100%;
        border-left: 1px solid rgba(255, 255, 255, 0.7);
        transform: translateX(-50%) translateY(-1.8vw); // translateX to account for border shift, 50% because the border apprently makes the width of the div
        height: 4vw;
    }
    div.line-diagonal {
        position: absolute;
        left: 50%;
        bottom: 100%;
        border-left: 1px solid rgba(255, 255, 255, 0.7);
        transform-origin: 50% 100%; // 50% because the border apprently makes the width of the div
        transform: translateX(-50%) translateY(-5.8vw) rotate(34deg); // translateX to account for 1px border shift
        height: 24vw;
    }
    a {
        display: inline-block; // just because its cool
        position: absolute;
        font-size: 2.5vw;
        white-space: pre;
        text-align: right;
        right: 50%;
        top: 0;
        transform-origin: 100% 0%;
        transform: translate(11vw, -27.5vw) rotate(-56deg);
        transition: letter-spacing 0.6s ease-in-out;
    }
    &:hover {
        cursor: pointer;
        flex-grow: 2;

        a {
            letter-spacing: 0.15vw;
        }
        svg.jump-to-arrow {
            #lower-arrow {
                transform: translateY(25%);
            }
        }
    }
}
</style>