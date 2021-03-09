<template>
  <div class="illustration">
    <img src="../assets/image/01.gif" alt="">
    <div class="mask">
      <div class="mask-children" v-for="item in maskcontent" :key="item">
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Main',
  data() {
    return {
      maskcontent:[
        "产品定制化服务",
        "实效数字运营",
        "年框品牌服务",
        "互联网+解决方案",
      ]
    }
  },
}
</script>
<style scoped>
.illustration{
  position: relative;
}
.illustration>img{
  width: 100%;
  height: 100%;
}
.mask{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 7vw;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
.mask-children{
  width: 25%;
  height: 100%;
  font-size: 2rem;
  font-weight: 600; 
  text-align: center; 
}
</style>