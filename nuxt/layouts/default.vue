<template>
  <div>
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from "@/components/Header";
import AppFooter from "@/components/Footer";
import AppLinks from "@/components/UsefulLinks";
export default {
  async fetch() {
    const { store } = this.$nuxt.context;
    if (store.getters["catalog/catalog"]) {
      await store.dispatch("catalog/getCatalog");
    }
    if (store.getters["cart/cart"]) {
      await store.dispatch("cart/getCart");
    }
  },

  data() {
    return {
      filtredGoods: [],
      Cart: [],
      valueSearch: "",
    };
  },

  components: {
    AppHeader,
    AppFooter,
    AppLinks,
  },
  methods: {
    appFilter() {
      const isFind = this.allGoods.find(({ title }) =>
        title.toLowerCase().includes(this.valueSearch.toLowerCase())
      );
      this.$router.push({ name: "Catalog" });
      if (this.valueSearch === "") {
        this.filtredGoods = this.allGoods;
      } else if (!isFind) {
        this.filtredGoods = [];
      } else {
        this.filtredGoods = this.allGoods.filter(({ title }) =>
          title.toLowerCase().includes(this.valueSearch.toLowerCase())
        );
      }
    },
  },
  computed: {
    allGoods() {
      return this.$store.getters["catalog/catalog"];
    },

    totalAmount() {
      return this.Cart.reduce((all, good) => all + good.amount, 0);
    },
    totalSumm() {
      return this.Cart.reduce((all, good) => all + good.price * good.amount, 0);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.router {
  margin-top: 120px;
}
</style>
