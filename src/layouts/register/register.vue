<template>
  <div class="register__layout">
    <TheLogo />
    <h2>FuturamaMatch</h2>
    <h1>Sign Up</h1>

    <form @submit.prevent="userRegister">
      <div class="register__layout-container">
        <div class="input-container">
          <label for="name" class="register__label">Name</label>
          <input
            v-model="registerData.name"
            placeholder="Enter name"
            class="register__input"
            required
          />

          <label for="surname" class="register__label">Surname</label>
          <input
            v-model="registerData.surname"
            placeholder="Enter surname"
            class="register__input"
            required
          />

          <label for="email" class="register__label">Email</label>
          <input
            v-model="registerData.email"
            placeholder="Enter email"
            class="register__input"
            type="email"
            required
          />

          <label for="username" class="register__label">Username</label>
          <input
            v-model="registerData.username"
            placeholder="Enter username"
            class="register__input"
            required
          />

          <label for="password" class="register__label">Password</label>
          <input
            v-model="registerData.password"
            placeholder="Enter password"
            class="register__input"
            type="password"
            required
          />
        </div>
        <div class="form__action">
          <button type="submit" class="form__action-button">Sign Up</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: "RegisterLayout",
};
</script>

<script setup lang="ts">
import { reactive } from "vue";
import { useStore } from "vuex";
import TheLogo from "../../components/TheLogo/TheLogo.vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Создаем реактивный объект для хранения данных
const store = useStore();
const registerData = reactive({
  name: "",
  surname: "",
  email: "",
  username: "",
  password: "",
});

// Функция для отправки данных на сервер для регистрации
async function userRegister() {
  // Проверка, чтобы все обязательные поля были заполнены
  if (
    !registerData.name ||
    !registerData.surname ||
    !registerData.email ||
    !registerData.username ||
    !registerData.password
  ) {
    console.error("All fields are required");
    return;
  }

  try {
    // Отправляем данные на сервер через Vuex
    await store.dispatch("register", registerData);
    await router.push({ path: "/" });
    console.log("User registered successfully");
  } catch (error) {
    console.error("Error registering user:", error);
  }
}
</script>

<style scoped lang="scss">
.register__layout {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #2162bc, #461280);
  padding: 40px;

  &__layout-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding-top: 30px;

    .register__label {
      margin-bottom: 8px;
      color: white;
      font-size: 16px;
      font-weight: 500;
      padding-left: 10px;
    }

    .register__input,
    .password-input {
      width: 100%;
      max-width: 500px;
      padding: 10px 20px;
      font-size: 16px;
      border: 2px solid #3a55ac;
      border-radius: 50px;
      outline: none;
      background: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.45),
        rgba(255, 255, 255, 0.2)
      );
      color: #ffffff;
      transition: all 0.3s ease;
      margin-bottom: 4px;
    }

    .register__input::placeholder,
    .password-input::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    .register__input:focus,
    .password-input:focus {
      border-color: #5c6bc0;
      background: linear-gradient(
        45deg,
        rgba(92, 107, 192, 0.7),
        rgba(255, 255, 255, 0.4)
      );
      box-shadow: 0 0 8px rgba(92, 107, 192, 0.4);
    }
  }
}

.form__action-button {
  width: 100%;
  max-width: 500px;
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid #3a55ac;
  border-radius: 50px;
  outline: none;
  background: linear-gradient(45deg, rgb(255 255 255), rgb(242 242 242));
  color: black;
  transition: all 0.3s ease;
}
</style>
