<template>
  <div class="about">
    <div class="new">
      <div class="title_new">
        <img src="../assets/image/Kgunew.gif" alt="" />
      </div>
      <el-row>
        <el-col :span="8" v-for="(item, index) in aboutlist" :key="index">
          <el-card shadow="hover">
            <img :src="item.img" alt="" />
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="Kgu_about">
      <div class="title_about">
        <img src="../assets/image/Kgu_about.gif" alt="" />
      </div>
      <!--pdf-->
      <div class="pdf">
        <img src="../assets/image/huawei.gif" alt="" />
        <img src="../assets/image/ali.gif" alt="" />
      </div>
      <div class="download">
        <img src="../assets/image/dowload.gif" alt="" />
      </div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#F5F5F5"
        text-color="black"
        active-text-color="red"
        @select="handleSelect"
      >
        <el-menu-item index="1">基本法</el-menu-item>
        <el-menu-item index="2">企业文化</el-menu-item>
        <el-menu-item index="3">招聘职位</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      activeIndex: "2",
      aboutlist: [
        { img: require("../assets/image/about1.gif") },
        { img: require("../assets/image/about2.gif") },
        { img: require("../assets/image/about3.gif") },
      ],
    };
  },
  methods: {
    handleSelect(){}
  },
};
</script>
<style scoped>
.about {
  display: flex;
  overflow: hidden;
}

.new {
  position: relative;
  width: 60%;
  padding: 4vw 2vw 0 4vw; /*上右下左 */
}
.title_new {
  position: absolute;
  left: 5vw;
}
.el-row {
  position: absolute;
  top: 10vw;
}
.Kgu_about {
  position: relative;
  width: 30%;
  padding: 4vw 0 0 0; /*上右下左 */
}
.title_about {
  position: absolute;
  left: 5vw;
}
.pdf {
  position: absolute;
  left: 5vw;
  top: 10vw;
}
.pdf > img {
  padding: 0 1vw 0 0;
}
.download {
  position: absolute;
  left: 5vw;
  top: 23vw;
}
.el-menu{
  position: absolute;
  left: 5vw;
  top: 28vw;
  font-weight: 800;
}
.el-menu-item{
  padding: 0 1.75vw;
}
.el-card__body {
  padding: 0;
}
.el-card > img {
  width: 100%;
}
/*去掉菜单的下划线 */
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
</style>