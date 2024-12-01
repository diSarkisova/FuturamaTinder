<template>
  <div class="favorites">
    <h2>Favorite partners</h2>
    <ul class="favorite__grid-container">
      <li
        class="favorite__grid-wrapper"
        v-for="item in characters"
        :key="item.id"
      >
        <img
          :src="item.images.main"
          alt="Character Image"
          class="favorite__character-image"
        />
        {{ item.name }}
        <router-link
          class="favorite__character"
          :to="`/favorites/${item.id}`"
          >{{ item.id }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
// const favoritePartners = [
//   { id: 1, name: "Partner 1" },
//   { id: 2, name: "Partner 2" },
//   { id: 3, name: "Partner 3" },
//   { id: 4, name: "Partner 4" },
// ];

import { useStore } from "vuex";
import { ref, onMounted, computed } from "vue";
const store = useStore();
const characters = ref([]);

onMounted(() => {
  store.dispatch("fetchCharacters"); // Получаем изображения
  characters.value = store.getters.allCharacters; // Заполняем массив

  console.log("characters in favorites", characters);
});
</script>
<style scoped lang="scss">
.favorites {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 25px;
}
.favorite__grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
}

.favorite__grid-wrapper {
  background-color: lightblue;
}

.favorite__character {
  text-align: center;
}
</style>
