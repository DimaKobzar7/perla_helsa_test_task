<template>
  <div class="counter">
    <button class="counter__btn" @click="minus">-</button>
    <div class="counter__number">{{ count }}</div>
    <button class="counter__btn" @click="plus">+</button>
  </div>
</template>

<script setup>
const count = ref(0);

// if (count < 0) {
//   count = 0;
// }

const plus = () => count.value++;

// норм ли такое делать или можно как то одним методом и использовать предедущий стейт как в реакте
const minus = () => {
  // условие работает но ничего не происходит
  if (count.value > 0) {
    // console.log('gg');
    // count.value = 0;
    count.value--;
  }
  //   console.log('gg');
  //   console.log(count);
  //   count.value--;
};
</script>

<!-- <style>
.counter {
  display: flex;
  align-items: center;
}

.counter__btn {
  padding: 17px;
}
.counter__number {
  display: flex;
  justify-content: center;
  align-items: center;
  /* фикс высоту с шириной потом падингами поправь */
  height: 46px;
  width: 46px;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.25;


  background: rgba(255, 255, 255, 0.7);
  border-radius: 7px;

  color: #00284f;
}
</style> -->
