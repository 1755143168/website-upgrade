<template>
  <div class="illustration">
    <!--<img src="../assets/image/01.gif" alt="">-->
    <el-tabs
      v-model="activeName"
      type="card"
      tab-position="bottom"
      stretch="true"
    >
      <el-tab-pane label="产品定制化服务" name="first"><img src="../assets/image/01.gif" alt=""></el-tab-pane>
      <el-tab-pane label="实效数字运营" name="second"><img src="../assets/image/02.gif" alt=""></el-tab-pane>
      <el-tab-pane label="年框品牌服务" name="third"><img src="../assets/image/03.gif" alt=""></el-tab-pane>
      <el-tab-pane label="互联网+解决方案" name="fourth"><img src="../assets/image/04.gif" alt=""></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: "swiper",
  data() {
    return {
      activeName: 'first',
      maskcontent: [
        "产品定制化服务",
        "实效数字运营",
        "年框品牌服务",
        "互联网+解决方案",
      ],
      newIndex: 0,
    };
  },
  methods: {
    tabClick(index) {
      console.log(index);
    },
  },
};
</script>
<style scoped>
.illustration {
  position: relative;
}
.illustration > img {
  width: 100%;
  height: 100%;
}
.mask {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 7vw;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
.mask-children {
  width: 25%;
  height: 100%;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
}
</style>