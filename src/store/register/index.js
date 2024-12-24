import { createStore } from "vuex";

export default {
  state: () => ({
    name: localStorage.getItem('name') || "",
    surname: localStorage.getItem('surname') || "",
    email: localStorage.getItem('email') || "",
    username: localStorage.getItem('username') || "",
    password: localStorage.getItem('password') || "",
    // token: "", // Сохранение токена при успешной регистрации (если нужно)
  }),

  mutations: {
    setName(state, name) {
      state.name = name;
      localStorage.setItem('name', name);
    },
    setSurname(state, surname) {
      state.surname = surname;
      localStorage.setItem('surname', surname);
    },
    setEmail(state, email) {
      state.email = email;
      localStorage.setItem('email', email);
    },
    setUsername(state, username) {
      state.username = username;
      localStorage.setItem('username', username);
    },
    setPassword(state, password) {
      state.password = password;
      localStorage.setItem('password', password);
    },
    // setToken(state, token) {
    //   state.token = token;
    // },
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

        // if (!response.ok) {
        //   throw new Error(`HTTP error! Status: ${response.status}`);
        // }

        const data = await response.json();
        
        commit("setName", name);
        commit("setSurname", surname);
        commit("setEmail", email);
        commit("setUsername", username);
        commit("setPassword", password);

        // if (data.token) {
        //   commit("setToken", data.token); // Сохраняем токен, если он есть
        //   console.log("User registered successfully:", data);
        // } else {
        //   throw new Error("Token is missing in response");
        // }
      } catch (error) {
        console.error("Ошибка регистрации:", error);
        // throw error;
      }
    },
  },
};
