<template>
  <el-container>
    <el-header>
      <img src="../assets/image/log.gif" alt="" />
      <!--导航菜单-->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        text-color="black"
        active-text-color="red"
        @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">产品定制化服务</el-menu-item>
        <el-menu-item index="3">实效数字运营</el-menu-item>
        <el-menu-item index="4">年框品牌服务</el-menu-item>
        <el-menu-item index="5">互联网+解决方案</el-menu-item>
        <el-menu-item index="6">案例</el-menu-item>
        <el-menu-item index="7">新闻</el-menu-item>
        <el-menu-item index="8">人才</el-menu-item>
        <el-menu-item index="9">我们</el-menu-item>
        <el-menu-item index="10">
          <img src="../assets/image/earth.gif" alt="" />
        </el-menu-item>
      </el-menu>
      <!--菜单右侧-->
      <div class="menu-right">
        <div class="menu-right-top">
          <span>项目跟踪：</span>
          <a>网站</a>
          <a>小程序</a>
        </div>
        <div class="menu-right-dottom">
          <img src="../assets/image/phone.gif" alt="" />
        </div>
      </div>
    </el-header>
    <el-main>
      <!--播放图-->
      <Main></Main>
      <!--banner-->
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
    </el-main>
    <el-footer>
      <page_bottom></page_bottom>
    </el-footer>
  </el-container>
</template>

<script>
import Main from "./main.vue";
import banner from "./banner.vue";
import card from "./card.vue";
import about from "./about.vue"
import page_bottom from "./footer.vue"
export default {
  name: "home",
  components: { Main, banner, card,about,page_bottom},
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
