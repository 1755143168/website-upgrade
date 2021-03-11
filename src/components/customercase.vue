<!--客户案例组件-->
<template>
  <div class="customercase">
    <img :src="imgurl" alt="">
    <el-button>查看更多</el-button>
  </div>
</template>
<script>
export default {
  name:'customercase',
  props:['img'],
  data(){
    return{
      imgurl:this.img
    }
  },
}
</script>
<style scoped>
.customercase{
  position: relative;
}
img{
  display: block;/**解决底部留有空白 */
  z-index: -100;
}
.el-button{
  position: absolute;
  width: 10vw;
  height: 8vh;
  z-index: 0;
  bottom: 3vw;
  left: 50%;
  transform: translate(-50%);
  border: 0.1vw solid ;
  font-weight: 700;
}
</style>