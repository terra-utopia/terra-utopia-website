<template>
  <div class="main">
    <div class="landing">
      <div class="flex-spacer"></div>
      <div class="heading-wrapper">
        <h1>World United</h1>
        <div class="underline"></div>
      </div>
      <div class="slogans">
        <p>
          The movement for a <span class="highlighted">world government</span>.
        </p>
        <p>
          Let's take responsibility on a
          <span class="highlighted">global level</span>.
        </p>
      </div>
      <div class="flex-spacer"></div>
      <div class="flex-spacer"></div>
    </div>
    <div class="position-for-dots">
      <div class="dots-wrapper"><div class="dots"></div></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main {
  height: 300vh;
  background: linear-gradient(
    180deg,
    #4b62b4 0%,
    #303a5e 100vh,
    #42569c 130vh,
    #343e62 100%
  );

  .landing {
    height: calc(100 * var(--reactive-vh, 100vh));
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    filter: drop-shadow(0vw 0.33vw 0.14vw rgba(0, 0, 0, 0.25));
    z-index: 1;
    position: relative; // for z-index stacking context

    .heading-wrapper {
      margin-left: 10vw;

      h1 {
        display: inline-block;
        font-family: "Bebas Neue";
        font-style: normal;
        font-weight: normal;
        font-size: 11vw;
        line-height: 100%;
        letter-spacing: 0.8vw;
        position: relative;

        &:hover {
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 3px white;
        }
      }
      .underline {
        border-bottom: 3px solid white;
        transform: translateY(-1vw);
      }
    }

    .slogans {
      margin-top: 2vw;
      margin-left: 15vw;
      width: 40vw;

      p {
        padding: 1.5vw 0;
        font-size: 2.6vw;
        letter-spacing: 0.2vw;
        line-height: 120%;

        span.highlighted {
          font-style: italic;
          font-weight: 500;
        }
      }
    }

    .flex-spacer {
      flex: 1 1 0;
      width: 100%;
    }
  }

  .position-for-dots {
    position: relative;
    width: 100%;
    z-index: 0;

    .dots-wrapper {
      position: absolute;
      left: 0;
      bottom: 0;
      overflow: hidden;
      width: 100%;
      transform: translateY(60%);

      .dots {
        width: 115vw;
        height: 70vw;
        background: url("~assets/svg/Dots.svg");
        background-size: cover;
        transform: translateX(-10%);
      }
    }
  }
}
</style>
