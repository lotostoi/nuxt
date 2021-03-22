<template>
  <div>
    <app-subscribe />
    <app-links />
    <app-small-footer />
  </div>
</template>

<script>
import AppSmallFooter from "@/components/SmallFooter";
import AppLinks from "@/components/UsefulLinks";
import AppSubscribe from "@/components/Subscribe";
export default {
  components: {
    AppSubscribe,
    AppLinks,
    AppSmallFooter,
  },
};
</script>

<style>
</style>