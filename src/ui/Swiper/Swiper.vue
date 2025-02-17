<template>
  <swiper
    ref="swiperRef"
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :effect="'cards'"
    :grab-cursor="true"
    @swiper="onSwiper"
    class="card-swiper"
  >
    <swiper-slide
      v-for="(item, index) in items"
      :key="index"
      class="card-swiper__slide"
    >
      <slot :item="item" :index="index"></slot>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { EffectCards } from "swiper/modules";

const modules = [EffectCards];

const swiperRef = ref(null);

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

const swipeNext = () => {
  if (swiperRef.value?.swiper) {
    swiperRef.value.slideNext();
  }
};

defineProps({
  items: {
    type: Array,
    required: true,
  },
});

defineExpose({
  swipeNext,
});
</script>

<style scoped lang="scss">
.card-swiper {
  width: 100%;
  height: 460px;
  position: relative;

  &__slide {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: rgb(var(--white));
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
}
</style>
