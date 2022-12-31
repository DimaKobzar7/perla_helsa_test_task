<!-- the из названия наверное надо убрать так как это не еденичный компонент-->
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

            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">ОПИС</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">КОРИСТЬ</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">ІНГРЕДІЄНТИ</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">СПОСІБ ЗАСТОСУВАННЯ</button>
              </li>
            </ul>
            <div class="tab-content mb-5" id="myTabContent">
              <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                Комплекс EPA + DHA кислот і натуральних вітамінів А & D3 для здоров'я твоєї шкіри, волосся, зору, сну, міцних кісток, суглобів та імунітету.
              </div>
              <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                <ul>
                  <li>Покращують стан шкіри: борються з акне та сприяють її регенерації</li>
                  <li>Зменшують випадіння волосся, стимулюють його ріст</li>
                  <li>Підіймають настрій та полегшують симптоми депресії</li>
                  <li>Зміцнюють імунітет: зменшують запальні процеси</li>
                  <li>Поліпшують роботу гормонів, серця і ЦНС</li>
                  <li>Зменшують болі в суглобах</li>
                  <li>Покращують метаболізм і роботу ШКТ</li>
                </ul>
              </div>
              <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                <!-- <table class="flexbe-table" style="-webkit-font-smoothing: antialiased; border-collapse: collapse; border-spacing: 0px; height: 1px; min-width: 100%; outline: none; table-layout: fixed; text-align: center">
                  <tbody>
                    <tr>
                      <td style="height: 58px; text-align: var(--elementTextAlign, inherit); width: var(--colWidth, auto)">
                        <p style="text-align: left"><strong>Склад:</strong></p>
                      </td>
                      <td style="height: 58px; text-align: var(--elementTextAlign, inherit); width: var(--colWidth, auto)">
                        <p style="text-align: left">100% риб'ячий жир з печінки тріски, желатин, гліцерин.</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="height: 27px; text-align: var(--elementTextAlign, inherit)">
                        <p style="text-align: left">
                          <strong><strong>EPA / DHA</strong></strong>
                        </p>
                      </td>
                      <td style="height: 27px; text-align: var(--elementTextAlign, inherit)">
                        <p style="text-align: left">170 мг / 205 мг</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="height: 27px; text-align: var(--elementTextAlign, inherit)">
                        <p style="text-align: left"><strong>Вітамін-А</strong></p>
                      </td>
                      <td style="height: 27px; text-align: var(--elementTextAlign, inherit)">
                        <p style="text-align: left">656 мкг 2187&nbsp;МО</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="height: 27px; text-align: var(--elementTextAlign, inherit)">
                        <p style="text-align: left"><strong>Вітамін-D3</strong></p>
                      </td>
                      <td style="height: 27px; text-align: var(--elementTextAlign, inherit)">
                        <p style="text-align: left">5.2 мкг 210&nbsp;МО</p>
                      </td>
                    </tr>
                  </tbody>
                </table> -->
                <table class="table">
                  <tbody>
                    <tr>
                      <th scope="row">Склад:</th>
                      <td></td>
                      <td></td>
                      <td>100% риб'ячий жир з печінки тріски, желатин, гліцерин</td>
                    </tr>
                    <tr>
                      <th scope="row">EPA / DHA</th>
                      <td></td>
                      <td></td>
                      <td>170 мг / 205 мг</td>
                    </tr>
                    <tr>
                      <th scope="row">Вітамін-А</th>
                      <td></td>
                      <td></td>
                      <td>656 мкг 2187 МО</td>
                    </tr>
                    <tr>
                      <th scope="row">Вітамін-D3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>5.2 мкг 210 МО</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                <p class="mb-4">Для профілактики, дорослим і дітям від 11 років – <span>4 капсули на день</span>, разом із їжею або одразу після. Бажано з іншими жирами для кращого засвоєння.</p>
                <p><span>Курс прийому:</span> 2-3 місяці, після чого зробити перерву 1-2 місяці або перейти на Омега-3 із Тунця.</p>
              </div>
            </div>
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
              <div class="d-flex justify-content-center d-md-none">
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
          <img src="../assets/img/slide1.png" alt="" />
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
