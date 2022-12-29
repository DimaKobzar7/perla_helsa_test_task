<!-- the из названия наверное надо убрать так как это не еденичный компонент-->
<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <h1 class="card__title">
          Омега-3 <span class="card__subtitle">Тріска</span>
        </h1>
        <div class="card__label">з вітамінами А і D3</div>
        <!-- тут должны быть табы -->
        <div class="card__info">
          <img class="card__icon" src="../assets/svg/drug-green.svg" alt="" />
          <!-- может тут все надо поместить в 1 тег -->
          <div class="card__inner">
            <h5 class="card__instruction card__instruction--title">
              В упаковці:
            </h5>
            <p class="card__instruction card__instruction--standard">
              120 капсул по 500 мг
            </p>
            <p class="card__instruction card__instruction--disabled">
              1 місяць прийому
            </p>
          </div>
          <div class="card__price">
            <span class="card__old-price">963 ₴</span>
            <span class="card__current-price">489 ₴</span>
          </div>
        </div>
        <TheCounter />
        <TheButton />
      </div>
    </div>
  </section>
</template>

<style>
@font-face {
  font-family: "Onest", sans-serif;
  src: url("./assets/fonts/onest/TTF/OnestRegular1602-hint.ttf");
  font-weight: 400;
}

@font-face {
  font-family: "Onest", sans-serif;
  src: url("./assets/fonts/onest/TTF/OnestMedium1602-hint.ttf");
  font-weight: 500;
}

@font-face {
  font-family: "Onest", sans-serif;
  src: url("./assets/fonts/onest/TTF/OnestBold1602-hint.ttf");
  font-weight: 700;
}

@font-face {
  font-family: "Onest", sans-serif;
  src: url("./assets/fonts/onest/TTF/OnestExtraBold1602-hint.ttf");
  font-weight: 900;
}

.card__title {
  /* font-family: "Onest", sans-serif; */
  font-weight: 700;
  font-size: 40px;
  line-height: 51px;

  color: #00284f;
}

.card__subtitle {
  font-weight: 300;
  /* font-size: 40px;
  line-height: 51px;

  color: #00284f; */
}

.card__label {
  padding: 8px 0;

  font-size: 22px;
  font-weight: 500;
  line-height: 1;

  text-align: center;

  color: #00284f;

  background: #ffffff;
  border-radius: 50px;
}
.card__info {
  display: flex;
}

.card__icon {
  margin-right: 32px;
}

.card__instruction {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.28;

  color: #00284f;
}

.card__instruction--standard {
  font-weight: 500;
}

.card__instruction--disabled {
  opacity: 0.4;
}

.card__price {
  /* возможно эта обертка не нужна если в колонки удастся посадить */
}

.card__old-price {
  font-size: 28px;
  font-weight: 900;
  line-height: 36px;

  color: rgba(0, 40, 79, 0.3);

  text-align: center;

  letter-spacing: -0.03em;
}

.card__current-price {
  font-size: 40px;
  font-weight: 700;
  line-height: 51px;

  color: #00284f;
}
</style>

<script setup></script>
