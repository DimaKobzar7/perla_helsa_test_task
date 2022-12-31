<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
</script>

<template>
  <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
    <swiper-slide> <img src="../assets/img/slide1.png" alt="" /></swiper-slide>
    <swiper-slide> <img src="../assets/img/slide2.png" alt="" /></swiper-slide>
    <swiper-slide> <img src="../assets/img/slide3.png" alt="" /></swiper-slide>
    <swiper-slide> <img src="../assets/img/slide4.png" alt="" /></swiper-slide>
    <swiper-slide> <img src="../assets/img/slide5.png" alt="" /></swiper-slide>
  </swiper>
</template>

<script>
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
