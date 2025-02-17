import { createStore } from "vuex";

import auth from "./auth/index.js"
import characters from "./characters/index.js";
import favorites from "./favorites/index.js";
import register from "./register/index.js";

export default createStore({
  modules: {
    auth,
    register,
    characters,
    favorites,
  },
});
