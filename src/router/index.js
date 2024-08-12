import { createRouter, createWebHistory } from "vue-router";

import Favorites from "../components/Favorites.vue";
import MainPage from "../pages/MainPage.vue";

const routes = [
  { path: "/", component: MainPage },
  { path: "/favorites", component: Favorites },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
