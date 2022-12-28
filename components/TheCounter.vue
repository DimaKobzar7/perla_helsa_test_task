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

  /* text-align: center; */
  background: rgba(255, 255, 255, 0.7);
  border-radius: 7px;

  color: #00284f;
}
</style>
