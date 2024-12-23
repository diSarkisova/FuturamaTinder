import { createStore } from "vuex";

export default {
  state: () => ({
    name: "",
    surname: "",
    email: "",
    username: "",
    password: "",
    token: "", // Сохранение токена при успешной регистрации (если нужно)
  }),

  mutations: {
    setName(state, name) {
      state.name = name;
    },
    setSurname(state, surname) {
      state.surname = surname;
    },
    setEmail(state, email) {
      state.email = email;
    },
    setUsername(state, username) {
      state.username = username;
    },
    setPassword(state, password) {
      state.password = password;
    },
    setToken(state, token) {
      state.token = token;
    },
  },

  actions: {
    // Действие для регистрации пользователя
    async register({ commit }, { name, surname, email, username, password }) {
      try {
        const response = await fetch("https://futuramaapi.com/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            surname,
            email,
            username,
            password,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.token) {
          commit("setToken", data.token); // Сохраняем токен, если он есть
          console.log("User registered successfully:", data);
        } else {
          throw new Error("Token is missing in response");
        }
      } catch (error) {
        console.error("Ошибка регистрации:", error);
        throw error;
      }
    },

    // Действие для аутентификации (если необходимо)
    async fetchAuth({ commit }, { username, password }) {
      try {
        const response = await fetch("https://futuramaapi.com/api/tokens/users/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.token) {
          commit("setToken", data.token); // Сохраняем токен при успешной авторизации
          console.log("User authenticated successfully:", data);
        } else {
          throw new Error("Token is missing in response");
        }
      } catch (error) {
        console.error("Ошибка аутентификации:", error);
        throw error;
      }
    },
  },
};
