<template>
  <div class="default-layout">
    <header class="default-layout__header">
      <router-link class="default-layout__wrapper" to="/">
        <TheLogo class="default-layout-logo" />
        <h1 class="default-layout-title">FuturamaMatch</h1>
      </router-link>

      <div class="default-layout__container">
        <router-link to="/profile">
          <CirclePreview :icon="randomCharacterImage" />
        </router-link>
      </div>
    </header>

    <main class="default-layout__main">
      <RouterView />
    </main>

    <footer class="default-layout__footer">
      <router-link class="mdi mdi-fire" to="/"></router-link>
      <router-link to="/favorites" class="mdi mdi-heart"></router-link>
      <router-link to="/profile" class="mdi mdi-account"></router-link>
      <router-link to="/login" class="mdi mdi-login"></router-link>
      <router-link to="/register" class="mdi mdi-account-plus"></router-link>
    </footer>
  </div>
</template>

<script setup lang="ts">
import TheLogo from "../../components/TheLogo/TheLogo.vue";
import CirclePreview from "../../components/CirclePreview/CirclePreview.vue";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

const store = useStore();

const characters = computed(() => store.getters.getItems);

const randomCharacterImage = computed(() => {
  if (characters.value.length > 0) {
    const randomIndex = Math.floor(Math.random() * characters.value.length);
    return characters.value[randomIndex]?.image;
  }
  return "";
});
</script>

<script lang="ts">
export default {
  name: "DefaultLayout",
};
</script>

<style lang="scss" scoped>
.default-layout-title {
  font-size: 15px;
  font-weight: 400;

  @media only screen and (max-width: 750px) {
    display: none;
  }
}
.default-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/images/background.png");
  background-size: cover;
  z-index: 1;

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0 20px;
  }

  &__title {
    font-size: 15px;
    font-weight: 400;
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
    transition: color 0.3s ease;

    &:hover {
      color: red;
    }

    &.router-link-exact-active {
      color: red;
    }
  }
}
</style>
