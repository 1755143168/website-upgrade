<template>
  <div class="banner">
    <div class="bannerchildren" v-for="(item,index) of list" :key="index">
      <img :src="item.img" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name:'banner',
  data() {
    return {
      list:[
        {img:require("../assets/image/banner01.gif")},
        {img:require("../assets/image/banner02.gif")},
        {img:require("../assets/image/banner03.gif")},
        {img:require("../assets/image/banner04.gif")},
      ]
    }
  },
}
</script>
<style scoped>
.banner{
  background: url(../assets/image/bannerbg.gif);
  display: flex;
  flex-wrap: wrap;
}
.bannerchildren{
  width: 50%;
  height: 50%;
  z-index: 0;
}

</style>