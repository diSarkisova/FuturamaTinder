<template>
  <div class="overview">
    <div v-if="isLoading" class="loading-spinner">Loading...</div>
    <swiper
      v-else
      ref="swiperRef"
      :loop="true"
      :effect="'cards'"
      :grabCursor="true"
      :modules="modules"
      class="overview__swiper"
      :spaceBetween="50"
      :slidesPerView="1"
      :centeredSlides="true"
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
            loading="lazy"
          />
          <div class="overview__text-container">
            <h2 class="overview__name">{{ character.name }}</h2>
            <p class="overview__description">
              species: {{ character.species || "Описание нашего персонажа" }}
            </p>
            <div class="overview__buttons-container">
              <button
                class="overview__button overview__button--close"
                @click="nextSlide"
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
import { computed, ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { EffectCards, Scrollbar } from "swiper/modules";

// Модули Swiper
const modules = [EffectCards, Scrollbar];

// Хранилище Vuex
const store = useStore();

// Ссылка на Swiper
const swiperRef = ref<typeof Swiper | null>(null);

// Состояния
const isLoading = ref(true);
const error = ref<string | null>(null);

// Получаем персонажей из хранилища
const characters = computed(() => store.getters.getItems);

// Добавление в избранное
async function onclickLike(character: any) {
  try {
    await store.dispatch("addToFavorites", character);
    nextSlide();
  } catch (err) {
    console.error("Failed to add to favorites:", err);
    error.value = "Failed to add to favorites. Please try again.";
  }
}

// Переход к следующему слайду
function nextSlide() {
  if (swiperRef.value?.swiper && characters.value.length > 0) {
    swiperRef.value.swiper.slideNext();
  } else {
    console.error("Swiper is not initialized yet or no characters available.");
    error.value = "No characters available or Swiper failed to initialize.";
  }
}

// Обновление Swiper при изменении данных
watch(characters, (newVal) => {
  if (newVal.length > 0 && swiperRef.value?.swiper) {
    swiperRef.value.swiper.update();
  } else {
    // console.error("No characters available.");
    error.value = "No characters available.";
  }
});

// Загрузка данных при монтировании
onMounted(async () => {
  try {
    await store.dispatch("fetchItems");
    await store.dispatch("loadFavoritesFromLocalStorage");
  } catch (err) {
    console.error("Failed to load data:", err);
    error.value = "Failed to load data. Please try again later.";
  } finally {
    isLoading.value = false;
  }

  setTimeout(() => {
    if (swiperRef.value?.swiper) {
      console.log("Swiper initialized successfully.");
      console.log("Swiper instance:", swiperRef.value.swiper);
    } else {
      error.value = "Swiper failed to initialize. Please refresh the page.";
    }
  }, 1000);
});
</script>

<script lang="ts">
export default {
  name: "Overview",
};
</script>

<style lang="scss" scoped>
.overview__swiper {
  width: 100%;
  height: 460px;
  position: relative;

  // Добавьте это, чтобы убедиться, что Swiper корректно отображает слайды
  .swiper-slide {
    width: 100%;
    height: 100%;
  }
}

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

.overview__button {
  &:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
}

.loading-spinner,
.error-message {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 460px;
  color: white;
  font-size: 18px;
}

.loading-spinner {
  &::after {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
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
