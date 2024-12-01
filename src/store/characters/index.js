import { createStore } from "vuex";

export default {
  state: {
    items: [], // Инициализация массива с персонажами
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items || []; // Обновляем состояние персонажей
    },
  },
  actions: {
    async fetchItems({ commit }) {
      try {
        const response = await fetch('https://api.sampleapis.com/futurama/characters');
        const data = await response.json();

        commit('SET_ITEMS',  data ); // Обновляем состояние с полученными данными
        console.log('data',data)
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    },
  },
  getters: {
    // Получаем изображения для каждого персонажа
    getImages(state) {
      const mappedImage = state.items.map(item => item.images.main || '')
      return mappedImage
    },
  },
};
