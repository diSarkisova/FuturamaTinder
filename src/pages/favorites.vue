<template>
  <div class="favorites">
    <h2>Favorite partners</h2>
    <input
      v-model="filterTable"
      placeholder="Search favorites"
      class="favorite__input"
    />

    <div class="favorite__grid-container">
      <div
        v-for="(fav, index) in filteredFavorites"
        :key="index"
        class="favorite__grid-wrapper"
      >
        <div class="favorite__img-container">
          <img
            :src="fav.image"
            :alt="'Favorite image ' + index"
            class="favorite__image"
          />
          <TheButton :remove="() => removeFavorite(fav.id)" />
          <p>{{ fav.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import TheButton from "../ui/TheButton.vue";

const store = useStore();

const filterTable = ref("");

// Фильтрация избранных по имени
const filteredFavorites = computed(() => {
  return favorites.value.filter((favorite) =>
    favorite.name.toLowerCase().includes(filterTable.value.toLowerCase())
  );
});

// Геттер для получения избранных персонажей из Vuex
const favorites = computed(() => store.getters.getFavorites);

// Загружаем избранных из localStorage при монтировании компонента
onMounted(() => {
  store.dispatch("loadFavoritesFromLocalStorage");
});

// Функция для удаления избранного
const removeFavorite = (favoriteId) => {
  store.dispatch("removeFromFavorites", favoriteId); // Удалить из Vuex store
};
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.favorite__img-container {
  position: relative;
}

.favorite__image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.favorite__img-container .close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 5px;
  font-size: 18px;
  cursor: pointer;
}

.favorite__input {
  width: 100%;
}
</style>
