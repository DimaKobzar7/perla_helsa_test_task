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

<style>
* {
  box-sizing: border-box;
}

/* оно должно само подтягиватся есть спец папка для этого */
/* есть и 2й шрифт Piazzolla */
/* @font-face {
  font-family: Onest, sans-serif;
  src: url("./assets/fonts/onest/TTF/OnestRegular1602-hint.ttf");
  font-weight: 400;
}

@font-face {
  font-family: "Onest", sans-serif;
  src: url("./assets/fonts/onest/TTF/OnestMedium1602-hint.ttf");
  font-weight: 500;
}

@font-face {
  font-family: "Onest", sans-serif;
  src: url("./assets/fonts/onest/TTF/OnestBold1602-hint.ttf");
  font-weight: 700;
}

@font-face {
  font-family: "Onest", sans-serif;
  src: url("./assets/fonts/onest/TTF/OnestExtraBold1602-hint.ttf");
  font-weight: 900;
} */

/* @font-face {
  font-family: Onest;
  src: local("Onest"),
    url(~/assets/fonts/onest/TTF/OnestRegular1602-hint.ttf) format("truetype");
} */
.container {
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

body {
  /* display: flex;
  flex-direction: column; */
  margin: 0;
  /* font-family: "Onest", sans-serif; */
  font-family: Onest;
  font-weight: 400;
  min-height: 100vh;
  overflow: hidden;

  background: linear-gradient(180deg, rgba(200, 224, 149, 0.8) -5.17%, rgba(221, 238, 239, 0.8) 47.96%, rgba(255, 255, 255, 0.8) 100%);
}
</style>

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

<script setup>
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
</script>
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
