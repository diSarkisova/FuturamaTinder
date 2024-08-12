import { createStore } from "vuex";

import characters from "./characters/index.js";

export default createStore({
  modules: {
    characters: characters,
  },
});
