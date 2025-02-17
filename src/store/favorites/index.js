export default {
    state: () => ({
      favorites: [],
    }),
    mutations: {
    ADD_TO_FAVORITES(state, item) {
      if (!state.favorites.some(fav => fav.id === item.id)) {
        state.favorites.push(item);
      }
    },
    REMOVE_FROM_FAVORITES(state, itemId) {
      state.favorites = state.favorites.filter(fav => fav.id !== itemId); 
    },
    SET_FAVORITES(state, favorites) {
      state.favorites = favorites || []; 
    },
    },
    actions: {
    addToFavorites({ commit }, item) {
      commit('ADD_TO_FAVORITES', item); 
      this.dispatch('saveFavoritesToLocalStorage');
    },
    removeFromFavorites({ commit }, itemId) {
      commit('REMOVE_FROM_FAVORITES', itemId);
      this.dispatch('saveFavoritesToLocalStorage');
    },
    saveFavoritesToLocalStorage({ state }) {
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    loadFavoritesFromLocalStorage({ commit }) {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        commit('SET_FAVORITES', JSON.parse(savedFavorites)); 
      }
    },
},
    getters: {
    getFavorites(state) {
        return state.favorites;
    },
  },
};
