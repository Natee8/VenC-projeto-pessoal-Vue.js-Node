<template>
  <div class="container">
    <img class="center-image" src="/assets/about/bg.svg" alt="background" />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;

  background-image: url("/assets/about/backgroundBg.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* imagem centralizada */
.center-image {
  max-width: 100;
  max-height: 100%;
  object-fit: contain;
}
</style>
