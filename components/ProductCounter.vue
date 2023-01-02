<template>
  <div class="counter">
    <button class="counter__btn" @click="minus">
      <img src="../assets/svg/minus.svg" alt="" />
    </button>
    <input class="counter__number" type="text" :value="count" @input="inputChange" />
    <button class="counter__btn" @click="plus">
      <img src="../assets/svg/plus.svg" alt="" />
    </button>
  </div>
</template>

<script setup>
const { count, plus, minus, inputChange } = inject('store');
</script>
