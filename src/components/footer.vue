<template>
  <div class="total">
    <div class="top">
      <img src="../assets//image/map.gif" alt="" />
    </div>
    <div class="mid">
      <div class="floatMenu">
      <floatMenu></floatMenu>
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
      <!--<img src="../assets/image/bottom.gif" alt="">-->
      <img class="copyright" src="../assets/image/copyright.gif" alt="" />
      <div class="icon">
        <!--分享我们-->
        <img class="shareus" src="../assets/image/shareus.gif" alt="" />
        <!--icon-->
        <img class="wx" src="../assets/image/wx.gif" alt="" />
        <img class="qq" src="../assets/image/qq.gif" alt="" />
        <img class="xl" src="../assets/image/xl.gif" alt="" />
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>
<script>
import floatMenu from './floatMenu'
export default {
  name: "page_bottom",
  components: {floatMenu},
};
</script>
<style scoped>
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
.bottom {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(45, 45, 45);
  height: 7vw;
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