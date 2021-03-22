<template>
  <tr class="trgood">
    <td>
      <a href="#">
        <img :src="cartItem.img" alt="photo" />
      </a>
      <div class="description">
        <h4>{{ cartItem.title }}</h4>
      </div>
    </td>
    <td>${{ cartItem.price }}</td>
    <td>
      <span>{{ cartItem.amount }}</span>
    </td>
    <td>FREE</td>
    <td>${{ cartItem.amount * cartItem.price }}</td>
    <td
      class="dec"
      @click.prevent="$store.dispatch('cart/removeFromCart', cartItem)"
    >
      X
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    cartItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
tr.trgood {
  padding: 25px 0;
  margin-bottom: 0;

  & > td:first-of-type {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & > a {
      width: 100%;
      position: relative;
      display: flex;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #f1f7fa1f;
      }
      &:hover:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #faf1f78a;
      }
      img {
        width: 150px;
      }
    }
    & > .description {
      margin-left: 21px;
      margin-bottom: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      & > h4 {
        color: #222222;
        font-size: 13px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 34px;
      }
      & > span {
        font-size: 13px;

        line-height: 20px;
        color: #575757;
        font-weight: 300;
        & > span {
          font-weight: 400;
        }
      }
    }
  }
  & > td:nth-of-type(3) {
    & > span {
      display: flex;
      width: 54px;
      height: 30px;
      border: 1px solid #eaeaea;
      background-color: #ffffff;
      line-height: 30px;
      justify-content: center;
    }
  }
  & > td:last-of-type {
    & > span {
      cursor: pointer;
      display: flex;
      width: 17px;
      height: 15px;
      background-color: #c0c0c0;
      font-size: 16px;
      font-weight: 400;
      text-transform: uppercase;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      padding-bottom: 2px;
      &:hover {
        background-color: $pinc;
      }
      &:active {
        background-color: $pincActive;
      }
    }
  }
  & > td.dec {
    width: 30px;
    font-size: 1.2rem;
    border: 1px solid gray;
    border-radius: 3px;
    display: flex;
    padding-top: 3px;
    align-items: center;
    text-decoration: none;
    line-height: 20px;
    cursor: pointer;
    &:hover {
      border-color: lighten($pinc, 10%);
      color: darken($pinc, 20%);
      background-color: lighten($pinc, 20%);
    }
    &:active {
      transform: scale(0.93);
    }
  }
}

@include mq(900, max) {
  tr.trgood {
    & > td:first-of-type {
      & > a {
        position: relative;
        display: flex;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #f1f7fa1f;
        }
        &:hover:before {
          content: "";
          position: absolute;
          display: none;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #faf1f78a;
        }
      }
    }

    & > td:last-of-type {
      & > span {
        &:hover {
          background-color: #c0c0c0;
        }
      }
    }
  }
}
</style>