<template>
  <section class="baner">
    <div class="baner__cont">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="0.167in"
        height="1.278in"
      >
        <path
          fill-rule="evenodd"
          fill="rgb(241, 109, 127)"
          d="M-0.000,-0.000 L12.000,-0.000 L12.000,92.000 L-0.000,92.000 L-0.000,-0.000 Z"
        />
      </svg>
      <h1 class="baner__h1">
        <span class="top">The brand</span>
        <span class="bottom">Of luxerious <span>Fashion</span></span>
      </h1>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.baner {
  display: flex;
  width: 100%;
  background-color: #e8e8e8;

  &__cont {
    height: 665px;
    background: url("~@/assets/img/baner.jpg") no-repeat;
    background-position: 60% 50%;

    max-width: 1170px;
    width: 100%;
    min-height: 50px;
    display: flex;

    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 225px 15px;
    box-sizing: border-box;
    & > svg {
      margin-top: 0px;
    }
  }

  &__h1 {
    margin-left: 10px;
    display: flex;
    flex-direction: column;

    & > .top {
      display: flex;
      font-size: 52px;
      font-weight: 600;
      text-transform: uppercase;
      line-height: 43px;
      margin-bottom: 15px;
    }
    & > .bottom {
      text-transform: uppercase;
      display: flex;
      font-size: 34px;
      font-weight: 600;
      & > span {
        margin-left: 5px;
        color: $pinc;
      }
    }
  }
}

@include mq(500, max) {
  .baner {
    display: flex;
    width: 100%;
    background-color: #e8e8e8;

    &__cont {
      height: 665px;
      background: url("~@/assets/img/baner.jpg") no-repeat;
      background-position: 59% 50%;

      max-width: 1170px;
      width: 100%;
      min-height: 50px;
      display: flex;

      margin: 0 auto;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding: 225px 15px;
      box-sizing: border-box;
      & > svg {
        margin-top: 0px;
      }
    }

    &__h1 {
      margin-left: 10px;
      display: flex;
      flex-direction: column;

      & > .top {
        display: flex;
        font-size: 30px;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 43px;
        margin-bottom: 15px;
      }
      & > .bottom {
        text-transform: uppercase;
        display: flex;
        font-size: 17px;
        font-weight: 600;
        & > span {
          margin-left: 5px;
          color: $pinc;
        }
      }
    }
  }
}
</style>