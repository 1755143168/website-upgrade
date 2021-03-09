<template>
  <el-row :gutter="7">
    <el-col class="log" :span="3"><img src="../assets/image/log.gif" alt="" /></el-col>
    <!--导航菜单-->
    <el-col class="menu" :span="14">
      <!--导航菜单-->
      <el-menu
        :default-active="activeIndex"
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
        <el-menu-item index="5">互联网+解决方案</el-menu-item>
        <el-menu-item index="6">案例</el-menu-item>
        <el-menu-item index="7">新闻</el-menu-item>
        <el-menu-item index="8">人才</el-menu-item>
        <el-menu-item index="9">我们</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="1">
      <img src="../assets/image/earth.gif" alt="">
    </el-col>
    <el-col :span="3">
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
    <el-col class="nev" :span="1">
      <img src="../assets/image/neu.gif" alt="">
    </el-col>
  </el-row> 
</template>
<script>
export default {
  name:"navheader",
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect() {},
  }, 
}
</script>
<style scoped>
.el-row{
  width: 100%;
  display: flex;
  align-items: center;
}
.log{
  margin: 1.5vw;
}
.el-menu.el-menu--horizontal {
  border-bottom:none;
}
.menu{
  margin: 1.5vw 0 0 2vw;
}
.el-menu--horizontal>.el-menu-item {
  height: 5vw;
}
.el-menu-item{
  font-weight: 900;
}
.menu-right-top>a{
  color: #DB0518;
}
.menu-right-dottom{
  padding: 0.7vw 0 0 0;
}
.menu-right-dottom>img{
  width: 100%;
}
.nev{
  position: absolute;
  right: 1vw;
  top:auto
}
</style>