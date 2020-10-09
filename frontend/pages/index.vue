<template>
  <div class="main">
    <div class="landing">
      <div class="flex-spacer"></div>
      <h1>
        World United
        <div class="underline"></div>
      </h1>
      <div class="slogans">
        <p>The movement for a world government.</p>
        <p>Let's take responsibility on a global level.</p>
      </div>
      <div class="flex-spacer"></div>
      <div class="flex-spacer"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main {
  background: linear-gradient(
    180deg,
    #4b62b4 0%,
    #303a5e 100vh,
    #42569c 130vh,
    #343e62 100%
  );
  height: 300vh;

  .landing {
    height: calc(100 * var(--reactive-vh));
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.25));

    h1 {
      display: inline-block;
      font-family: "Bebas Neue";
      font-size: 11vw;
      line-height: 100%;
      letter-spacing: 0.8vw;
      margin-left: 10vw;
      position: relative;

      .underline {
        position: absolute;
        width: 100%;
        border-bottom: 3px solid white;
        bottom: -0px;
        left: 0;
      }
    }

    .slogans {
      margin-left: 15vw;

      p {
        font-size: 2.6vw;
        line-height: 100%;
        padding: 14px 0;
      }
    }

    .flex-spacer {
      flex: 1 1 0;
      width: 100%;
    }
  }
}
</style>
