export default {
  state: () => ({
    characters: "null",
  }),
  mutations: {
    SET_CHARACTERS(state, characters) {
      state.characters = characters;
    },
  },
  actions: {
    async fetchCharacters({ commit }) {
      try {
        const response = await fetch(
          "https://api.sampleapis.com/futurama/characters",
          {
            method: "GET",
          },
        );
        const characters = await response.json();
        commit("SET_CHARACTERS", characters);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
