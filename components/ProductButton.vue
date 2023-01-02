<template>
  <button class="btn btn--success" @click="setCartTriger">{{ btnText }}</button>
</template>

<script setup>
const props = defineProps(["currentPrice"]);

const { setCartTriger } = inject("msgKey");

let btnText = ref("До кошика");

onMounted(() => {
  if (window.innerWidth < 768) {
    btnText.value += " - " + props.currentPrice;
  }
});
</script>
