export default {
  state: {
    characters: [],
  },
  mutations: {
    SET_CHARACTERS(state, characters) {
      state.characters = characters;
    },
  },
  actions: {
    // Получаем данные из API
    async fetchCharacters({ commit }) {
      try {
        const response = await fetch(
          "https://api.sampleapis.com/futurama/characters",
          {
            method: "GET",
          },
        );

        // Перевели данные в формат JSON
        const charactersJson = await response.json();
        console.log("Fetched characters JSON", charactersJson); // сработал!!!

        commit("SET_CHARACTERS", charactersJson);
      } catch (error) {
        console.error("Error fetching character images:", error);
      }
    },
  },
  getters: {
    getCharacters(state) {
      return state.characters;
    },
  },
};
