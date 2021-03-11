<template>
  <div class="illustration">
    <!--<img src="../assets/image/01.gif" alt="">-->
    <el-tabs
      v-model="activeName"
      type="card"
      tab-position="bottom"
      :stretch="true"
    >
      <el-tab-pane label="产品定制化服务" name="1"
        ><img src="../assets/image/01.gif" alt="" />
        <banner :tabs="tabs[0].img"></banner>
      </el-tab-pane>
      <el-tab-pane label="实效数字运营" name="2"
        ><img src="../assets/image/02.gif" alt="" />
        <banner :tabs="tabs[1].img"></banner></el-tab-pane
      >
      <el-tab-pane label="年框品牌服务" name="3"
        ><img src="../assets/image/03.gif" alt="" />
        <banner :tabs="tabs[2].img"></banner></el-tab-pane
      >
      <el-tab-pane label="互联网+解决方案" name="4"
        ><img src="../assets/image/04.gif" alt="" />
        <banner :tabs="tabs[3].img"></banner></el-tab-pane
      >
    </el-tabs>
  </div>
</template>
<script>
import banner from "./banner.vue";
export default {
  name: "swiper",
  components: { banner },
  data() {
    return {
      activeName: "1",
      maskcontent: [
        "产品定制化服务",
        "实效数字运营",
        "年框品牌服务",
        "互联网+解决方案",
      ],
      tabs: [
        {
          img:[
            { img: require("../assets/image/banner01.gif") },
            { img: require("../assets/image/banner02.gif") },
            { img: require("../assets/image/banner03.gif") },
            { img: require("../assets/image/banner04.gif") },
          ]
        },
        {
          img: [
            { img: require("../assets/image/banner05.gif") },
            { img: require("../assets/image/banner06.gif") },
            { img: require("../assets/image/banner07.gif") },
            { img: require("../assets/image/banner08.gif") },
          ],
        },
        {
          img: [
            { img: require("../assets/image/banner09.gif") },
            { img: require("../assets/image/banner10.gif") },
            { img: require("../assets/image/banner11.gif") },
            { img: require("../assets/image/banner12.gif") },
          ],
        },
        {
          img: [
            { img: require("../assets/image/banner13.gif") },
            { img: require("../assets/image/banner14.gif") },
            { img: require("../assets/image/banner15.gif") },
            { img: require("../assets/image/banner16.gif") },
          ],
        },
      ],
      newIndex: 0,
    };
  },
  methods: {
    tabClick(index) {
    },
  },
};
</script>
<style scoped>
img{
  display: block;/**解决底部留有空白 */
}
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