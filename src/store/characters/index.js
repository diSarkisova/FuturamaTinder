export default {
  state: () => ({
    items: [],
  }),
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items || [];
    },
  },
  actions: {
    async fetchItems({ commit }) {
      try {
        const response = await fetch('https://futuramaapi.com/api/characters');
        const data = await response.json();
        commit('SET_ITEMS', data.items || []);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    },
  },
  getters: {
    getItems(state) {
      return state.items;
    },
  },
};
