<template>
  <main>
    <!-- для роутера нужен один корнеаой элемент (тег) в который будут ставится другие теги  -->
    <!-- стоит ли делать роутер?? <NuxtPage /> -->
    <!-- data methods то все vue 2 в vue 3 делали через: -->
    <!-- <script>
      export default defineComponent({
        setup() {
            переменная
          const count = ref(0);

          ее метод (value то спец свойство где лежит значение)
          const incr = () => count.value++;

          return { count, incr };
        },
      });
    </script> -->
    <!-- это как строится логика в компонента в vue3 -->
    <!-- сейчас нужно делать <script setup></script>  -->

    <!-- как прокинуть пропсы? мне надо из этого компоненета перекинуть колбек в компонент карточки а из карточки в кнопку и потом все это поднять до этого компонента и кинуть в хедер  -->
    <!-- это была простая передача пропса -->
    <!-- двоеточие :func позволяет делать динамику и передавать переменные -->
    <!-- деструктуризация не работает -->
    <!-- она и не нужна можео просто значение передать как строку но : превратит его в переменную -->
    <TheCap AirportData="test" :changingProp="testFunc" :change="changeProp" />

    <!-- <div class="container"> -->
    <!-- <NuxtWelcome /> -->
    <!-- наверное как пропс оставлю покажу что я и просты пропсы знаю -->
    <TheHeader :count="count" />
    <TheProduct />
    <TheDelivery />
    <!-- </div> -->
  </main>
</template>

<!-- супер статья про передачу пропсов в нужный компонент https://habr.com/ru/post/668072/ -->
<!-- дока про provide и inject() оно как юз контекст в реакте https://vuejs.org/api/composition-api-dependency-injection.html#provide -->

<script setup>
// const msg = ref('Hello World!');
// const updateMsg = (newValue) => (msg.value = newValue);
// provide('msgKey', {
//   msg,
//   updateMsg,
// });

const testFunc = ref(0);
const count = ref(1);

// походу эти методы должны будут принимать значение велью
const plus = (event) => {
  console.log(event.target.value, count.value);

  if (count.value >= 99) {
    //   event.target.value = count.value;
    return count.value;
  }
  count.value++;
};

// норм ли такое делать или можно как то одним методом и использовать предедущий стейт как в реакте
const minus = () => {
  // условие работает но ничего не происходит
  if (count.value > 1) {
    count.value--;
  }
};

const inputChange = (event) => {
  //   вроде все ок но если часто на кучу кнопок нажимать то оно может в 0 слететь
  if (event.target.value >= 100 || count.value >= 100 || event.data === ' ' || isNaN(event.target.value)) {
    event.target.value = count.value;
    console.log('limit');
  }

  console.log(event.data, event.target.value);

  count.value = +event.target.value;
};

// const msg = ref('Hello World!');
// const updateMsg = (newValue) => (msg.value = newValue);
provide('msgKey', {
  count,
  plus,
  minus,
  inputChange,
});

// метод нажимается в длчернем компоненте но перерендер не происходит и изменение значения
const changeProp = () => {
  testFunc.value++;
  console.log('clicked');
};

// console.log('it`s App', testFunc.value);
</script>

<!-- <script>
export default {
  // работает и передает сразу в каунтер и при инджексен вызывается но в сетап я не могу пока правильно прописать provide
  provide: {
    message: 'hello!',
  },
};
</script> -->
