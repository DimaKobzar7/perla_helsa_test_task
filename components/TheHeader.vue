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
          <NuxtLink to="#">
            <img class="header__icon" src="../assets/svg/phone.svg" />
          </NuxtLink>

          <NuxtLink class="header__cart" to="#">
            <img class="header__icon" src="../assets/svg/cart.svg" />
            <div class="header__cart-counter">{{props.count}}</div>
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
const props = defineProps(['count']);

console.log('It`s Header', props);
</script>

<!-- из другой папки пока стили не тянет -->
<!-- из другой папки пока стили не тянет -->
<!-- так возможно scss можно поставить -->
<!-- <style lang="scss">
// ошибка просит его загрузить
.header {
  &__middle {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 46px;
  }
}

</style> -->
<!-- может так случилось потому что это отдельный тег со стилями который не знает про другие файлы или он подключается раньше миксинов -->
<!-- и это походу правда так как стили на бади были перечеркнуты наверное из за того что ори стоят выше чем стили из этого компонента -->
<!-- но если они стоят выше то и миксины должны быть видны -->
<!-- <style lang="scss">
// @import '../assets/custom/utils/mixins';
// @mixin onDesktop {
//   @media (min-width: 1300px) {
//     @content;
//   }
// }
// @mixin onTablet {
//   @media (min-width: 768px) {
//     @content;
//   }
// }
.header {
  &__middle {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 46px;
  }

  &__icon {
    width: 21px;
    height: 21px;

    // @include onTablet {
    //   width: 24px;
    //   height: 24px;
    // }
  }
}

// @media (min-width: 768px) {
//   .header__icon {
//     width: 24px;
//     height: 24px;
//   }
// }

.header__burger-menu {
  margin-right: 12px;
}

@media (min-width: 768px) {
  .header__burger-menu {
    margin-right: 33px;
  }
}

@media (min-width: 1300px) {
  .header__burger-menu {
    margin-right: 40px;
  }
}

.header__cart {
  position: relative;
  display: inline-block;
  margin-left: 12px;
}

@media (min-width: 768px) {
  .header__cart {
    margin-left: 33px;
  }
}

@media (min-width: 1300px) {
  .header__cart {
    margin-left: 40px;
  }
}

.header__bottom {
  display: none;
}

@media (min-width: 768px) {
  .header__bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 55px;

    margin-bottom: 64px;
  }
}

@media (min-width: 1300px) {
  .header__bottom {
    gap: 40px;
  }
}

.header__link {
  font-size: 23px;
  font-weight: 400;
  line-height: 29px;

  color: #1d1d1b;
  text-decoration: none;
}
</style> -->
