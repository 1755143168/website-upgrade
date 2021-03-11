<template>
  <div class="banner">
    <div class="bannerchildren" v-for="(item,index) of tab" :key="index">
      <img :src="item.img" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name:'banner',
  props:["tabs"],
  data() {
    return {
      tab:this.tabs,
    }
  },
  created(){
  }
}
</script>
<style scoped>
.banner{
  background: url(../assets/image/bannerbg.gif);
  background-size: 100% 100%;
  width: 100%;
  display: flex;
  height: 36vw;
  flex-wrap: wrap;
}

.bannerchildren{
  width: 49.89%;
  height: 49.89%;
  z-index: 0;
  display: flex;
  align-items: center;
  border: 1px solid #EEEEEE;
}
.bannerchildren>img{
  margin: 2vw 0 2vw 6vw;
}

</style>