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
  <div ref="prev" class="swiper-button-prev">prev</div>
  <div ref="next" class="swiper-button-next">next</div>
</template>

<script>
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
