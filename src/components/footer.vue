<!--页底组件-->
<template>
  <div class="total">
    <div class="top">
      <img class="contact" src="../assets/image/contact.gif" alt="">
      <img class="map" src="../assets//image/map.gif" alt="" />
    </div>
    <div class="mid">
      <div class="floatMenu">
      <footerMenu></footerMenu>
      </div>
      <div class="OR">
        <div class="or">
          <img src="../assets/image/wx_or.gif" alt="" />
          <span>微信公众号</span>
        </div>
        <div class="or">
          <img src="../assets/image/xl_or.gif" alt="" />
          <span>新浪微博</span>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="bottom">
      <img src="../assets/image/botom.gif" alt="">
    </div>
    <div class="bottommobile">
      <el-row >
        <el-col :span="6"></el-col>
      </el-row>
    </div>
    <div class="mask"></div>
  </div>
</template>
<script>
import footerMenu from './footerMenu'
export default {
  name: "page_bottom",
  components: {footerMenu},
  data(){
    return{
      
    }
  }
};
</script>
<style scoped>
.total{
  margin: 0vw 0 0 0;
}
.contact{
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 0.7vw;
  box-shadow: 0px 0px 5px #A9A9A9;
}
.map{
  display: block;/**解决底部留有空白 */
}
.mid {
  position: relative;
  background-color: rgb(45, 45, 45);
  height: 20vw;
  color: #fff;
}
.floatMenu{
  position: absolute;
  top: 2vw;
  left: 4.5vw;
  width: 80%;
}
.OR {
  position: absolute;
  right: 10vw;
  top:4vw;
  width: 14vw;
  display: flex;
  justify-content: center;
  height: 11vw;
  text-align: center;
}
.or{
  margin: 0 2vw 0 2vw;
}
.line {
  height: 0.1vw;
  background-color: #808080;
}
.copyright {
  position: absolute;
  left: 10vw;
}
.icon {
  position: absolute;
  right: 10vw;
}
.icon > img {
  margin: 0 0.6vw 0 0.6vw; /*上右下左 */
}
</style>