<template>
<div>
  <el-row :gutter="0">
    <el-col class="log" :span="3"
      ><img src="../assets/image/log.gif" alt=""
    /></el-col>
    <!--导航菜单-->
    <el-col v-if="!this.$store.getters.isShow" class="menu" :span="13">
      <!--导航菜单-->
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        text-color="black"
        active-text-color="red"
        @select="handleSelect"
        router    
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">产品定制化服务</el-menu-item>
        <el-menu-item index="3">实效数字运营</el-menu-item>
        <el-menu-item index="4">年框品牌服务</el-menu-item>
        <el-menu-item index="5">
        <el-submenu>
          <template slot="title">互联网+解决方案</template>
          <el-menu-item class="hover" index="5_1">艺培教务系统解决方案</el-menu-item>
          <el-menu-item class="hover" index="5_2">职培在线学习解决方案</el-menu-item>
          <el-menu-item class="hover" index="5_3">蓝领人力资源O2O解决方案</el-menu-item>
          <el-menu-item class="hover" index="5_4">智慧弹簧互联网+解决方案</el-menu-item>
        </el-submenu>
        </el-menu-item>
        <el-menu-item index="6">案例</el-menu-item>
        <el-menu-item index="7">新闻</el-menu-item>
        <el-menu-item index="8">人才</el-menu-item>
        <el-menu-item index="9">我们</el-menu-item>
      </el-menu>
    </el-col>
    <el-col v-if="this.$store.getters.isShow" class="menu" :span="13">
      <img src="../assets/image/cancle.gif" alt="" @click="cancle()">
    </el-col>
    <el-col class="earth" :span="1">
      <img src="../assets/image/earth.gif" alt="" />
    </el-col>
    <el-col class="track" :span="3">
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
    </el-col>
    <el-col class="nev" :span="2">
      <img src="../assets/image/neu.gif" alt="" @click="neu()" />
    </el-col>
  </el-row>
  </div>
</template>
<script>
import floatmenu from "./floatmenu"
export default {
  name: "navheader",
  components:{floatmenu},
  data() {
    return {
      activeIndex:"1",
      isCollapse:false,
    };
  },
  methods: {
    handleSelect() {},
    //打开侧边菜单
    neu(){
      this.$store.commit('changeshow')
      /*
      this.isCollapse = !this.isCollapse
      let isCollapse = this.isCollapse
      this.$emit('neu',isCollapse)*/
    },
    cancle(){
      this.$store.commit('closeshow')
    },
  },
};
</script>
<style scoped>
.el-row {
  width: 100%;
  display: flex;
  align-items: center;
}
.log {
  margin: 1.5vw;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.menu {
  margin: 1vw 0 0 2vw;
}
.el-menu--horizontal > .el-menu-item {
  height: 5vw;
}
.el-menu-item {
  font-weight: 900;
}

.menu-right-top > a {
  color: #db0518;
}
.menu-right-dottom {
  padding: 0.7vw 0 0 0;
}
.menu-right-dottom > img {
  width: 100%;
}
.nev {
  position: absolute;
  right: 1vw;
  top: auto;
}
.hover{
  font-weight: 500;
  font-size: 0.8rem;
}
</style>