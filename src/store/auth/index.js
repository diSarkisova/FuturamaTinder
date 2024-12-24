import { createStore } from "vuex";

export default {
  state: () => ({
    login: '',
    password: '',
    // token: '',
  }),
  mutations: {
    setLogin(state, login) {
      state.login = login;
    },
    setPassword(state, password) {
      state.password = password;
    },
    // setToken(state, token) {
    //   state.token = token;
    // },
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

        // if (!response.ok) {
        //   throw new Error(`HTTP error! Status: ${response.status}`);
        // }

        const data = await response.json();

        // if (data.token) {
        //   commit('setToken', data.token);
        // } else {
        //   throw new Error('Token is missing in response');
        // }
      } catch (error) {
        console.error('Ошибка аутентификации:', error);
      }
    },
  },
};