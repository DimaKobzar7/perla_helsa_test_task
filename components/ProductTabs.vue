<template>
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
</template>
