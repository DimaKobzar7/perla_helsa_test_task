<template>
  <button class="btn btn--success" @click="setCartTrigger">{{ btnText }}</button>
</template>

<script setup>
const props = defineProps(['currentPrice']);

const { setCartTrigger } = inject('store');

let btnText = ref('До кошика');

onMounted(() => {
  if (window.innerWidth < 768) {
    btnText.value += ' - ' + props.currentPrice;
  }
});
</script>
