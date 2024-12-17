import { createRouter, createWebHistory } from "vue-router";
import type { RouteComponent } from 'vue-router';
import DefaultLayout from '../layouts/default/default.vue'
import LoginLayout from '../layouts/login/login.vue'

const routes = [
  {
    path: "/", 
    component: DefaultLayout,
    name: 'DefaultLayout',
    meta: {
      title: 'Главная страница'
    },
    children: [
      {
        path: "", 
        component: (): RouteComponent => import('../pages/overview.vue'),
        meta: {
          title: 'Обзор'
        },
      },
      {
        path: "Favorites", 
        component: (): RouteComponent => import('../pages/favorites.vue'),
        meta: {
          title: 'Избранные'
        },
      },
      {
        path: "Profile", 
        component: (): RouteComponent => import('../pages/profile.vue'),
        meta: {
          title: 'Профиль пользователя'
        },
      },
    ]
  },
  {
    path: '/login',
    component: LoginLayout,
    name: 'Login',
    meta: {
      title: 'Страница входа'
    }
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
});
