<template>
  <section class="subscribe">
    <div class="subscribe__cont">
      <div class="left">
        <img src="@/assets/img/photo.png" width="83" height="83" alt="photo" />
        <div>
          <p>
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar
            purus condimentum a. Aliquam condimentum mattis neque sed pretium”
          </p>
          <span>Bin Burhan</span>
          <span>Dhaka, Bd</span>
          <div class="right">
            <div data-id="1"></div>
            <div data-id="2"></div>
            <div data-id="3"></div>
          </div>
        </div>
      </div>

      <div class="right">
        <h5>Subscribe</h5>
        <p>FOR OUR NEWLETTER AND PROMOTION</p>
        <div class="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
          />
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.subscribe {
  display: flex;
  width: 100%;
  background: url("~@/assets/img/fone3.jpg") no-repeat;
  background-position: center;
  background-size: cover;

  box-sizing: border-box;

  &__cont {
    max-width: 1170px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
    & .left {
      width: 50%;

      min-width: 320px;
      display: flex;
      padding: 111px 72px 156px 15px;
      box-sizing: border-box;
      border-right: 1px solid white;
      & > div {
        margin-left: 28px;
        display: flex;
        flex-direction: column;
        & > p {
          color: #222224;
          font-size: 16px;
          line-height: 26px;
          letter-spacing: 0.4px;
          margin-bottom: 19px;
          font-style: italic;
        }
        & > span:first-of-type {
          height: 27px;
          color: #f16d7f;
          font-size: 16px;
          font-weight: 700;
        }
        & > span:last-of-type {
          color: #222224;
          font-size: 12px;
          font-weight: 300;
          letter-spacing: 0.3px;
          line-height: 14px;
        }
        & > div {
          display: flex;
          margin-top: 41px;
          & > div {
            margin-right: 20px;
            width: 38px;
            height: 4px;
            background-color: #d6d6d6;
          }
          & > div[data-id="2"] {
            background-color: #f16d7f;
          }
        }
      }
    }
    & > .right {
      width: 50%;

      min-width: 320px;
      box-sizing: border-box;
      padding: 148px 96px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      & > h5 {
        color: #222224;
        font-size: 24px;
        font-weight: 400;
        text-align: center;
      }
      & > p {
        margin: 0px 0 35px;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.35px;
        text-align: center;
      }
      & > div {
        display: flex;
        input {
          width: 100%;
          max-width: 282px;
          height: 46px;
          border-radius: 23px 0 0 23px;
          background-color: #e1e1e1;
          color: rgb(53, 53, 53);
          outline: none;
          padding: 0 20px;
          border: none;
          box-sizing: border-box;

          &:focus {
            background-color: rgb(202, 240, 202);
          }
        }
        button {
          outline: none;
          border: none;
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 104px;
          height: 46px;
          border-radius: 0 23px 23px 0;
          background-color: #f16d7f;
          justify-content: center;
          color: #ffffff;
          font-size: 14px;
          font-weight: 400;
          padding: 10px;
          letter-spacing: 0.35px;
          transition: background-color 0.5s;
          &:hover {
            background-color: $pincActive;
          }
          &:active {
            transform: scale(0.98);
          }
        }
      }
    }
  }
}

@include mq(890, max) {
  .subscribe {
    margin-top: 0;
    display: flex;
    width: 100%;
    background: url("~@/assets/img/fone3.jpg") no-repeat;
    background-size: cover;
    background-position: center;

    box-sizing: border-box;

    &__cont {
      max-width: 1170px;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 15px;
      margin: 0 auto;
      flex-wrap: wrap;
      justify-content: center;
      box-sizing: border-box;

      & .left {
        width: 90%;

        min-width: 320px;
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        border-right: none;
        flex-direction: column;
        & > img {
          margin: 10px auto;
        }
        & > div {
          margin-left: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          & > p {
            color: #222224;
            font-size: 16px;
            line-height: 26px;
            letter-spacing: 0.4px;
            margin-bottom: 19px;
            font-style: italic;
          }
          & > span:first-of-type {
            height: 27px;
            color: #f16d7f;
            font-size: 16px;
            font-weight: 700;
          }
          & > span:last-of-type {
            color: #222224;
            font-size: 12px;
            font-weight: 300;
            letter-spacing: 0.3px;
            line-height: 14px;
          }
          & > div {
            display: flex;
            margin-top: 41px;
            & > div {
              margin-right: 20px;
              width: 38px;
              height: 4px;
              background-color: #d6d6d6;
            }
            & > div[data-id="2"] {
              background-color: #f16d7f;
            }
          }
        }
      }
      & > .right {
        width: 100%;
        // height: 100%;
        min-width: 320px;
        box-sizing: border-box;
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        & > h5 {
          color: #222224;
          font-size: 24px;
          font-weight: 400;
          text-align: center;
        }
        & > p {
          margin: 0px 0 35px;
          font-size: 14px;

          text-transform: uppercase;
          /* Text style for "FOR OUR NE" */
          letter-spacing: 0.35px;
          text-align: center;
        }
        & > div {
          display: flex;
          margin: 0 auto;
          input {
            width: 100%;
            max-width: 282px;
            height: 46px;
            border-radius: 23px 0 0 23px;
            background-color: #e1e1e1;
            color: rgb(53, 53, 53);
            outline: none;
            padding: 0 20px;
            border: none;
            box-sizing: border-box;

            &:focus {
              background-color: rgb(202, 240, 202);
            }
          }
          button {
            outline: none;
            border: none;
            display: flex;
            align-items: center;
            width: 100%;
            max-width: 104px;
            height: 46px;
            border-radius: 0 23px 23px 0;
            background-color: #f16d7f;
            justify-content: center;
            color: #ffffff;
            font-size: 14px;
            font-weight: 400;
            line-height: 54px;
            /* Text style for "Subscribe" */
            letter-spacing: 0.35px;
            transition: background-color 0.5s;
            &:hover {
              background-color: $pincActive;
            }
            &:active {
              transform: scale(0.98);
            }
          }
        }
      }
    }
  }
}
</style>