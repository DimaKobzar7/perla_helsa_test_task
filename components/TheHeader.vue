<!-- и это не помагает -->
<!-- <script setup>
import "../assets/custom/utils/_mixins.scss";
</script> -->

<template>
  <div class="header">
    <div class="container">
      <!-- чини название классов так как топ больше нет -->
      <div class="header__top">
        <div class="header__icon-group">
          <!-- добавил чисто ради курсор поинтера или просто сделать стиль и туда его вкинуть -->
          <NuxtLink to="#">
            <img class="header__icon header__burger-menu" src="../assets/svg/burger-menu.svg" />
          </NuxtLink>

          <NuxtLink to="#">
            <img class="header__icon" src="../assets/svg/search.svg" />
          </NuxtLink>
        </div>

        <img class="header__logo" src="../assets/svg/logo.svg" />

        <div class="header__icon-group">
          <!-- тут нужно тип для телефона загнать типо мейл ту -->
          <!-- и если его оставлять то надо поставить на ссылку размер и маржин -->
          <NuxtLink class="header__phone" to="#">
            <img class="header__icon" src="../assets/svg/phone.svg" />
          </NuxtLink>

          <NuxtLink class="header__cart" to="#">
            <img class="header__icon" src="../assets/svg/cart.svg" />
            <!-- <div class="header__cart-counter">{{ props.count }}</div> -->
            <!-- <div class="header__cart-counter">{{ props.count < 2 ? startValue : props.count }}</div> -->
            <!-- <div class="header__cart-counter">{{ props.cartTriger ? props.count : 0 }}</div> -->
            <div class="header__cart-counter">{{ savedCount }}</div>
            <!-- <div class="header__cart-counter">{{ savedCount !== props.count ? 0 : props.count }}</div> -->
            <p>{{ props.cartTriger }}</p>
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
const props = defineProps(['count', 'cartTriger', 'savedCount']);
// console.log(props.cartTriger);
let startValue = ref(0);
let t2 = ref(2);

// console.log('It`s Header', props);
</script>
