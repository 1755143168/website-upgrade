<template>
  <div class="card">
    <div class="more">
      <img :src="card.title" alt="" />
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) of card.img" :key="index">
          <img :src="item" alt="" />
        </swiper-slide>
      </swiper>
    </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  components: { Swiper, SwiperSlide },
  name: "card",
  props: ["card_list"],
  data() {
    return {
      card: this.card_list,
      Index: 2,
      swiperOption: {
        slidesPerView: "4",
        spaceBetween: 80,
        initialSlide: 1,
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
  methods: {
    imgClose() {
      this.imgShow = false;
    },
  },
  created() {
    console.log(this.card_list);
  },
};
</script>
<style scoped>
.card {
  margin: 1vw 1vw 0 1vw; /**上，右，下，左 */
  position: relative;
}
.more{
  padding: 0 8% 0 8%;
}
.more>img{
  width: 100%;
}
.swiper-button-prev{
  width: 5vw;
  height: 5vw;
  background-image: url(../assets/image/left.gif);
  background-repeat:no-repeat;
  position: absolute;
  top: 16vw;
  content: none;
}
.swiper-button-prev:after,/**取消原来的箭头 */
.swiper-button-next:after,
.swiper-button-next{
  width: 5vw;
  height: 5vw;
  background-image: url(../assets/image/right.gif);
  background-repeat:no-repeat;
  position: absolute;
  top: 16vw;
  content: none;
}

</style>