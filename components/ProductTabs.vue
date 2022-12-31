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
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
      <p ref="truncation" class="nav-tabs-text">Комплекс EPA + DHA кислот і натуральних вітамінів А & D3 для здоров'я твоєї шкіри, волосся, зору, сну, міцних кісток, суглобів та імунітету.</p>
    </div>
    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
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
    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
      <ProductTable />
    </div>
    <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
      <p class="nav-tabs-text mb-4">Для профілактики, дорослим і дітям від 11 років – <strong class="fst-italic">4 капсули на день</strong>, разом із їжею або одразу після. Бажано з іншими жирами для кращого засвоєння.</p>
      <p class="nav-tabs-text"><strong>Курс прийому:</strong> 2-3 місяці, після чого зробити перерву 1-2 місяці або перейти на Омега-3 із Тунця.</p>
    </div>
  </div>
</template>

<script setup>
let truncation = ref(null);

onMounted(() => {
  let truncationText = truncation.value.textContent;
  //   console.log(truncationText.length > 83);
  //   почему то переменную оно не воспринимает
  console.log(window.innerWidth);
  //   вроде норм но надо перезагружать чтобы условие работало так как произошел рендер и window.innerWidth не меняется
  // и оно может и не надо так как пользователь не должен менять разрешения своего экрана
  if (window.innerWidth < 768) {
    truncation.value.textContent = truncationText.length > 83 ? `${truncationText.slice(0, 81)}…` : truncationText;
  }
  //   truncation.value.textContent = truncationText.length > 83 ? `${truncationText.slice(0, 81)}…` : truncationText;
  // элемент DOM будет определён в ref после первоначальной отрисовки
  //   console.log(truncation.value.textContent);
  //   var str = truncation.value.textContent.slice(0, 83); //например макс 100 символов
  //   var a = str.split(' ');
  //   console.log(a);
  //   a.splice(a.length - 1, 1);
  //   str = a.join(' ');
  //   //   console.log(str);
  //   truncation = truncation.value.textContent = str + '...';
  //   return truncation.value.textContent.length > 83 ? `${truncation.value.textContent.slice(0, 83)}…` : truncation.value.textContent;
  //   console.log(truncation.value.textContent.length > 83 ? `${truncation.value.textContent.slice(0, 81)}…` : truncation.value.textContent);
  //   truncation.value.textContent = str + '...';
  //   truncation.value.textContent = truncation.value.textContent.length > 83 ? `${truncation.value.textContent.slice(0, 81)}…` : truncation.value.textContent;
  watch: {
    window.innerWidth;
  }
});

// var str = truncation.value.textContent.slice(0, 100); //например макс 100 символов
// var a = str.split(' ');
// a.splice(a.length - 1, 1);

// console.log(truncation.value);
// var text = 'много много текстов ...';
// var str = text.slice(0, 100); //например макс 100 символов
// var a = str.split(' ');
// a.splice(a.length - 1, 1);
// str = a.join(' ');
</script>
