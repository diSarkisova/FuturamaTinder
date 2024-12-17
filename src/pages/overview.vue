<template>
  <div class="overview">
    <swiper
      :loop="true"
      :effect="'cards'"
      :grabCursor="true"
      :modules="modules"
      class="overview__swiper"
      :spaceBetween="50"
      :slidesPerView="1"
      :centeredSlides="true"
      :cardsEffect="{ rotate: 10, slideShadows: true }"
      :speed="500"
      :touchRatio="1"
      :scrollbar="{ hide: false }"
    >
      <swiper-slide
        v-for="(character, index) in characters"
        :key="index"
        class="overview__swiper-slide"
      >
        <div class="overview__image-container">
          <img
            :src="character.image"
            :alt="'Image ' + index"
            class="overview__image"
          />
          <div class="overview__text-container">
            <h2 class="overview__name">{{ character.name }}</h2>
            <p class="overview__description">
              species: {{ character.species || "Описание нашего персонажа" }}
            </p>
            <div class="overview__buttons-container">
              <button
                class="overview__button overview__button--close"
                @click="goToNextSlide"
              >
                ✖
              </button>
              <button
                class="overview__button overview__button--like"
                @click="onclickLike(character)"
              >
                ❤
              </button>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { EffectCards, Scrollbar } from "swiper/modules";

const modules = [EffectCards, Scrollbar];

// Получаем доступ к Vuex store
const store = useStore();

// Используем геттер для получения списка персонажей
const characters = computed(() => store.getters.getItems); // Получаем все элементы

// Функция для добавления персонажа в избранное
function onclickLike(character) {
  store.dispatch("addToFavorites", character); // Добавляем персонажа в избранное
}

onMounted(() => {
  store.dispatch("fetchItems"); // Загружаем персонажей из API
  store.dispatch("loadFavoritesFromLocalStorage"); // Загружаем избранных из localStorage
});
</script>

<script lang="ts">
export default {
  name: "Overview",
};
</script>

<style lang="scss" scoped>
.overview {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;

  &__swiper {
    width: 100%;
    height: 460px;
    position: relative;
  }

  &__swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

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
  }

  &__description {
    font-size: 16px;
    margin-bottom: 20px;
  }

  &__buttons-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0 10px 0;
    gap: 40px;
  }

  &__button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: transparent;
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease; /* Плавный переход для всех свойств */

    &:active {
      transform: scale(1.1); /* Увеличение кнопки при клике */
      color: red;
    }

    &--close {
      border-color: red;
    }

    &--like {
      border-color: rgb(76, 214, 181);
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.2); /* Легкое затемнение фона */
    }
  }
}
</style>
