<template>
  <div class="cap">
    <img class="cap__icon" src="../assets/svg/drugs.svg" />
    <!-- на 768 текст меняется -->
    <p class="cap__text">Безкоштовна доставка від 1800 грн</p>
    <img class="cap__icon" src="../assets/svg/drugs.svg" />
  </div>
</template>

<style>
/* поменяй название */
.cap {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 33px;
  padding: 10px 0;
  background-color: #99afff;
}

.cap__text {
  margin: 0 13px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  text-align: center;

  color: #ffffff;
}

@media (min-width: 1300px) {
  .cap__text {
    font-size: 20px;
    line-height: 1.2;
    /* identical to box height, or 120% */

    color: #ffffff;
  }
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
