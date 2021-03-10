<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse">
    <el-menu-item index="1">选项1</el-menu-item>
      <el-menu-item index="2">选项2</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name:'navside',
  props:["isCollapse"],
  data(){
    return{
      show:false,
    }
  },
  created(){
    
  },
  watch:{
    isCollapse(data){
      this.show = data
    }
  }
}
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200;
    min-height: 400px;
  }
</style>