<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 order-xxl-0 order-1">
          <div class="product">
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
              <div class="product__price">
                <span class="product__old-price">963 ₴</span>
                <span class="product__current-price">{{ currentPrice }}</span>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-md-5 col-xxl-4">
                <ProductCounter />
              </div>
              <div class="col-md-7 col-xxl-8">
                <ProductButton :currentPrice="currentPrice" />
              </div>
              <div class="product__hide-content">
                <img class="product__icon" src="../assets/svg/drug-green.svg" alt="" />
                <div>
                  <h5 class="product__instruction mb-1">В упаковці:</h5>
                  <p class="product__instruction product__instruction--standard mb-1">120 капсул по 500 мг</p>
                  <p class="product__instruction product__instruction--disabled">1 місяць прийому</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-6">
          <ProductSwiper />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const currentPrice = '489 ₴';
</script>
