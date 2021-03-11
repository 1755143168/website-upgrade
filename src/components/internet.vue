<!--互联网+解决方案页-->
<template>
  <div>
    <scenarios :img="img"></scenarios>
    <!--选择卡片-->
    <card :card_list="cards.one"></card>
    <card :card_list="cards.second"></card>
    <card :card_list="cards.three"></card>
    <card :card_list="cards.four"></card>
    <brand-cycle></brand-cycle>
  </div>
</template>
<script>
import scenarios from "./scenarios.vue";
import card from "./card.vue";
import brandCycle from "./brandCycle.vue";
export default {
  name: "customized",
  components: { scenarios, card,brandCycle },
  data() {
    return {
      img: require("../assets/image/互联网+.gif"),
      cards: {
        one: {
          title: require("../assets/image/viewmore1.gif"),
          img: [
            require("../assets/image/swiper/swiper1.gif"),
            require("../assets/image/swiper/swiper2.gif"),
            require("../assets/image/swiper/swiper3.gif"),
            require("../assets/image/swiper/swiper4.gif"),
          ],
        },
        second: {
          title: require("../assets/image/viewmore2.gif"),
          img: [
            require("../assets/image/swiper/swiper5.gif"),
            require("../assets/image/swiper/swiper6.gif"),
            require("../assets/image/swiper/swiper7.gif"),
            require("../assets/image/swiper/swiper8.gif"),
          ],
        },
        three: {
          title: require("../assets/image/viewmore3.gif"),
          img: [
            require("../assets/image/swiper/swiper9.gif"),
            require("../assets/image/swiper/swiper10.gif"),
            require("../assets/image/swiper/swiper11.gif"),
            require("../assets/image/swiper/swiper12.gif"),
          ],
        },
        four: {
          title: require("../assets/image/viewmore4.gif"),
          img: [
            require("../assets/image/swiper/swiper13.gif"),
            require("../assets/image/swiper/swiper14.gif"),
            require("../assets/image/swiper/swiper15.gif"),
            require("../assets/image/swiper/swiper16.gif"),
          ],
        },
      },
    };
  },
};
</script>
<style scoped>
</style>