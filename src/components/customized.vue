<!--定制化服务页-->
<template>
  <scenarios :img="img"></scenarios>
</template>
<script>
import scenarios from './scenarios.vue'
export default {
  name:'customized',
  components:{scenarios},
  data() {
    return {
      img:require("../assets/image/customized.gif")
    }
  },
}
</script>
<style scoped>

</style>