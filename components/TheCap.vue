<template>
  <div class="cap">
    <img class="cap__icon" src="../assets/svg/drugs.svg" />
    <!-- на 768 текст меняется -->
    <p class="cap__text">Безкоштовна доставка від 1800 грн</p>
    <img class="cap__icon" src="../assets/svg/drugs.svg" />
    <!-- <label for="customRange1" class="form-label">Example range</label>
    <input type="range" class="form-range" id="customRange1" /> -->
    <!-- <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul> -->
    <!--props.change метод в консоле работает но не меняет свойствоили меняет но родитель не перерендывается и консоль не меняется -->
    <!-- работаетт!!!! если вывести элеменнт в родителе то будет перерендер и все гуд -->
    <!-- <button @click="props.change">Test</button> -->
  </div>
</template>

<script setup>
// const props = defineProps({
//   data: {
//     type: [Object],
//   }
// })
// const props = defineProps(['AirportData', 'changingProp', 'change']);
// const props2 = defineProps(['AirportData']);
// console.log('it`s cap', props);
// console.log(props.changingProp);
// console.log(props2);
// консоль лог активирует функцию и она вроде работает а простой вызов этого не делает
// но они работают когда вместе включены
// console.log(props.change());
// пока изменения из дочернего компонента в радительский не увенчались успехом
// console.log('before use callback', props);
// props.change();
// let changeTest = props.change();
// console.log(changeTest);
// changeTest();
// console.log('after use callback', props);
// просто так изменить нельзя оно говорит что оно для чтения только
// props.func = 3;
// props.func.value++;
// он работает
const testMethod = () => {
  console.log('it`s test method');
};

// опять ошибка что только для чтения
const testMethodWichChageProp = () => {
  props.changingProp++;
  console.log(props.changingProp);
};
</script>
<!--
 поменяй название
<style>

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
</style> -->
