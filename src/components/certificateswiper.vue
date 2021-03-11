<template>
  <div class="card">
    <div class="more">
      <img :src="card.title" alt="" />
    </div>
    <div class="card_swiper">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) of card.img" :key="index">
          <img
            :src="item"
            :class="Index == index ? 'active' : ''"
            alt=""
          />
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
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
        slidesPerView: "5",
        centeredSlides: true, // 重点：让active slide居中
        spaceBetween: 60,
        initialSlide: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        on: {
          slideChangeTransitionEnd: function () {
            this.Index = this.activeIndex; //切换结束时，告诉我现在是第几个slide
          },
          
          init() {
            this.setTranslate(0);
          },
          transitionStart() {
            // 开始translate之前触发
            // 如果是第一张
            if (this.activeIndex == 0) {
              this.setTranslate(0); // 因为左边会空出一张图的距离，所以设置位移为0
            };
          },
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
  width: 100%;
  margin: 1vw 0 0 0; /**上，右，下，左 */
}
.card_swiper {
  position: relative;
}
.swiper-button-prev {
  background: url(../assets/image/left.gif) no-repeat;
  width: 65px;
  height: 65px;
  content: none;
  opacity: 1;
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  left: 40px;
  right: auto;
}
.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after {
  content: "";
}
.swiper-button-next {
  background: url(../assets/image/right.gif) no-repeat;
  width: 65px;
  height: 65px;
  content: none;
  opacity: 1;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  right: 40px;
  left: auto;
}
.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after {
  content: "";
}
.swiper {
  padding: 3vw 7vw;
}
.swiper-slide>img{
  box-shadow: 0 10px 10px 1px #A9A9A9 ;
}
.left {
  position: absolute;
  left: 1%;
}
.right {
  position: absolute;
  right: 1%;
}
.active {
  transform: scale(1.1); /**放大 */
  border-image: url(../assets/image/certificate-border.gif);
}
</style>