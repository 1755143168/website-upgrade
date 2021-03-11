<template>
  <div class="main">
    <el-row>
      <el-col :span="content" id="content">
          <navheader class="navheader" @neu="neu"></navheader>
          <floatmenu
            class="float"
            v-show="this.$store.getters.isShow"
          ></floatmenu>
          <maincontent class="maincontent"></maincontent>
      </el-col>
      <el-col :span="side">
        <navside v-if="shownavside" :isCollapse="isCollapse"></navside
      ></el-col>
    </el-row>
    <page_bottom class="pagebottom"></page_bottom>
  </div>
</template>
<script>
import navheader from "./navheader.vue";
import navside from "./navside.vue";
import maincontent from "./maincontent.vue";
import page_bottom from "./footer.vue";
import floatmenu from "./floatmenu";
export default {
  name: "Main",
  components: { navheader, maincontent, navside, page_bottom, floatmenu },
  data() {
    return {
      isCollapse: false,
      shownavside: false, //侧边菜单显示
      side: 0, //侧边栏大小
      content: 24, //内容大小
    };
  },
  methods: {
    //弹窗菜单操作
    neu(data) {
      this.isCollapse = data;
      this.shownavside = data;
      console.log("按菜单", data);
      if (data == true) {
        this.side = 4;
        this.content = 20;
      } else {
        this.side = 0;
        this.content = 24;
      }
    },
  },
};
</script>
<style scoped>
.float {
  width: 100%;
  height: 22vw;
  position: absolute;
  top: 5vw;
  z-index: 9999;
  background-color: #f5f5f5;
}

</style>