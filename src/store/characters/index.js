import { createStore } from "vuex";

export default ({
  state: {
    items: [], // Персонажи, загруженные с API
    favorites: [], // Список избранных персонажей
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items || []; // Обновляем список персонажей
    },
    ADD_TO_FAVORITES(state, item) {
      // Проверяем уникальность по id (если у объектов есть уникальные id)
      if (!state.favorites.some(fav => fav.id === item.id)) {
        state.favorites.push(item); // Добавляем персонажа в избранные
      }
    },
    REMOVE_FROM_FAVORITES(state, itemId) {
      state.favorites = state.favorites.filter(fav => fav.id !== itemId); // Удаляем персонажа из избранного
    },
    SET_FAVORITES(state, favorites) {
      state.favorites = favorites || []; // Загружаем избранных из localStorage
    },
  },
  actions: {
    async fetchItems({ commit }) {
      try {
        const response = await fetch('https://futuramaapi.com/api/characters');
        const data = await response.json();

        if (data && data.items) {
          commit('SET_ITEMS', data.items); // Обновляем список персонажей
        } else {
          console.error('Данные с API не содержат свойства "items".');
        }
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    },
    addToFavorites({ commit }, item) {
      commit('ADD_TO_FAVORITES', item); // Добавляем персонажа в избранное
      this.dispatch('saveFavoritesToLocalStorage'); // Сохраняем избранных в localStorage
    },
    removeFromFavorites({ commit }, itemId) {
      commit('REMOVE_FROM_FAVORITES', itemId); // Удаляем персонажа из избранного
      this.dispatch('saveFavoritesToLocalStorage'); // Сохраняем избранных в localStorage
    },
    saveFavoritesToLocalStorage({ state }) {
      localStorage.setItem('favorites', JSON.stringify(state.favorites)); // Сохраняем избранных в localStorage
    },
    loadFavoritesFromLocalStorage({ commit }) {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        commit('SET_FAVORITES', JSON.parse(savedFavorites)); // Загружаем избранных из localStorage
      }
    },
  },
  getters: {
    getItems(state) {
      return state.items; // Возвращаем все элементы из массива
    },
    getFavorites(state) {
      return state.favorites; // Возвращаем все избранные элементы
    },
  },
});
