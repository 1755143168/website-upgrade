<!--年框品牌服务页-->
<template>
  <div>
    <scenarios :img="img"></scenarios>
    <customercase :img="customercaseimg"></customercase>
    <brand-cycle></brand-cycle>
  </div>
</template>
<script>
import scenarios from "./scenarios.vue";
import brandCycle from "./brandCycle.vue";
import customercase from './customercase.vue';
export default {
  name: "brand",
  components: { scenarios, brandCycle,customercase},
  data() {
    return {
      img: require("../assets/image/brand.gif"),
      customercaseimg:require("../assets/image/customercase2.gif")//客户案列图
    };
  },
};
</script>
<style scoped>
</style>