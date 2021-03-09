<template>
  <div>
    <navheader></navheader>
    <maincontent></maincontent>
    <page_bottom></page_bottom>
  </div>
</template>
<script>
import navheader from "./navheader.vue";
import maincontent from "./maincontent.vue";
import page_bottom from "./footer.vue"
export default {
  name: "main",
  components: { navheader, maincontent,page_bottom},
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>