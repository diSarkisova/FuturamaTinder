<template>
  <div id="app">
    <default-layout>
      <router-view />
    </default-layout>
  </div>
</template>

<script setup>
import DefaultLayout from "./layouts/default.vue";
// import { useStore } from "vuex";
// import { onMounted } from "vue";

// const store = useStore();
// console.log(store.state);

// onMounted(() => {
//   store.dispatch("fetchCharacters");
// });
</script>
