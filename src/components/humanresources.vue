<template>
  <div>
    <scenarios :img="img"></scenarios>
    <!--登记证书-->
    <certificateswiper :card_list="cards.one"></certificateswiper>
    <customercase :img="tryoutimg"></customercase>
    <customercase :img="customercaseimg"></customercase>
    <brand-cycle></brand-cycle>
  </div>
</template>
<script>
import scenarios from "./scenarios.vue";
import brandCycle from "./brandCycle.vue";
import customercase from './customercase.vue';
import certificateswiper from './certificateswiper.vue'
export default {
  name: "arrtrain",
  components: { scenarios, brandCycle,customercase,certificateswiper},
  data() {
    return {
      img: require("../assets/image/human.gif"),
      customercaseimg:require("../assets/image/customercase.gif"),//客户案列图
      tryoutimg:require("../assets/image/tryout.gif"),//申请试用图
      cards: {
        one: {
          title: require("../assets/image/viewmore1.gif"),
          img: [
            require("../assets/image/certificate.gif"),
            require("../assets/image/certificate.gif"),
            require("../assets/image/certificate.gif"),
            require("../assets/image/certificate.gif"),
            require("../assets/image/certificate.gif"),
          ],
        },
      },
    };
  },
};
</script>
<style scope>
.more{
  display: none;
}
</style>