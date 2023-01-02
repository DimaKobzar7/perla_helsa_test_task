<template>
  <main>
    <TheCap />

    <TheHeader :count="count" :cartAmount="cartAmount" />

    <TheProduct />

    <ProductDelivery />
  </main>
</template>

<script setup>
const count = ref(1);
let cartAmount = ref(0);

const plus = () => {
  if (count.value >= 99) {
    return count.value;
  }

  count.value++;
};

const minus = () => {
  if (count.value > 1) {
    count.value--;
  }
};

const inputChange = (event) => {
  if (event.target.value >= 100 || count.value >= 100 || event.data === ' ' || isNaN(event.target.value)) {
    event.target.value = count.value;
  }

  count.value = +event.target.value;
};

const setCartTrigger = () => {
  if (window.innerWidth < 768) {
    cartAmount.value++;
    count.value = cartAmount.value;
  } else {
    cartAmount.value = count.value;
  }
};

provide('store', {
  count,
  plus,
  minus,
  inputChange,
  setCartTrigger,
});
</script>
