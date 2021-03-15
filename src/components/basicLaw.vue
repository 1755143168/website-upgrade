<template>
  <div>
    <img class="basiclaw" style="width:100%" src="../assets/image/basicLaw.gif" alt="" />
    <img style="width:100%" class="mobile_basiclaw" src="../assets/image/mobile_basiclaw.gif" alt="">
    <div class="payroll">
      <img style="width:100%" src="../assets/image/payroll.gif" alt="">
    </div>
    <div class="text">
      <img src="../assets/image/text.gif" alt="">
    </div>
    <brand-cycle></brand-cycle>
  </div>
</template>
<script>
import brandCycle from "./brandCycle.vue";
export default {
  name: "basicLaw",
  components: { brandCycle },
};
</script>

<style scoped>
@media screen and (min-width:1024px) {
  .mobile_basiclaw{
    display: none;
  }
}
.payroll{
  margin-top: 4vw;
  padding: 0 7vw 0 7vw;
}
.text{
  height: 8vw;
  margin-top: 3vw;
  padding: 0 7vw 0 7vw;
  display: flex;
  left: 0;
}
.text>img{
  height: 100%;
  width: 28%;
}

@media screen and (max-width:768px) {
.basiclaw{
  display: none;
}
.text{
  height: 20vw;
}
.text>img{
  height: 100%;
  width: 80%;
}
}
</style>