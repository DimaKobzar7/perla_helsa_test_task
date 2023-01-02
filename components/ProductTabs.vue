<template>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" aria-selected="true">ОПИС</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="benefit-tab" data-bs-toggle="tab" data-bs-target="#benefit" type="button" aria-selected="false">КОРИСТЬ</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="ingredient-tab" data-bs-toggle="tab" data-bs-target="#ingredient" type="button" aria-selected="false">ІНГРЕДІЄНТИ</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="application-method-tab" data-bs-toggle="tab" data-bs-target="#application-method" type="button" aria-selected="false">СПОСІБ ЗАСТОСУВАННЯ</button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="description" tabindex="0">
      <p ref="truncation" class="nav-tabs-text">{{ truncationText }}</p>

      <span ref="showMore" class="nav-tabs-info" @click="showMoreText">Дізнатись більше</span>
    </div>
    <div class="tab-pane fade" id="benefit" tabindex="0">
      <ul class="nav-tabs-list">
        <li class="nav-tabs-list-item">Покращують стан шкіри: борються з акне та сприяють її регенерації</li>
        <li class="nav-tabs-list-item">Зменшують випадіння волосся, стимулюють його ріст</li>
        <li class="nav-tabs-list-item">Підіймають настрій та полегшують симптоми депресії</li>
        <li class="nav-tabs-list-item">Зміцнюють імунітет: зменшують запальні процеси</li>
        <li class="nav-tabs-list-item">Поліпшують роботу гормонів, серця і ЦНС</li>
        <li class="nav-tabs-list-item">Зменшують болі в суглобах</li>
        <li class="nav-tabs-list-item">Покращують метаболізм і роботу ШКТ</li>
      </ul>
    </div>
    <div class="tab-pane fade" id="ingredient" tabindex="0">
      <ProductTable />
    </div>
    <div class="tab-pane fade" id="application-method" tabindex="0">
      <p class="nav-tabs-text mb-4">
        Для профілактики, дорослим і дітям від 11 років –
        <strong class="fst-italic">4 капсули на день</strong>, разом із їжею або одразу після. Бажано з іншими жирами для кращого засвоєння.
      </p>
      <p class="nav-tabs-text"><strong>Курс прийому:</strong> 2-3 місяці, після чого зробити перерву 1-2 місяці або перейти на Омега-3 із Тунця.</p>
    </div>
  </div>
</template>

<script setup>
let showMore = ref(null);
let truncationText = ref("Комплекс EPA + DHA кислот і натуральних вітамінів А & D3 для здоров'я твоєї шкіри, волосся, зору, сну, міцних кісток, суглобів та імунітету.");
let baseText = truncationText.value;

const showMoreText = () => {
  truncationText.value = baseText;

  showMore.value.style.display = 'none';
};

onMounted(() => {
  if (window.innerWidth < 768) {
    truncationText.value = truncationText.value.length > 83 ? `${truncationText.value.slice(0, 81)}…` : truncationText;
  }
});
</script>
