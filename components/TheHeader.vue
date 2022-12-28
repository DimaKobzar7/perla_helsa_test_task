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
          <img class="header__burger-menu" src="../assets/svg/burger-menu.svg" />
          <img src="../assets/svg/search.svg" />
        </div>

        <img src="../assets/svg/logo.svg" />

        <div class="header__icon-group">
          <!-- тут нужно тип для телефона загнать типо мейл ту -->
          <a href=""><img src="../assets/svg/phone.svg" /></a>

          <img class="header__cart" src="../assets/svg/cart.svg" />
        </div>
      </div>

      <nav class="header__bottom">
        <a class="header__link" href="#">Омега-3</a>
        <a class="header__link" href="#">Вітаміни</a>
        <a class="header__link" href="#">Добавки</a>
        <a class="header__link" href="#">Доставка</a>
        <a class="header__link" href="#">Про нас</a>
      </nav>
    </div>
  </div>
</template>

<!-- из другой папки пока стили не тянет -->
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

.header__burger-menu {
  margin-right: 40px;
}

.header__cart {
  margin-left: 40px;
}

.header__bottom {
  display: none;
  /* align-items: center;
  justify-content: center;
  gap: 40px; */
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
