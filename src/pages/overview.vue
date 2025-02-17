<template>
  <div class="overview">
    <div v-if="isLoading" class="loading-spinner">Loading...</div>
    <div v-else-if="characters.length === 0" class="no-items">
      No more items to show.
    </div>

    <div v-else>
      <CardSwiper :items="characters" ref="cardSwiper">
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
                  class="overview__button overview__button--dislike"
                  @click="onclickDislike(index)"
                >
                  ✖
                </button>
                <button
                  class="overview__button overview__button--like"
                  @click="onclickLike(item, index)"
                >
                  ❤
                </button>
              </div>
            </div>
          </div>
          <!-- Плашка "Nope" -->
          <div class="swipe-label swipe-label--nope" v-if="showNope">NOPE</div>
          <!-- Плашка "Like" -->
          <div class="swipe-label swipe-label--like" v-if="showLike">LIKE</div>
        </template>
      </CardSwiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import CardSwiper from "../ui/Swiper/Swiper.vue";

const store = useStore();

const isLoading = ref(true);
const characters = ref([]); 
const cardSwiper = ref(null); 
const showLike = ref(false); 
const showNope = ref(false); 

onMounted(async () => {
  try {
    await store.dispatch("fetchItems");
    await store.dispatch("loadFavoritesFromLocalStorage");
    // Инициализируем characters данными из хранилища
    characters.value = [...store.getters.getItems];
  } catch (e) {
    console.log("Failed to load data:", e);
  } finally {
    isLoading.value = false;
  }
});

const onclickLike = async (character, index) => {
  showLike.value = true;
  setTimeout(() => {
    showLike.value = false;
  }, 1000);

  try {
    await store.dispatch("addToFavorites", character);
  } catch (e) {
    console.error("Failed to add to favorites:", e);
  }
  removeCharacter(index);
  cardSwiper.value?.swipeNext();
};

const onclickDislike = (index) => {
  showNope.value = true;
  setTimeout(() => {
    showNope.value = false;
  }, 1000);

  removeCharacter(index);
  cardSwiper.value?.swipeNext();
};

const removeCharacter = (index) => {
  characters.value.splice(index, 1); // Удаляем элемент по индексу
  cardSwiper.value?.swipeNext();
};
</script>
<style scoped lang="scss">
.swipe-label {
  position: absolute;
  top: 20px;
  font-size: 32px;
  font-weight: bold;
  color: rgb(var(--white));
  padding: 10px 20px;
  border: 3px solid;
  border-radius: 5px;
  z-index: 100;
  opacity: 0;
  animation: fadeIn 0.3s ease-in-out forwards;

  &--like {
    right: 20px;
    border-color: rgb(var(--overwiview-swipe-like));
    background-color: rgba(var(--overwiview-swipe-like), 0.7);
  }

  &--nope {
    left: 20px;
    border-color: rgb(var(--overwiview-swipe-dislike));
    background-color: rgba(var(--overwiview-swipe-dislike), 0.7);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

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
      rgba(var(--black), 0) 0%,
      rgba(var(--black), 0.8) 100%
    );
    color: rgb(var(--white));
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
    border: 3px solid;
    background-color: transparent;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;

    &--dislike {
      border-color: rgb(var(--overwiview-dislike-btn));
      color: rgb(var(--overwiview-dislike-btn));
    }

    &--like {
      border-color: rgb(var(--overwiview-like-btn));
      color: rgb(var(--overwiview-like-btn));
    }

    &:active {
      transform: scale(1.1);
      color: rgb(var(--white));
    }

    &:hover {
      background-color: rgba(var(--white), 0.2);
    }
  }
}

.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 460px;
  color: rgb(var(--white));
  font-size: 18px;
  flex-direction: column;
  gap: 15px;

  &::after {
    content: "";
    display: inline-block;
    width: 35px;
    height: 35px;
    border: 3px solid rgba(var(--loading-border), 0.3);
    border-radius: 50%;
    border-top-color: rgb(var(--white));
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
