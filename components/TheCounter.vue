<template>
  <div class="counter">
    <button class="counter__btn">-</button>
    <div class="counter__number">1</div>
    <button class="counter__btn">+</button>
  </div>
</template>

<style>
.counter {
  display: flex;
}

.counter__btn {
  padding: 17px;
}
.counter__number {
  font-size: 28px;
  font-weight: 400;
  line-height: 1.25;

  /* text-align: center; */

  color: #00284f;
}
</style>
