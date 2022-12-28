<template>
  <section class="section">
    <div class="delivery">
      <div class="delivery__item">
        <img class="delivery__icon" src="../assets/svg/car.svg" alt="" />
        <p class="delivery__text">Безкоштовна доставка від 1800 грн</p>
      </div>
      <div class="delivery__item">
        <img class="delivery__icon" src="../assets/svg/box.svg" alt="" />
        <p class="delivery__text">Відправки в день оформлення замовлення до 16:00</p>
      </div>
      <div class="delivery__item">
        <img class="delivery__icon" src="../assets/svg/guarantee.svg" alt="" />
        <p class="delivery__text">Гарантія повернення грошових коштів</p>
      </div>
    </div>
  </section>
</template>

<style>
.delivery {
  display: flex;
  justify-content: space-between;

  padding: 20px 56px;

  background: linear-gradient(270deg, rgba(255, 255, 255, 0.81) 0%, rgba(255, 255, 255, 0.54) 100%);
  border-radius: 15px;
}

.delivery__item {
  display: flex;
}

.delivery__icon {
  margin-right: 24px;
}

.delivery__text {
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  color: #00284f;
}
</style>
