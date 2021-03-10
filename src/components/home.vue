<template>
  <div>
    <!--swiper-->
    <swiper></swiper>
    <!--选择卡片-->
    <card :card_list="cards.one"></card>
    <card :card_list="cards.second"></card>
    <card :card_list="cards.three"></card>
    <card :card_list="cards.four"></card>
    <!--申请体验-->
    <div class="experience">
      <img src="../assets/image/experience1.gif" alt="" />
      <img src="../assets/image/experience2.gif" alt="" />
    </div>
    <!--关于-->
    <about></about>
  </div>
</template>

<script>
import banner from "./banner.vue";
import card from "./card.vue";
import about from "./about.vue";
import page_bottom from "./footer.vue";
import swiper from "./swiper.vue";
export default {
  name: "home",
  components: { banner, card, about, page_bottom, swiper },
  data() {
    return {
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
  methods: {
    handleSelect() {},
  },
};
</script>

<style scoped>
element.style {
  height: 10vh !important;
}

.el-header {
  display: flex;
  align-items: center;
  padding: 2vw 3vw 2vw 2vw; /*上，右，下，左*/
}
.el-header > img {
  padding: 1vw 3vw;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
.el-menu-item {
  font-size: 1vw;
}
.el-main {
  padding: 0;
  /*overflow: hidden;*/
}
.el-footer {
  padding: 0;
  height: auto;
}
.experience {
  width: 100%;
  display: flex;
}
.experience > img {
  width: 50%;
}
</style>
