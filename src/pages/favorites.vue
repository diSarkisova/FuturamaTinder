<template>
  <div class="favorites">
    <h2 class="favorite__name">Favorite partners</h2>
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
          <p class="favorite__description">{{ fav.name }}</p>
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

.favorite__input {
  width: 100%;
  max-width: 500px;
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid #3a55ac;
  border-radius: 50px;
  outline: none;
  background: linear-gradient(
    45deg,
    rgba(92, 107, 192, 0.5),
    rgba(255, 255, 255, 0.2)
  );
  color: black;
  transition: all 0.3s ease;
}

.favorite__input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.favorite__input:focus {
  border-color: #5c6bc0; /* Цвет при фокусе */
  background: linear-gradient(
    45deg,
    rgba(92, 107, 192, 0.7),
    rgba(255, 255, 255, 0.4)
  ); /* Интенсивный градиент при фокусе */
  box-shadow: 0 0 8px rgba(92, 107, 192, 0.4); /* Легкая тень */
}

.favorite__input:focus::placeholder {
  color: rgba(92, 107, 192, 1); /* Цвет плейсхолдера при фокусе */
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

.favorite__name {
  color: white;
}

.favorite__description {
  color: white;
}
</style>
