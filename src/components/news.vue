<!--新闻页-->
<template>
  <div>
    <div class="search">
      <img class="icon" src="../assets/image/searchicon.gif" alt="" />
      <input placeholder="请输入新闻标题或新闻内容关键词" class="input" />
    </div>
    <div class="grid">
      <el-row :gutter="30">
        <el-col :span="6" v-for="(item,index) in list" :key="index">
          <el-card>
            <img class="content" :src="item" alt="">
            <img class="gridto" src="../assets/image/newto.gif" alt="">
            <img class="redto" src="../assets/image/redto.gif" alt="">
          </el-card>
        </el-col>
      </el-row>
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
    <brand-cycle></brand-cycle>
  </div>
</template>
<script>
import brandCycle from "./brandCycle.vue";
export default {
  name: "news",
  components: { brandCycle },
  data(){
    return{
      list:[
        require("../assets/image/new1.gif"),
        require("../assets/image/new2.gif"),
        require("../assets/image/new3.gif"),
        require("../assets/image/new4.gif"),
        require("../assets/image/new6.gif"),
        require("../assets/image/new7.gif"),
        require("../assets/image/new8.gif"),
        require("../assets/image/new9.gif"),
        require("../assets/image/new10.gif"),
        require("../assets/image/new11.gif"),
        require("../assets/image/new12.gif"),
      ]
    }
  }
};
</script>
<style scoped>
.icon {
  margin-right: 1vw;
}
.search {
  margin-top: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 0.15vw solid;
  width: 50vw;
  height: 2vw;
  font-size: 1.5rem;
}
.grid {
  padding: 4vw 8vw 0 8vw;
}
.el-card__body{
  padding: 0;
}
.content{
  width: 100%;
}
.el-col{
  margin-bottom: 2vw;
}

.el-card{
  position: relative;
}
.el-card:hover .gridto{
  display: none;
}
.el-card:hover .redto{
  display: inline;
}
.gridto{
  width: 12%;
  height: 2%;
  position: absolute;
  right: 5%;
  bottom: 6%;
}
.redto{
  width: 12%;
  height: 2%;
  position: absolute;
  right: 5%;
  bottom: 6%;
  display: none;
}
</style>