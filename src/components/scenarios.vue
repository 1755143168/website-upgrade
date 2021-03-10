/**应用场景 */
<template>
  <div class="scenarios">
    <img :src="img" alt="">
  </div>
</template>
<script>
export default {
  name:"scenarios",
  props:['img'],
  data() {
    return {
      img:this.img
    }
  },
  created(){
    console.log(this.img)
  }
}
</script>
<style scoped>

</style>