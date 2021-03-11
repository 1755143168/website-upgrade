<template>
  <div v-show="imgShow" class="loading_box">
    <div class="loading_mask" ></div>
    <div class="loading_toast" @click="onImgMiss">
      <img src="../assets/image/certificate.gif" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgShow: {
      type: Boolean,
      default: false
    },
    imgUrl: {
      type: String,
      default: function() {
        return '';
      }
    }
  },
  data() {
    return {
      show: false,
      picUrl: ''
    };
  },
  created() {
    if (this.imgShow) {
      this.show = this.imgShow;
    }
    if (this.imgUrl) {
      this.picUrl = this.imgUrl;
    }
  },
  watch: {
    imgShow(val) {
      this.show = val;
    },
    imgUrl(val) {
      this.picUrl = val;
    }
    },
    methods: {
      onImgMiss(){
        this.$emit('closeimg')
      }
    }
};
</script>
 
<style scoped>
.loading_box .loading_mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5000;
}
.loading_box .loading_toast {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translateX(-50%) translateY(-50%);
  /* border-radius: 5px; */
  /*background: rgba(0, 0, 0, 0.8);*/
  text-align: center;
  padding: 25px 0;
  box-sizing: border-box;
  /*font-size: 18px;*/
  z-index: 5001;
}
.loading_box .loading_toast>img{
  width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>