<template>
  <main>
    <section>
      <div class="label">
        <div class="label__text">
          <img src="./assets/svg/drugs.svg" />
          <p class="header__text">Безкоштовна досавка від 1800 грн</p>
          <img src="./assets/svg/drugs.svg" />
        </div>
      </div>
      <div class="container">
        <!-- <NuxtWelcome /> -->
        <TheHeader />
        <TheCard />
        <TheDelivery />
      </div>
    </section>
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
  margin: 0;
  /* font-family: Grtsk Giga;
  font-weight: 600; */
  overflow: hidden;
  /* не работает градиент */
  /* background: linear-gradient(180deg, rgba(200, 224, 149, 0.8) -5.17%, rgba(221, 238, 239, 0.8) 47.96%, rgba(255, 255, 255, 0.8) 100%); */
}

/* поменяй название */
.label {
  background-color: #99afff;
}

.label__text {
  font-size: 50px;
}
</style>
