<template>
  <div>
    <el-row>
      <el-col :span="content" id="content">
        <navheader @neu="neu"></navheader>
        <maincontent></maincontent>
        <page_bottom></page_bottom>
      </el-col>
      <el-col
        :span="side">
        <navside
          v-if="shownavside"
          :isCollapse="isCollapse"
        ></navside
      ></el-col>
    </el-row>
  </div>
</template>
<script>
import navheader from "./navheader.vue";
import navside from "./navside.vue";
import maincontent from "./maincontent.vue";
import page_bottom from './page-bottom.vue'
export default {
  name: "Main",
  components: { navheader, maincontent, navside, page_bottom},
  data() {
    return {
      isCollapse: false,
      shownavside: false, //侧边菜单显示
      side:0,//侧边栏大小
      content:24,//内容大小
    };
  },
  methods: {
    //弹窗菜单操作
    neu(data) {
      this.isCollapse = data;
      this.shownavside = data;
      console.log("按菜单", data);
      if(data==true){
        this.side=4;
        this.content=20;
      }else{
        this.side=0;
        this.content=24
      }
    },
  },
};
</script>
<style scoped>

</style>