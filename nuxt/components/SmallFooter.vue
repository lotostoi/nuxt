<template>
  <footer class="footer">
    <div class="footer__cont">
      <p>&copy; 2017 Brand All Rights Reserved.</p>
      <div>
        <a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang = "scss">
.footer {
  display: flex;
  width: 100%;
  background-color: #e8e8e8;

  &__cont {
    justify-content: space-between;
    max-width: 1170px;
    width: 100%;
    min-height: 80px;
    display: flex;
    padding: 24px 15px;
    margin: 0 auto;
    flex-wrap: wrap;
    box-sizing: border-box;
    align-items: center;
    & > p {
      margin-left: 15px;
      color: #7a7a7a;
      font-size: 16px;
      font-weight: 400;
      line-height: 42px;
      letter-spacing: 0.4px;
    }
    & > div {
      margin: 0 10px;
      display: flex;
      & > a {
        margin: 0 5px;
        text-decoration: none;
        & > i {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 32px;
          height: 32px;
          background-color: white;
          transition: background-color 0.5s;
          color: #b2b2b2;
          &:hover {
            color: white;
            background-color: $pinc;
          }
        }
      }
    }
  }
}

@include mq(600, max) {
  .footer {
    display: flex;
    width: 100%;
    background-color: #e8e8e8;

    &__cont {
      justify-content: center;
      padding: 10px 10px 20px 10px;
      align-items: center;
      & > p {
        width: 100%;
        text-align: center;
        margin-left: 0;
        color: #7a7a7a;
        font-size: 16px;
        font-weight: 400;
        line-height: 42px;
        letter-spacing: 0.4px;
      }
      & > div {
        display: flex;
        & > a {
          margin: 0 5px;
          text-decoration: none;
          & > i {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            background-color: white;
            transition: background-color 0.5s;
            color: #b2b2b2;
            &:hover {
              color: white;
              background-color: $pinc;
            }
          }
        }
      }
    }
  }
}
</style>