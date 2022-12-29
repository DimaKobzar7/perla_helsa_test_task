<!-- надо менять название так как компонент не уникален -->
<template>
  <!-- возмможно придется просто взять класс бутстрапа и его переделать -->
  <button class="btn btn--success">До кошика</button>
</template>

<!-- <style>
.btn {
  padding: 16px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;

  color: #ffffff;

  text-align: center;

  border-radius: 40px;

  outline: none;

  border: none;
}

.btn--success {
  background-color: #69c522;
}
</style> -->

<style lang="scss">
.btn {
  padding: 16px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;

  color: #ffffff;

  text-align: center;

  border-radius: 40px;

  outline: none;

  border: none;

  &--success {
    background-color: #69c522;
  }
}
</style>
