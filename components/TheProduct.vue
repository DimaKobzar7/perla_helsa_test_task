<!-- the из названия наверное надо убрать так как это не еденичный компонент-->
<!-- <script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
</script> -->
<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 order-xxl-0 order-1">
          <div class="product">
            <!-- <div class="row align-items-center">
              <div class="col-6 col-xxl-6">
                <h1 class="product__title">Омега-3 <span class="product__subtitle">Тріска</span></h1>
              </div>
              <div class="col-5 col-xxl-6 ps-0">
                <div class="product__badge">з вітамінами А і D3</div>
              </div>
            </div> -->
            <div class="product__inner">
              <h1 class="product__title">Омега-3 <span class="product__subtitle">Тріска</span></h1>

              <div class="product__badge">з вітамінами А і D3</div>
            </div>
            <ProductTabs />
            <div class="product__info">
              <div class="d-none d-md-flex">
                <img class="product__icon" src="../assets/svg/drug-green.svg" alt="" />
                <div>
                  <h5 class="product__instruction mb-1">В упаковці:</h5>
                  <p class="product__instruction product__instruction--standard mb-1">120 капсул по 500 мг</p>
                  <p class="product__instruction product__instruction--disabled">1 місяць прийому</p>
                </div>
              </div>
              <!-- надо проверять отсутствие этого элемента на мобиле и передавать пропс тру в кнопку и там отображать число -->
              <div class="product__price">
                <span class="product__old-price">963 ₴</span>
                <span class="product__current-price">489 ₴</span>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-md-5 col-xxl-4">
                <TheCounter />
              </div>
              <div class="col-md-7 col-xxl-8">
                <TheButton />
              </div>
              <div class="d-flex justify-content-center d-md-none product__mt-3">
                <img class="product__icon" src="../assets/svg/drug-green.svg" alt="" />
                <div>
                  <h5 class="product__instruction mb-1">В упаковці:</h5>
                  <p class="product__instruction product__instruction--standard mb-1">120 капсул по 500 мг</p>
                  <p class="product__instruction product__instruction--disabled">1 місяць прийому</p>
                </div>
              </div>
            </div>
            <!-- <div class="product__info">
              <div class="row align-items-center">
                <div class="col-6">
                  <div class="product__icon-wrap">
                    <img class="product__icon" src="../assets/svg/drug-green.svg" alt="" />
                    <div>
                      <h5 class="product__instruction mb-1">В упаковці:</h5>
                      <p class="product__instruction product__instruction--standard mb-1">120 капсул по 500 мг</p>
                      <p class="product__instruction product__instruction--disabled">1 місяць прийому</p>
                    </div>
                  </div>
                </div>
                <div class="col-5 offset-1 d-md-flex justify-content-end">
                  <div class="product__price">
                    <span class="product__old-price">963 ₴</span>
                    <span class="product__current-price">489 ₴</span>
                  </div>
                </div>
                <div class="col-4">
                  <TheCounter />
                </div>
                <div class="col-8">
                  <TheButton />
                </div>
              </div>
            </div> -->
          </div>
        </div>
        <div class="col-xxl-6">
          <!-- <img src="../assets/img/slide1.png" alt="" /> -->
          <TheSwiper />
          <!-- <LazyTheSwiper /> -->
        </div>
      </div>
    </div>
  </section>
</template>

<!-- <style>
/* @font-face {
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
} */

.card__title {
  /* font-family: "Onest", sans-serif; */
  font-weight: 700;
  font-size: 40px;
  line-height: 51px;

  color: #00284f;
}

.card__subtitle {
  font-family: Piazzolla;
  font-style: italic;
  font-weight: 500;
  /* font-weight: 300; */
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
</style> -->

<!-- <script setup></script> -->
