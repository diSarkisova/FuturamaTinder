<template>
  <div class="favorites">
    <h2 class="favorites__name">Liked partners</h2>
    <input
      v-model="filterTable"
      placeholder="Search favorites"
      class="favorites__input"
    />

    <div v-if="filteredFavorites.length" class="favorites__grid-container">
      <div
        v-for="(fav, index) in filteredFavorites"
        :key="index"
        class="favorites__grid-wrapper"
      >
        <div class="favorites__img-container">
          <img
            :src="fav.image"
            :alt="'Favorite image ' + index"
            class="favorites__image"
          />
          <TheButton @remove="openModal(fav.id)" />
          <div class="favorites__text-overlay">
            <p class="favorites__description">{{ fav.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <p v-else>No favorites found.</p>

    <ui-dialog-modal v-if="showModal" @close="cancelRemove">
      <template #default>
        <p>Are you sure you want to remove this favorite?</p>
        <div class="modal-buttons">
          <button
            class="modal-button modal-button--confirm"
            @click="confirmRemove"
          >
            Yes
          </button>
          <button
            class="modal-button modal-button--cancel"
            @click="cancelRemove"
          >
            No
          </button>
        </div>
      </template>
    </ui-dialog-modal>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import TheButton from "../ui/TheButton.vue";
import UiDialogModal from "../ui/TheDialogModal/TheDialogModal.vue";

const store = useStore();
const filterTable = ref("");

// Состояние для показа модалки
const showModal = ref(false);
const favoriteIdToRemove = ref<string | null>(null); // Храним id того элемента, который хотим удалить

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

// Открытие модалки и передача ID элемента
const openModal = (id: string) => {
  favoriteIdToRemove.value = id; // Запоминаем ID для удаления
  showModal.value = true; // Открываем модалку
};

// Подтверждение удаления
const confirmRemove = () => {
  if (favoriteIdToRemove.value) {
    store.dispatch("removeFromFavorites", favoriteIdToRemove.value); // Удаляем из Vuex store
  }
  showModal.value = false; // Закрываем модалку
  favoriteIdToRemove.value = null; // Сбрасываем значение
};

// Отмена удаления
const cancelRemove = () => {
  showModal.value = false; // Закрываем модалку
  favoriteIdToRemove.value = null; // Сбрасываем значение
};
</script>

<script lang="ts">
export default {
  name: "Favorites",
};
</script>

<style scoped lang="scss">
.favorites {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 25px;

  &__grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    width: 100%;
  }

  &__grid-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  &__img-container {
    position: relative;
    width: 100%;
    height: 250px;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  &__text-overlay {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    border-radius: 0 0 8px 8px;
  }

  &__name {
    color: white;
  }

  &__description {
    color: white;
    font-size: 16px;
    font-weight: bold;
    font-weight: 300;
  }

  &__input {
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
    font-weight: 300;
  }

  &__input::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &__input:focus {
    border-color: #5c6bc0;
    background: linear-gradient(
      45deg,
      rgba(92, 107, 192, 0.7),
      rgba(255, 255, 255, 0.4)
    );
    box-shadow: 0 0 8px rgba(92, 107, 192, 0.4);
  }

  &__input:focus::placeholder {
    color: rgba(92, 107, 192, 1);
  }
}

.modal-buttons {
  display: flex;
  justify-content: center;
  gap: 31px;
  margin-top: 15px;
}

.modal-button {
  padding: 10px 50px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &--confirm {
    background-color: red;
    color: #fff;
  }

  &--cancel {
    background-color: #3c41a1;
    color: #fff;
  }
}
</style>
