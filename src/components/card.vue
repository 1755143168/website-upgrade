<template>
  <div class="card">
    <div class="more">
      <img :src="card.title" alt="" />
    </div>
    <div class="card_swiper">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item of card.img" :key="item.id">
          <img :src="item" alt="" />
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev">
      </div>
      <div class="swiper-button-next">
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  components: { Swiper, SwiperSlide },
  name: "card",
  props:["card_list"],
  data() {
    return {
      card:this.card_list,
      swiperOption: {
        slidesPerView: "4",
        spaceBetween: 15,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  created(){
    console.log(this.card_list)
  }
};
</script>
<style scoped>
.card {
  width: 100%;
  margin: 2vw 0 2vw 0; /**上，右，下，左 */
}
.card_swiper{
  position: relative;
}
.swiper-button-prev{
  background: url(../assets/image/left.gif) no-repeat;
  width: 65px;
  height: 65px;
  content: none;
  opacity: 1;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    left: 40px;
    right: auto;
}
.swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
    content: '';
}
.swiper-button-next{
  background: url(../assets/image/right.gif) no-repeat;
  width: 65px;
  height: 65px;
  content: none;
  opacity: 1;
}
.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    right: 40px;
    left: auto;
}
.swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
    content: ''; 
}
.swiper{
  padding: 3vw 7vw ;
}
.left {
  position: absolute;
  left: 1%;
}
.right {
  position: absolute;
  right: 1%;
}
</style>