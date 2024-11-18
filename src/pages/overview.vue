<template>
  <div class="overview">You may like them!</div>
</template>

<script setup></script>

<style scoped>
.overview {
  width: 100%;
}
</style>

<!--=================-->
<!--<template>-->
<!--  <div class="overview">-->
<!--    <h2>Swipe to find your match in this universe!</h2>-->
<!--    <div class="slider">-->
<!--      <div class="slider__wrapper">-->
<!--        <swiper-container-->
<!--          ref="mainSlider"-->
<!--          class="slider__main"-->
<!--          init="false"-->
<!--          @swiperslidechange="onSlideChange"-->
<!--        >-->
<!--          <swiper-slide v-for="id in imageIds" :key="id">-->
<!--            <img class="slider__img" :src="getImageUrl(id)" alt="" />-->
<!--          </swiper-slide>-->
<!--        </swiper-container>-->
<!--        <div class="slider__arrows">-->
<!--          <button-->
<!--            class="slider__arrow"-->
<!--            type="button"-->
<!--            @click="mainSlider.swiper.slidePrev()"-->
<!--          >-->
<!--            <svg-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--              fill="none"-->
<!--              width="20"-->
<!--              height="20"-->
<!--              viewBox="0 0 20 20"-->
<!--            >-->
<!--              <path stroke="currentColor" d="m13.5 17-7-7 7-7" />-->
<!--            </svg>-->
<!--          </button>-->
<!--          <button-->
<!--            class="slider__arrow"-->
<!--            type="button"-->
<!--            @click="mainSlider.swiper.slideNext()"-->
<!--          >-->
<!--            <svg-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--              fill="none"-->
<!--              width="20"-->
<!--              height="20"-->
<!--              viewBox="0 0 20 20"-->
<!--            >-->
<!--              <path stroke="currentColor" d="m6.5 3 7 7-7 7" />-->
<!--            </svg>-->
<!--          </button>-->
<!--        </div>-->
<!--        <div class="slider__pagination">-->
<!--          <div-->
<!--            class="slider__bullet"-->
<!--            :class="{ 'slider__bullet&#45;&#45;active': idx === activeSlide }"-->
<!--            :style="`left: ${-18 * activeSlide + 36}px`"-->
<!--            v-for="(_, idx) in imageIds.length"-->
<!--            :key="idx"-->
<!--          />-->
<!--        </div>-->
<!--      </div>-->
<!--      &lt;!&ndash;      <swiper-container ref="thumbsSlider" class="slider__thumbs" init="false">&ndash;&gt;-->
<!--      &lt;!&ndash;        <swiper-slide class="slider__thumb" v-for="id in imageIds" :key="id">&ndash;&gt;-->
<!--      &lt;!&ndash;          <img class="slider__img" :src="getImageUrl(id)" alt="" />&ndash;&gt;-->
<!--      &lt;!&ndash;        </swiper-slide>&ndash;&gt;-->
<!--      &lt;!&ndash;      </swiper-container>&ndash;&gt;-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--// import { useStore } from "vuex";-->
<!--import { ref, onMounted, computed } from "vue";-->
<!--import { register } from "https://esm.sh/swiper/element";-->
<!--import { Thumbs, FreeMode } from "https://esm.sh/swiper/modules";-->
<!--register();-->

<!--// const store = useStore();-->
<!--// const characterImages = ref([]);-->
<!--//-->
<!--// onMounted(() => {-->
<!--//   store.dispatch("fetchCharacterImages"); // Получаем изображения-->
<!--//   characterImages.value = store.getters.getCharacterImages; // Заполняем массив-->
<!--// });-->

<!--//slider-->
<!--const mainSlider = ref();-->
<!--const thumbsSlider = ref();-->
<!--const activeSlide = ref(0);-->

<!--const mainSliderParams = {-->
<!--  modules: [Thumbs],-->
<!--  rewind: true,-->
<!--  spaceBetween: 4,-->
<!--  speed: 500,-->
<!--  thumbs: { swiper: ".slider__thumbs" },-->
<!--};-->

<!--const thumbsSliderParams = {-->
<!--  modules: [FreeMode],-->
<!--  slidesPerView: 4,-->
<!--  spaceBetween: 4,-->
<!--  freeMode: true,-->
<!--  loop: true,-->
<!--  watchSlidesProgress: true,-->
<!--};-->

<!--onMounted(() => {-->
<!--  Object.assign(mainSlider.value, mainSliderParams);-->
<!--  mainSlider.value.initialize();-->

<!--  Object.assign(thumbsSlider.value, thumbsSliderParams);-->
<!--  thumbsSlider.value.initialize();-->
<!--});-->

<!--const imageIds = [-->
<!--  "1505845664900-f883fde76fb0",-->
<!--  "1483168527879-c66136b56105",-->
<!--  "1499678329028-101435549a4e",-->
<!--  "1483899528283-bc33678e9153",-->
<!--  "1484795819573-86ae049cb815",-->
<!--  "1475064042787-0209411c7765",-->
<!--  "1533408874882-397bf377a8c2",-->
<!--  "1652323854427-2b55c904c6a1",-->
<!--  "1473679408190-0693dd22fe6a",-->
<!--  "1681136268712-d409d55ced6c",-->
<!--];-->

<!--const getImageUrl = (id) =>-->
//
<!--  `https://images.unsplash.com/photo-${id}?w=1000&h=563&fit=crop`;-->
<!--const onSlideChange = () =>-->
<!--  (activeSlide.value = mainSlider.value.swiper.activeIndex);-->
<!--

</script>
-->
-->

<!--<style lang="scss">-->
<!--.slider {-->
<!--  width: min(1000px, 100%);-->
<!--  margin-inline: auto;-->

<!--  &__wrapper {-->
<!--    position: relative;-->
<!--  }-->

<!--  &__main {-->
<!--    margin-bottom: 4px;-->
<!--  }-->

<!--  &__arrows {-->
<!--    position: absolute;-->
<!--    inset: 24px;-->
<!--    z-index: 1;-->
<!--    display: flex;-->
<!--    align-items: center;-->
<!--    justify-content: space-between;-->
<!--  }-->

<!--  &__arrow {-->
<!--    display: grid;-->
<!--    place-content: center;-->
<!--    width: 40px;-->
<!--    aspect-ratio: 1;-->
<!--    background: #fff;-->
<!--    cursor: pointer;-->
<!--    border-radius: 4px;-->
<!--    border: none;-->
<!--  }-->

<!--  &__pagination {-->
<!--    position: absolute;-->
<!--    inset: auto 0 24px;-->
<!--    z-index: 1;-->
<!--    display: grid;-->
<!--    grid-auto-flow: column;-->
<!--    place-self: center;-->
<!--    gap: 8px;-->
<!--    width: 82px;-->
<!--    overflow: hidden;-->
<!--  }-->

<!--  &__bullet {-->
<!--    flex-shrink: 0;-->
<!--    position: relative;-->
<!--    width: 10px;-->
<!--    aspect-ratio: 1;-->
<!--    background: #fff;-->
<!--    border-radius: 50%;-->
<!--    transition: 0.25s;-->
<!--    transition-property: transform, background, left;-->
<!--    transform: scale(0.33);-->

<!--    &:has(+ .slider__bullet&#45;&#45;active) {-->
<!--      transform: scale(0.66);-->
<!--    }-->

<!--    &&#45;&#45;active {-->
<!--      transform: scale(1);-->
<!--      background: #017ffe;-->

<!--      & + * {-->
<!--        transform: scale(0.66);-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  &__thumb {-->
<!--    opacity: 0.3;-->
<!--    transition: opacity 0.25s;-->

<!--    &:hover {-->
<!--      opacity: 0.6;-->
<!--    }-->

<!--    &.swiper-slide-thumb-active {-->
<!--      opacity: 1;-->
<!--    }-->
<!--  }-->

<!--  &__img {-->
<!--    display: block;-->
<!--    width: 100%;-->
<!--    aspect-ratio: 16/9;-->
<!--    object-fit: cover;-->
<!--  }-->
<!--}-->
<!--</style>-->
