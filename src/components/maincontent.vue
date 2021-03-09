<template>
  <div class="main-content-container"> 
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'maincontent'
}
</script>

<style scoped>
  .main-content-container {
    height: 100%;
    width: 100%;
  }
    
</style>