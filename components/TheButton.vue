<!-- надо менять название так как компонент не уникален -->
<template>
  <!-- возмможно придется просто взять класс бутстрапа и его переделать -->
  <!-- <button class="btn btn--success">До кошика</button> -->
  <!-- <button class="btn btn--success">{{ window.innerWidth < 768 ? props.currentPrice : `До кошика -` + props.currentPrice }}</button> -->
  <button class="btn btn--success">{{ test }}</button>
</template>

<script setup>
const props = defineProps(['currentPrice']);

let test = ref('До кошика');

// console.log(props);
onMounted(() => {
  if (window.innerWidth < 768) {
    test.value += ' - ' + props.currentPrice;
    // console.log('768');
    // console.log(test);
  }
});
</script>
