import { createStore } from "vuex";

export default {
  state: {
    items: [], // Персонажи, загруженные с API
    favorites: [], // Список избранных персонажей
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items || [];
    },
    ADD_TO_FAVORITES(state, item) {
      if (!state.favorites.includes(item)) {
        state.favorites.push(item); // Добавляем персонажа в избранные
      }
    },
  },
  actions: {
    async fetchItems({ commit }) {
      try {
        const response = await fetch('https://futuramaapi.com/api/characters');
        const data = await response.json();
        commit('SET_ITEMS', data.items); // Обновляем список персонажей
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    },
    addToFavorites({ commit }, item) {
      commit('ADD_TO_FAVORITES', item); // Добавляем персонажа в избранное
    },
  },
  getters: {
    getItems(state) {
      return state.items;
    },
    getImages(state) {
      return state.items.map(item => item.image);
    },
    getNames(state) {
      return state.items.map(item => item.name);
    },
    getFavorites(state) {
      return state.favorites;
    },
  },
};
