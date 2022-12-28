<template>
  <main>
    <div class="cap">
      <img class="cap__icon" src="./assets/svg/drugs.svg" />
      <p class="cap__text">Безкоштовна доставка від 1800 грн</p>
      <img class="cap__icon" src="./assets/svg/drugs.svg" />
    </div>

    <!-- <div class="container"> -->
    <!-- <NuxtWelcome /> -->
    <TheHeader />
    <TheCard />
    <TheDelivery />
    <!-- </div> -->
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}

/* оно должно само подтягиватся есть спец папка для этого */
/* есть и 2й шрифт Piazzolla */
@font-face {
  font-family: 'Onest', sans-serif;
  src: url('./assets/fonts/onest/TTF/OnestRegular1602-hint.ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'Onest', sans-serif;
  src: url('./assets/fonts/onest/TTF/OnestMedium1602-hint.ttf');
  font-weight: 500;
}

@font-face {
  font-family: 'Onest', sans-serif;
  src: url('./assets/fonts/onest/TTF/OnestBold1602-hint.ttf');
  font-weight: 700;
}

@font-face {
  font-family: 'Onest', sans-serif;
  src: url('./assets/fonts/onest/TTF/OnestExtraBold1602-hint.ttf');
  font-weight: 900;
}

.container {
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

body {
  /* display: flex;
  flex-direction: column; */
  margin: 0;
  /* font-family: Grtsk Giga;
  font-weight: 600; */
  overflow: hidden;
  /* не работает градиент */
  /* background: linear-gradient(180deg, rgba(200, 224, 149, 0.8) -5.17%, rgba(221, 238, 239, 0.8) 47.96%, rgba(255, 255, 255, 0.8) 100%); */
}

/* поменяй название */
.cap {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 0;
  background-color: #99afff;
}

.cap__text {
  margin: 0 13px;

  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  /* identical to box height, or 120% */

  text-align: center;

  color: #ffffff;
}

.cap__icon {
  width: 14px;
  height: 14px;
}

@media (min-width: 768px) {
  .cap__icon {
    width: 16px;
    height: 16px;
  }
}

@media (min-width: 1300px) {
  .cap__icon {
    width: 24px;
    height: 24px;
  }
}
</style>
