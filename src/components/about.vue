<template>
  <div class="about">
    <el-row>
      <el-col :span="16" class="news">
        <div class="title">
          <img src="../assets/image/new_title.gif" alt="" />
        </div>
        <a class="more">
          <span>查看更多></span>
        </a>
        <el-row class="card">
          <el-col :span="8" v-for="(item, index) in aboutlist" :key="index">
            <el-card class="newscard">
              <img class="content" :src="item.img" alt="" />
              <img class="to" src="../assets/image/to.gif" alt="" />
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" class="about">
        <div class="about_title">
          <img src="../assets/image/about.gif" alt="" />
        </div>
        <el-row class="card">
          <el-col :span="16" class="aboutcol">
            <el-row :gutter="10">
              <el-col
                :span="12"
                class="aboutcard"
                v-for="(item, index) in certificateList"
                :key="index"
              >
                <el-card>
                  <img class="certificate" :src="item.img" alt="" />
                </el-card>
              </el-col>
            </el-row>
            <img class="dowload" src="../assets/image/dowload.gif" alt="">
            <el-menu :default-active="aboutactiveIndex" class="el-menu-demo" mode="horizontal" @select="abouthandleSelect" background-color="	#F5F5F5" active-text-color="#DE0515">
              <el-row>
              <el-col :span="8">
              <el-menu-item index="basicLaw">基本法</el-menu-item>
              </el-col>
              <el-col :span="8">
              <el-menu-item index="companyCulture">企业文化</el-menu-item>
              </el-col>
              <el-col :span="8">
              <el-menu-item index="recruitment">招聘职位</el-menu-item>
              </el-col>
              </el-row>
            </el-menu>
          </el-col>
          <el-col :span="8">
            
          </el-col>
        </el-row>
      </el-col>
    </el-row>
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
      certificateList: [
        { img: require("../assets/image/huawei.gif") },
        { img: require("../assets/image/ali.gif") },
      ],
    };
  },
  methods: {
    handleSelect() {},
  },
};
</script>
<style scoped>
.news {
  padding: 3vw 5vw 10vw 8vw;
  display: flex;
  flex-direction: column;
}
.about {
  display: flex;
  padding: 3vw 3vw 0 0;
  flex-direction: column;
}
.title > img {
  float: left;
}
.about_title > img {
  float: left;
}
.more {
  height: 1.5vw;
  padding: 0 1vw 0 0;
}
.more > span {
  float: right;
  font-size: 1.1rem;
}
.card {
  display: flex;
  flex-direction: row;
}
.newscard {
  padding: 0.6vw;
}
.aboutcol {
  margin: 2vw 0.7vw 0.5vw 0;
}
.aboutcard{
  padding: 0 0vw 1vw 0;
}
.certificate {
  width: 100%;
}
.dowload{
  width: 100%;
}
.to {
  width: 15%;
  height: 20%;
  float: left;
  display: none;
}
.content {
  width: 100%;
}
/**悬停阴影 */
.newscard:hover {
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  border-bottom: 0.3vw solid crimson;
}
/**要加空格 */
.newscard:hover .to {
  display: inline;
}
/**消去el-card的阴影 */
.newscard {
  box-shadow: none;
}
.el-menu.el-menu--horizontal{
  border: none;
}
</style>