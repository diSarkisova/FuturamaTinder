import { createStore } from "vuex";

export default {
  state: () => ({
    login: '',
    password: '',
  }),
  mutations: {
    setLogin(state, login) {
      state.login = login;
    },
    setPassword(state, password) {
      state.password = password;
    },
  },
  actions: {
    async fetchAuth({ commit }, { login, password }) {
      try {
        const response = await fetch('https://futuramaapi.com/api/tokens/users/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: login, password }),
        });
        const data = await response.json();
      } catch (error) {
        console.error('Ошибка аутентификации:', error);
      }
    },
  },
};