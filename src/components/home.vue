<template>
  <el-container>
      <!--播放图-->
      <!--banner-->
      <swiper></swiper>
      <banner></banner>
      <!--选择卡片-->
      <card></card>
      <card></card>
      <card></card>
      <!--申请体验-->
      <div class="experience">
        <img src="../assets/image/experience1.gif" alt="" />
        <img src="../assets/image/experience2.gif" alt="" />
      </div>
      <!--关于-->
      <about></about>
    <el-footer>
      <page_bottom></page_bottom>
    </el-footer>
  </el-container>
</template>

<script>
import navheader from './navheader.vue'
import banner from "./banner.vue";
import card from "./card.vue";
import about from "./about.vue"
import page_bottom from "./footer.vue"
import swiper from './swiper.vue'
export default {
  name: "home",
  components: {banner, card,about,page_bottom,swiper},
  data() {
    return {
      activeIndex: "1",
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
.el-footer{
  padding: 0;
  height: auto;
}
.experience{
  width: 100%;
  display: flex;
}
.experience>img{
  width: 50%;
}
</style>
