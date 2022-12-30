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
    <TheCap />

    <!-- <div class="container"> -->
    <!-- <NuxtWelcome /> -->
    <TheHeader />
    <TheCard />
    <TheDelivery />
    <!-- </div> -->
  </main>
</template>

<!-- <style lang="scss" src="./assets/main.scss"></style> -->

<!-- <script src="@/bootstrap/dist/js/bootstrap.bundle.min.js"></script> -->

<!-- <style lang="scss">
// @import './assets/main.scss';
* {
  box-sizing: border-box;
}

.container {
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

body {
  margin: 0;
  font-family: Onest;
  font-weight: 400;
  min-height: 100vh;
  overflow: hidden;

  background: linear-gradient(180deg, rgba(200, 224, 149, 0.8) -5.17%, rgba(221, 238, 239, 0.8) 47.96%, rgba(255, 255, 255, 0.8) 100%);
}
</style> -->

<!-- <script setup>
import { Modal } from 'bootstrap';
const { $bootstrap } = useNuxtApp();
let modal;
onMounted(() => {
  modal = new $bootstrap.Modal(document.getElementById('modal-main'));
});
const toggle = () => {
  modal.toggle();
};
</script> -->

<!-- это работает -->
<!-- <script setup>
useHead({
  title: 'Perla Helsa',
  //   link: [
  //     {
  //       href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css',
  //       rel: 'stylesheet',
  //       integrity: 'sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65',
  //       crossorigin: 'anonymous',
  //     },
  //   ],
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js',
      integrity: 'sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V',
      crossorigin: 'anonymous',
    },
  ],
});
</script> -->
<!-- <script>
export default {
  //   head() {
  //     return {
  //       // не работает у вкладки имя не меняется
  //       title: 'Perla Helsa',
  //     };
  //   },

//   useHead() {
//     return {
//       title: 'Perla Helsa',
//       description: 'What a lovely page.',
//       link: [
//         {
//           href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css',
//           rel: 'stylesheet',
//           integrity: 'sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65',
//           crossorigin: 'anonymous',
//         },
//       ],
//     };
//   },
};
</script> -->
<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script> -->
