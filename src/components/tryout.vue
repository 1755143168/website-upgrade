<!--客户案例-->
<template>
  <div class="customercase">
    <img src="../assets/image/customercase.gif" alt="">
    <el-button>申请试用</el-button>
  </div>
</template>
<script>
export default {
  name:'customercase'
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
  height: 10vh;
  z-index: 0;
  bottom: 3vw;
  left: 50%;
  transform: translate(-50%);
  border: 0.1vw solid ;
  font-weight: 700;
}
</style>