<template>
  <div class="default-layout">
    <header class="default-layout__header">
      <router-link class="default-layout__wrapper" to="/">
        <TheLogo />FuturamaMatch
      </router-link>

      <div class="default-layout__container">
        <router-link to="/profile">
          <circle-preview></circle-preview
        ></router-link>
      </div>
    </header>

    <main class="default-layout__main">
      <slot></slot>
    </main>
    <footer class="default-layout__footer">
      <router-link class="mdi mdi-fire" to="/"></router-link>
      <router-link to="/favorites" class="mdi mdi-heart"></router-link>
      <router-link to="/profile" class="mdi mdi-account"></router-link>
    </footer>
  </div>
</template>

<script setup>
import TheLogo from "../components/TheLogo.vue";
import circlePreview from "../components/circlePreview.vue";
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables/variables.scss";

.default-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/images/background.png");
  z-index: 1;

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0 20px;
  }

  &__wrapper {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100%;
    width: 100%;
    color: white;
  }

  &__container {
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100%;
    width: 100%;
    gap: 30px;
  }

  &__main {
    flex: 1;
    width: 100%;
    padding: 20px;
    overflow: auto;
  }

  &__footer {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }

  &__footer .mdi {
    font-size: 30px;
  }
}
</style>
