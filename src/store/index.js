import { createStore } from "vuex";

import characters from "./characters/index.js";
import favorites from "./favorites/index.js"

export default createStore({
  modules: {
    characters,
    favorites
  },
});
