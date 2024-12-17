<template>
  <div class="login__layout">
    <TheLogo />
    <h2>FuturamaMatch</h2>
    <h1>Sign In</h1>

    <div class="login__layout-container">
      <div class="input-container">
        <label for="login" class="login__label">Введите логин</label>
        <input v-model="login" placeholder="Логин" class="login__input" />

        <label for="password" class="login__label">Введите Пароль</label>
        <input
          v-model="password"
          type="password"
          placeholder="Пароль"
          class="password-input"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "LoginLayout",
};
</script>

<script setup lang="ts">
import TheLogo from "../../components/TheLogo.vue";
</script>

<style scoped lang="scss">
.login__layout {
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
    padding-top: 50px;

    .login__label {
      margin-bottom: 8px; // Отступ между label и инпутом
      color: white; // Цвет текста лейбла
      font-size: 16px; // Размер шрифта лейбла
      font-weight: 500; // Начертание шрифта
    }

    .login__input,
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
        rgb(255 255 255 / 45%),
        rgba(255, 255, 255, 0.2)
      );
      color: black;
      transition: all 0.3s ease;
    }

    .login__input {
      margin-bottom: 20px;
    }

    .login__input::placeholder,
    .password-input::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    .login__input:focus,
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
</style>
