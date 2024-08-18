<template>
  <div class="default-layout">
    <header class="default-layout__header">
      <div class="default-layout__wrapper">
        <TheLogo />
        <router-link to="/">Futurama Tinder</router-link>
      </div>
      <div class="default-layout__container">
        <router-link to="/favorites">Favorites</router-link>
        <TheIcon />
      </div>
    </header>
    <main class="default-layout__main">
      Привет
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import TheLogo from "../components/TheLogo.vue";
import TheIcon from "../components/CirclePrewiev.vue";
</script>

<style lang="scss" scoped>
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
  }

  &__wrapper {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 20px;
    background-color: yellow;
  }

  &__container {
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 20px;
    background-color: yellow;
    gap: 10px;
  }

  &__main {
    width: 100%;
    background-color: #646cff;
  }
}
</style>
