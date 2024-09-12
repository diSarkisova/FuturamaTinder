import { createRouter, createWebHistory } from "vue-router";

import Favorites from "../pages/FavoritesPage.vue";
import MainPage from "../pages/MainPage.vue";
import Profile from "../pages/Profile.vue";

const routes = [
  { path: "/", component: MainPage },
  { path: "/favorites", component: Favorites },
  { path: "/profile", component: Profile },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
