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
};
</script>


<style lang="scss">
.BookshelfEntry {
    // is a flex item
    flex-grow: 1; // grow and shrink as needed
    position: relative; // for absolute positioned child
    transition: flex-grow 0.6s ease-in-out;
    text-align: center;

    svg.jump-to-arrow {
        display: inline-block;
        width: calc(5 * var(--base-size));
        filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, 0.4))
            drop-shadow(
                calc(0.43 * var(--base-size)) calc(0.14 * var(--base-size)) 0
                    red
            );

        #lower-arrow {
            transform: translateY(0);
            transition: all 0.6s ease-in-out;
        }
    }
    div.hitbox-up {
        position: absolute;
        width: 100%;
        bottom: 100%;
        height: calc(
            14.3 * var(--base-size)
        ); // actually it should be smaller, but because of rotation we want to cover the missing area too!
        // outline: 1px solid red;
    }
    div.hitbox-diagonal {
        position: absolute;
        width: 100%;
        bottom: 100%;
        height: calc(34.29 * var(--base-size));
        transform-origin: 50% 100%;
        transform: translateY(calc(calc(-6.72 - 2.57) * var(--base-size)))
            rotate(34deg);
        // outline: 1px solid red;
    }
    div.line-up {
        position: absolute;
        left: 50%;
        bottom: 100%;
        border-left: 1px solid rgba(255, 255, 255, 0.7);
        transform: translateX(-50%) translateY(calc(-2.57 * var(--base-size))); // translateX to account for border shift, 50% because the border apprently makes the width of the div
        height: calc(6.8 * var(--base-size));
    }
    div.line-diagonal {
        position: absolute;
        left: 50%;
        bottom: 100%;
        border-left: 1px solid rgba(255, 255, 255, 0.7);
        transform-origin: 50% 100%; // 50% because the border apprently makes the width of the div
        transform: translateX(-50%)
            translateY(calc(calc(-6.72 - 2.57) * var(--base-size)))
            rotate(34deg); // translateX to account for 1px border shift
        height: calc(48 * var(--base-size));
    }
    a {
        display: inline-block; // just because its cool
        position: absolute;
        font-size: calc(4.3 * var(--base-size));
        white-space: pre;
        text-align: right;
        right: 50%;
        top: 0;
        letter-spacing: calc(0.25 * var(--base-size));
        transform-origin: 100% 0%;
        transform: translate(
                calc(22.6 * var(--base-size)),
                calc(-52.2 * var(--base-size))
            )
            rotate(-56deg);
        transition: letter-spacing 0.6s ease-in-out;
    }
    &:hover {
        cursor: pointer;
        flex-grow: 2;

        a {
            letter-spacing: calc(0.5 * var(--base-size));
        }
        svg.jump-to-arrow {
            #lower-arrow {
                transform: translateY(25%);
            }
        }
    }
}

@media (min-width: 480px) {
    .BookshelfEntry {
        div.line-diagonal,
        div.hitbox-diagonal {
            height: calc(34.29 * var(--base-size));
        }
        a {
            font-size: calc(3.57 * var(--base-size));
            transform: translate(
                    calc(15.71 * var(--base-size)),
                    calc(-40.2 * var(--base-size))
                )
                rotate(-56deg);
        }
    }
}
</style>