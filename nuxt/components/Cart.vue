<template>
  <div class="shoppingCart">
    <div class="shoppingCart__cont">
      <table class="shoppingCart__table">
        <tbody>
          <tr class="trtitle">
            <td>Product Details</td>
            <td>unite Price</td>
            <td>Quantity</td>
            <td>shipping</td>
            <td>Subtotal</td>
            <td>ACTION</td>
          </tr>
          <app-cart-item
            v-for="cartItem in cart"
            :key="cartItem.id"
            :cartItem="cartItem"
          />
        </tbody>
      </table>
      <div class="shoppingCart__buttons">
        <button class="clearCart">CLEAR SHOPPING CART</button>
        <button class="shop">CONTINUE SHOPPING</button>
      </div>
      <div class="shoppingCart__discount">
        <form class="adress">
          <h4>Shipping Adress</h4>
          <select name="sity" class="sity">
            <option value="Bangladesh">Bangladesh</option>
            <option value="Moscow">Moscow</option>
            <option value="Vladivostok">Vladivostok</option>
          </select>
          <input type="text" name="state" class="state" placeholder="State" />
          <input
            type="text"
            name="state"
            class="state"
            placeholder="Postcode/Zip"
          />
          <button type="submit">Get a quote</button>
        </form>
        <form class="coupon">
          <h4>Coupon discount</h4>

          <label>Enter your coupon code if you have one</label>
          <input type="text" name="state" class="state" placeholder="State" />
          <button type="submit">Apply coupon</button>
        </form>
        <div>
          <p>Sub total <span>$900</span></p>
          <h4>GRAND TOTAL <span>$900</span></h4>
          <div></div>
          <button class="checkout">Proceed to checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppCartItem from "@/components/CartItem";
export default {
  components: {
    AppCartItem,
  },
  computed: {
    cart() {
      return this.$store.getters["cart/cart"];
    },
  },
};
</script>

<style lang="scss" >
.shoppingCart {
  display: flex;
  width: 100%;
  margin-top: 96px;
  &__cont {
    max-width: 1170px;
    width: 100%;
    min-height: 50px;
    display: flex;
    align-items: center;
    padding: 90px 15px 80px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
  }
  &__table {
    display: flex;
    width: 100%;
    overflow-x: auto;
    & > tbody {
      width: 100%;
      min-width: 700px;
      display: flex;
      flex-direction: column;
      & > tr {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eaeaea;
        margin-bottom: 25px;
        & > td {
          width: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #656565;
          font-size: 13px;
          font-weight: 400;
          line-height: 20px;
        }
        & > td:first-of-type {
          display: flex;
          width: 280px;
          justify-content: flex-start;
        }
      }
      & > tr.trtitle {
        height: 50px;

        & > td {
          display: flex;
          align-items: center;
          color: #222222;
          font-size: 13px;
          font-weight: 700;
          line-height: 20px;
          text-transform: uppercase;
          letter-spacing: -0.2px;
          justify-content: center;
        }
        & > td:first-of-type {
          display: flex;
          justify-content: flex-start;
        }
      }
    
    }
  }
  &__buttons {
    margin-top: 44px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    & > button {
      width: 225px;
      min-height: 50px;
      border: 1px solid #eaeaea;
      background-color: #ffffff;
      outline: none;
      transition: transform 0.3s;
      &:hover {
        background-color: $pinc;
      }
      &:active {
        transform: scale(1.1);
      }
    }
    & > button:last-of-type {
      margin-left: 10px;
    }
  }
  &__discount {
    margin-top: 60px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    & > .coupon,
    & > .adress {
      display: flex;
      flex-direction: column;
      max-width: 355px;
      min-width: 280px;
      width: 100%;
      & > h4 {
        color: #222222;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 20px;
      }
      & > label {
        color: #000000;
        font-size: 14px;
        font-weight: 300;
        margin-bottom: 20px;
      }
      & > .sity {
        border: 1px solid #eaeaea;
        display: flex;
        width: 100%;
        outline: none;
        padding: 16px 18px;
        color: #b1b1b1;
        font-size: 13px;
        font-weight: 300;
        -webkit-appearance: none;
        position: relative;
        background: url("~@/assets/img/arrow.svg") no-repeat 95% 50%;
        background-size: 10px;
        transition: background-color 0.3s;
        margin-bottom: 20px;
        &:hover {
          background-color: rgb(197, 238, 149);
        }
        & > option {
          padding: 10px !important;
        }
        &::before {
          content: "";
          position: absolute;
          display: block;
          width: 20px;
          border-top: 8px solid #7a7a7a;
          border-right: 8px solid transparent;
          border-left: 8px solid transparent;
          right: 16px;
          top: 15px;
        }
      }
      & > input {
        outline: none;
        width: 100%;
        height: 45px;
        border: 1px solid #eaeaea;
        background-color: #ffffff;
        margin-bottom: 20px;
        padding: 16px;
        color: #b1b1b1;
        font-size: 13px;
        font-weight: 300;
        box-sizing: border-box;
        @include placeholder {
          color: #b1b1b1;
          font-size: 13px;
          font-weight: 300;
        }
        &:focus {
          background-color: rgb(197, 238, 149);
        }
      }
      & > button {
        width: 100px;
        min-height: 35px;
        border: 1px solid #eaeaea;
        background-color: #ffffff;
        color: #4a4a4a;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        transition: transform 0.3s;
        outline: none;
        margin-bottom: 20px;
        &:hover {
          background-color: $pinc;
        }
        &:active {
          transform: scale(1.1);
        }
      }
    }
    & > div {
      display: flex;
      flex-direction: column;
      max-width: 355px;
      min-width: 200px;
      height: 214px;
      width: 100%;
      background-color: #f5f3f3;
      padding: 40px;
      box-sizing: border-box;
      & > p {
        width: 100%;
        color: #4a4a4a;
        font-size: 11px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 20px;
        text-align: right;
        & > span {
          margin-left: 5px;
        }
      }
      & > h4 {
        color: #222222;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        text-align: right;
        width: 100%;
        margin-bottom: 20px;
        & > span {
          margin-left: 5px;
          color: #f16d7f;
        }
      }
      & > div {
        width: 100%;
        border-bottom: 1px solid #e2e2e2;
        margin-bottom: 17px;
      }
      & > button {
        width: 100%;
        max-width: 273px;
        min-width: 200px;
        min-height: 50px;
        background-color: #f16d7f;
        color: #ffffff;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        border: none;
        outline: none;

        &:hover {
          background-color: $pincHover;
        }
        &:active {
          transform: scale(1.1);
        }
      }
    }
  }
}

@include mq(1120, max) {
  .shoppingCart {
    &__buttons {
      justify-content: space-around;
    }
    &__discount {
      justify-content: space-evenly;
      & > .coupon,
      & > .adress,
      & > div {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
}
@include mq(900, max) {
  .shoppingCart {
  
    &__buttons {
      & > button {
        &:hover {
          background-color: #ffffff;
        }
      }
    }
    &__discount {
      & > .coupon,
      & > .adress {
        & > .sity {
          &:hover {
            background-color: white;
          }
        }

        & > button {
          &:hover {
            background-color: #ffffff;
          }
        }
      }
      & > div {
        & > button {
          &:hover {
            background-color: $pinc;
          }
        }
      }
    }
  }
}
</style>