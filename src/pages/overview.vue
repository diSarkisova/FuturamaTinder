<template>
  <div class="overview">
    <swiper
      :effect="'cards'"
      :grabCursor="true"
      :modules="modules"
      class="mySwiper"
      :spaceBetween="50"
      :slidesPerView="1"
      :centeredSlides="true"
      :cardsEffect="{ rotate: 10, slideShadows: true }"
      :speed="500"
      :touchRatio="1"
      :scrollbar="{
        hide: false,
      }"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="'Image ' + index" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { EffectCards, Scrollbar } from "swiper/modules";

const modules = [EffectCards, Scrollbar];

// Получаем доступ к Vuex store
const store = useStore();

async function dispatchCharacters() {
  console.log("Проверка функция dispatchCharacters");
  await store.dispatch("fetchItems");
}

// Загружаем данные из API при монтировании компонента
onMounted(() => {
  try {
    dispatchCharacters();
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
});

// Используем геттер для получения изображений
const images = computed(() => store.getters["getImages"]);
</script>
<style scoped>
.mySwiper {
  width: 100%; /* Устанавливаем ширину слайдера */
  height: 460px; /* Устанавливаем высоту слайдера */
}

.swiper-slide {
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

swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
}

.overview {
  width: 100%; /* Задаем ширину для компонента */
  max-width: 800px; /* Максимальная ширина слайдера */
  margin: 0 auto; /* Центрируем контейнер */
  overflow: hidden; /* Скрываем все, что выходит за рамки */
  position: relative;
}

/* Эффект для смены цвета фона карточек */
.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
}
</style>
