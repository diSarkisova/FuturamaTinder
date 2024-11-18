import { createRouter, createWebHistory } from "vue-router";

import overview from "../pages/overview.vue";
import favorites from "../pages/favorites.vue";
// import itemFavorite from "../pages/favorites/[id]";
import profile from "../pages/profile.vue";

const routes = [
  { path: "/", component: overview },
  { path: "/favorites", component: favorites },
  // { path: "/favorites/:id", component: itemFavorite },
  { path: "/profile", component: profile },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
