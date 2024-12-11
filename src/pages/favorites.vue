<template>
  <div class="favorites">
    <h2>Favorite partners</h2>
    <input  
    v-model="filterTable" 
    placeholder="Search favorites">
  </input>

    <div class="favorite__grid-container">
      <div
        v-for="(fav, index) in filteredFavorites"
        :key="index"
        class="favorite__grid-wrapper"
      >
        <div>
          <img
            :src="fav.image"
            :alt="'Favorite image ' + index"
            class="favorite__image"
          />
          <button class="favorite__close-btn">✖</button>
          <p>{{ fav.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

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
  store.dispatch("loadFavoritesFromLocalStorage"); // Загружаем избранных из localStorage
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
  grid-template-columns: repeat(3, 1fr); /* Три столбца */
  gap: 16px; /* Отступы между картинками */
  width: 100%;
}

.favorite__grid-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.favorite__image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px; /* Скругленные углы */
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  width: 30px;
  height: 30px;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.image-container:hover .close-button {
  display: flex; /* Показать крестик при наведении на контейнер */
}

.close-button:hover {
  background-color: red; /* Цвет фона крестика при наведении */
}
</style>
