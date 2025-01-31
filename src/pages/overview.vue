<template>
  <div class="overview">
    <div v-if="isLoading" class="loading-spinner">Loading...</div>
    <CardSwiper v-else :items="characters" ref="cardSwiper">
      <template #default="{ item, index }">
        <div class="overview__image-container">
          <img
            :src="item.image"
            :alt="'Image ' + index"
            class="overview__image"
            loading="lazy"
          />
          <div class="overview__text-container">
            <h2 class="overview__name">{{ item.name }}</h2>
            <p class="overview__description">
              species: {{ item.species || "Описание нашего персонажа" }}
            </p>
            <div class="overview__buttons-container">
              <button
                class="overview__button overview__button--close"
                @click="onclickDislike"
              >
                ✖
              </button>
              <button
                class="overview__button overview__button--like"
                @click="onclickLike(item)"
              >
                ❤
              </button>
            </div>
          </div>
        </div>
      </template>
    </CardSwiper>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import CardSwiper from "../ui/Swiper/Swiper.vue"; // Импортируем компонент

// Хранилище Vuex
const store = useStore();

// Состояния
const isLoading = ref(true);
const characters = computed(() => store.getters.getItems);
const cardSwiper = ref(null); // Ссылка на компонент CardSwiper

// Лайк
const onclickLike = async (character) => {
  try {
    await store.dispatch("addToFavorites", character);
  } catch (e) {
    console.error("Failed to add to favorites:", e);
  }
  cardSwiper.value?.swipeNext(); // Используем метод из CardSwiper
};

// Дизлайк
const onclickDislike = () => {
  cardSwiper.value?.swipeNext(); // Используем метод из CardSwiper
};

// Загрузка данных
onMounted(async () => {
  try {
    await store.dispatch("fetchItems");
    await store.dispatch("loadFavoritesFromLocalStorage");
  } catch (e) {
    console.log("Failed to load data:", e);
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped lang="scss">
.overview {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;

  &__image-container {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 18px;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__text-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
    color: white;
    font-size: 16px;
    text-align: center;
    border-radius: 0 0 18px 18px;
  }

  &__name {
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: 400;
  }

  &__description {
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: 300;
  }

  &__buttons-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0 10px 0;
    gap: 40px;
  }

  &__button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: transparent;
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;

    &:active {
      transform: scale(1.1);
      color: red;
    }

    &--close {
      border-color: red;
    }

    &--like {
      border-color: rgb(76, 214, 181);
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
}

.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 460px;
  color: white;
  font-size: 18px;
  flex-direction: column;
  gap: 15px;

  &::after {
    content: "";
    display: inline-block;
    width: 35px;
    height: 35px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s linear infinite;
    margin-left: 10px;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
