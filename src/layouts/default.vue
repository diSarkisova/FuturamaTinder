<template>
  <div class="default-layout">
    <header class="default-layout__header">
      <router-link class="default-layout__wrapper" to="/">
        <TheLogo />Futurama Tinder
      </router-link>

      <div class="default-layout__container">
        <router-link to="/favorites">Favorites</router-link>
        <router-link to="/profile">
          <circle-preview icon=""></circle-preview
        ></router-link>
      </div>
    </header>

    <main class="default-layout__main">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import TheLogo from "../components/TheLogo.vue";
import CirclePreview from "../components/CirclePreview.vue";
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables/variables.scss";

.default-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &__header {
    display: flex;
    justify-content: space-between;
    position: sticky;
    height: 104px;
    left: 0;
    right: 0;
    top: 0;
    background: linear-gradient(to bottom right, $green-400, #caded0);
  }

  &__wrapper {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 20px;
  }

  &__container {
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 20px;
    gap: 30px;
  }

  &__main {
    width: 100%;
    background-color: #646cff;
    padding: 20px;
  }
}
</style>
