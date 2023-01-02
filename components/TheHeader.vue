<template>
  <div class="header">
    <div class="container">
      <div class="header__top">
        <div class="header__icon-group">
          <NuxtLink to="#">
            <img class="header__icon header__burger-menu" src="../assets/svg/burger-menu.svg" />
          </NuxtLink>

          <NuxtLink to="#">
            <img class="header__icon" src="../assets/svg/search.svg" />
          </NuxtLink>
        </div>

        <img class="header__logo" src="../assets/svg/logo.svg" />

        <div class="header__icon-group">
          <NuxtLink class="header__phone" to="#">
            <img class="header__icon" src="../assets/svg/phone.svg" />
          </NuxtLink>

          <NuxtLink class="header__cart" to="#">
            <img class="header__icon" src="../assets/svg/cart.svg" />
            <div class="header__cart-counter" v-if="cartAmount">
              {{ cartAmount }}
            </div>
          </NuxtLink>
        </div>
      </div>

      <nav class="header__bottom">
        <NuxtLink class="header__link" to="#">Омега-3</NuxtLink>
        <NuxtLink class="header__link" to="#">Вітаміни</NuxtLink>
        <NuxtLink class="header__link" to="#">Добавки</NuxtLink>
        <NuxtLink class="header__link" to="#">Доставка</NuxtLink>
        <NuxtLink class="header__link" to="#">Про нас</NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['cartAmount']);
</script>
