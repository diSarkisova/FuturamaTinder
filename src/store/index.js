import { createStore } from "vuex";

import auth from "./auth/index.js"
import characters from "./characters/index.js";
import favorites from "./favorites/index.js";


export default createStore({
  modules: {
    auth,
    characters,
    favorites
  },
});
