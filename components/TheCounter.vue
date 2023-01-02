<template>
  <div class="counter">
    <button class="counter__btn" @click="minus">
      <img src="../assets/svg/minus.svg" alt="" />
    </button>
    <!-- <div class="counter__number">{{ props.count }}</div> -->
    <!-- <div class="counter__number">{{ props.count }}</div> -->
    <!-- @input="props.inputChange" -->
    <!-- версия с прокидыванием пропсов везде -->
    <!-- <input class="counter__number" type="text" :value="props.count" @input="props.inputChange" /> -->
    <!-- странно почему тут count.value не понадобился а просто count проканал -->
    <input class="counter__number" type="text" :value="count" @input="inputChange" />
    <!-- <div class="counter__number">{{ count }}</div> -->
    <button class="counter__btn" @click="plus">
      <img src="../assets/svg/plus.svg" alt="" />
    </button>
  </div>
</template>

<script setup>
const { count, plus, minus, inputChange } = inject('msgKey');

// console.log(count);
// console.log(count.value);

// рабочая куча пропсная версия
// const props = defineProps(['count', 'plus', 'minus', 'inputChange']);

// let num = props.count;

// console.log('num test', num);

// console.log('it`s Counter', props);
// console.log(props.inputChange);

// ниже работало локально в этом компоненте
// const count = ref(1);

// if (count < 0) {
//   count = 0;
// }

// const plus = () => count.value++;

// норм ли такое делать или можно как то одним методом и использовать предедущий стейт как в реакте
// const minus = () => {
//   // условие работает но ничего не происходит
//   if (count.value > 1) {
//     // console.log('gg');
//     // count.value = 0;
//     count.value--;
//   }
//   //   console.log('gg');
//   //   console.log(count);
//   //   count.value--;
// };

// console.log(inject(['message2']));
// это работает!!
// const { msg, updateMsg } = inject('msgKey');
</script>

<!-- <script>
export default {
  inject: ['message'],
  created() {
    console.log(this.message, 'from app to counter'); // injected value
  },
};
</script> -->

<!-- <style>
.counter {
  display: flex;
  align-items: center;
}

.counter__btn {
  padding: 17px;
}
.counter__number {
  display: flex;
  justify-content: center;
  align-items: center;
  /* фикс высоту с шириной потом падингами поправь */
  height: 46px;
  width: 46px;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.25;


  background: rgba(255, 255, 255, 0.7);
  border-radius: 7px;

  color: #00284f;
}
</style> -->
