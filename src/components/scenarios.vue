/**应用场景 */
<template>
  <div class="scenarios">
    <img class="pcimg" :src="pcimg" alt="">
    <img class="mobileimg" src="../assets/image/mobile/mobile-customized.gif" alt="">
  </div>
</template>
<script>
export default {
  name:"scenarios",
  props:['img'],
  data() {
    return {
      pcimg:this.img,
      mobileimg:"../assets/image/mobile/mobile-customized.gif"
    }
  },
  created(){
    console.log(this.img)
  }
}
</script>
<style scoped>
.pcimg .mobileimg{
  width: 100%;
  height: auto;
}
</style>