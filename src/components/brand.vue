<!--定制化服务页-->
<template>
  <scenarios :img="img"></scenarios>
</template>
<script>
import scenarios from './scenarios.vue'
export default {
  name:'brand',
  components:{scenarios},
  data() {
    return {
      img:require("../assets/image/brand.gif")
    }
  },
}
</script>
<style scoped>

</style>