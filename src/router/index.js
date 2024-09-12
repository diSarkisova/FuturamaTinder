import { createRouter, createWebHistory } from "vue-router";

import overview from "../pages/overview.vue";
import favorites from "../pages/favorites.vue";
// import [id] from "../pages/favorites/[id]"
import profile from "../pages/profile.vue";

const routes = [
  { path: "/", component: overview },
  { path: "/favorites", component: favorites },
  // { path: "/id", component: id },
  { path: "/profile", component: profile },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
