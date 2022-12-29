<template>
  <div class="header">
    <div class="container">
      <!-- <div class="header__top">
      <img src="../assets/svg/drugs.svg" />
      <p class="header__text">Безкоштовна досавка від 1800 грн</p>
      <img src="../assets/svg/drugs.svg" />
    </div> -->
      <!-- чини название классов так как топ больше нет -->
      <div class="header__middle">
        <div class="header__icon-group">
          <!-- добавил чисто ради курсор поинтера или просто сделать стиль и туда его вкинуть -->
          <NuxtLink to="#">
            <img class="header__icon header__burger-menu" src="../assets/svg/burger-menu.svg" />
          </NuxtLink>

          <NuxtLink to="#">
            <img class="header__icon" src="../assets/svg/search.svg" />
          </NuxtLink>
        </div>

        <img src="../assets/svg/logo.svg" />

        <div class="header__icon-group">
          <!-- тут нужно тип для телефона загнать типо мейл ту -->
          <!-- и если его оставлять то надо поставить на ссылку размер и маржин -->
          <NuxtLink to="#">
            <img class="header__icon" src="../assets/svg/phone.svg" />
          </NuxtLink>

          <NuxtLink to="#">
            <img class="header__icon header__cart" src="../assets/svg/cart.svg" />
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
<style>
.header {
  /* background-color: #99afff; */
}

.header__text {
}

.header__middle {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 46px;
}

.header__icon {
  width: 21px;
  height: 21px;
}

@media (min-width: 768px) {
  .header__icon {
    width: 24px;
    height: 24px;
  }
}

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
    gap: 40px;

    margin-bottom: 64px;
  }
}

.header__link {
  font-size: 23px;
  font-weight: 400;
  line-height: 29px;

  color: #1d1d1b;
  text-decoration: none;
}
</style>
