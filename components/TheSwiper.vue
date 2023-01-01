<!-- <script setup>
// import { Swiper, SwiperSlide } from 'swiper/vue';

// // Import Swiper styles
// import 'swiper/css';
// import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
</script> -->

<template>
  <!-- это типо кастомных элементов для навигации но я не знаю как ими управлять -->
  <!-- поэтому просто navigation позволяет свайперу самому сделать стрелки с навигацией и они как дивы сами появятся -->
  <!-- :navigation="{
      prevEl: prev,
      nextEl: next,
    }" -->
  <!-- :space-between="50" -->
  <swiper
    :slides-per-view="1"
    :space-between="100"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :navigation="{
      prevEl: prev,
      nextEl: next,
    }"
    :modules="modules"
  >
    <swiper-slide>
      <img src="../assets/img/slide1.png" alt="slide1" />
      <!-- сайт с иконками https://www.reshot.com/free-svg-icons/item/stick-head-right-P9BVQKNYFR/ -->
      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m14.707 12.707-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z" style="fill: #1c1b1e" /></svg> -->
      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293A1 1 0 0 1 14 17z" style="fill: #1c1b1e" /></svg> -->
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/slide2.png" alt="slide2" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/slide3.png" alt="slide3" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/slide4.png" alt="slide4" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/slide5.png" alt="slide5" />
    </swiper-slide>
    <div ref="prev" class="swiper-button-prev">
      <svg class="d-xxl-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293A1 1 0 0 1 14 17z" style="fill: #1c1b1e" /></svg>
    </div>
    <div ref="next" class="swiper-button-next">
      <svg class="d-xxl-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m14.707 12.707-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z" style="fill: #1c1b1e" /></svg>
    </div>
  </swiper>
  <!-- при перезагрузке все равно появляються стандартные синие кнопки хоть и на секунду -->
  <!-- <div ref="prev" class="swiper-button-prev">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m14.707 12.707-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z" style="fill: #1c1b1e" /></svg>
  </div>
  <div ref="next" class="swiper-button-next">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293A1 1 0 0 1 14 17z" style="fill: #1c1b1e" /></svg>
  </div> -->
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/css';
// import 'swiper/css/navigation';
// и без этого работает
// import 'swiper/scss';
// import 'swiper/scss/navigation';
import { Navigation } from 'swiper';

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
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [Navigation],
      //   кнопки есть но они не нажимаються
      prev,
      next,
      //   это сам добавил
      onSwiper,
      onSlideChange,
    };
    // return {
    //   onSwiper,
    //   onSlideChange,
    // };
  },
};
</script>

<!-- а тут стрелки работают -->
<!-- <template>
  <swiper
    :navigation="{
      prevEl: prev,
      nextEl: next,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
  <div ref="prev" class="swiper-button-prev">prev</div>
  <div ref="next" class="swiper-button-next">next</div>
</template>
<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [Navigation],
      prev,
      next,
    };
  },
};
</script> -->

<!-- мой стартовый вариант -->
<!-- <script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
// import { ref } from 'vue';
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper';
</script>

<template>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :navigation="{
      prevEl: prev,
      nextEl: next,
    }"
    :modules="modules"
  >
    <swiper-slide>
      <img src="../assets/img/slide1.png" alt="slide1" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/slide2.png" alt="slide2" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/slide3.png" alt="slide3" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/slide4.png" alt="slide4" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/img/slide5.png" alt="slide5" />
    </swiper-slide>
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
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [Navigation],
      //   кнопки есть но они не нажимаються
      prev,
      next,
      //   это сам добавил
      onSwiper,
      onSlideChange,
    };
    // return {
    //   onSwiper,
    //   onSlideChange,
    // };
  },
};
</script> -->
