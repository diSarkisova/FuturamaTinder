<template>
  <div class="favorites">
    <h2>Favorite partners</h2>
    <div class="favorite__grid-container">
      <div
        v-for="(fav, index) in favorites"
        :key="index"
        class="favorite__grid-wrapper"
      >
        <div>
          <img
            :src="fav.image"
            :alt="'Favorite image ' + index"
            class="favorite__image"
          />
          <p>{{ fav.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const favorites = computed(() => store.getters["getFavorites"]); // Получаем все избранные элементы
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
</style>
