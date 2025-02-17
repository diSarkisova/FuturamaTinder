<template>
  <div class="login__layout">
    <TheLogo />
    <h2 class="login__name">FuturamaMatch</h2>
    <h1 class="login__sign">Sign In</h1>

    <form @submit.prevent="userAuth">
      <div class="login__layout-container">
        <div class="input-container">
          <label for="login" class="login__label"> Login</label>
          <input
            v-model="loginData.username"
            placeholder="Enter login"
            class="login__input"
          />

          <label for="password" class="login__label">Password</label>
          <input
            v-model="loginData.password"
            placeholder="Enter password"
            class="password-input"
          />
        </div>
      </div>
      <div class="form__action">
        <button type="submit" class="form__action-button">Sign in</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: "LoginLayout",
};
</script>

<script setup lang="ts">
import TheLogo from "../../components/TheLogo/TheLogo.vue";
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const loginData = reactive({
  username: "",
  password: "",
});

async function userAuth() {
  if (!loginData.username || !loginData.password) {
    console.log("не введены логин и пароль");
    return;
  }
  try {
    await store.dispatch("fetchAuth", {
      login: loginData.username,
      password: loginData.password,
    });
    console.log("Авторизация успешная");
    await router.push({ path: "/" });
  } catch (error) {
    console.error("Ошибка авторизации:", error);
  }
}
</script>

<style scoped lang="scss">
.login__layout {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    rgb(var(--login-primary-bg)),
    rgb(var(--login-secondary-bg))
  );
  padding: 40px;
  color: rgb(var(--white));

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
      margin-bottom: 8px;
      color: rgb(var(--white));
      font-size: 16px;
      font-weight: 500;
      padding-left: 10px;
    }

    .login__input,
    .password-input {
      width: 100%;
      max-width: 500px;
      padding: 10px 20px;
      font-size: 16px;
      border: 2px solid rgb(var(--login-border));
      border-radius: 50px;
      outline: none;
      background: linear-gradient(
        45deg,
        rgba(var(--white), 0.45),
        rgba(var(--white), 0.2)
      );
      color: rgb(var(--white));
      transition: all 0.3s ease;
    }

    .login__input {
      margin-bottom: 20px;
    }

    .login__input::placeholder,
    .password-input::placeholder {
      color: rgba(var(--white), 0.7);
    }

    .login__input:focus,
    .password-input:focus {
      border-color: rgb(var(--login-border-focus));
      background: linear-gradient(
        45deg,
        rgba(var(--login-border-focus), 0.7),
        rgba(var(--white), 0.4)
      );
      box-shadow: 0 0 8px rgba(var(--login-border-focus), 0.4);
    }
  }
}

.login__name {
  font-weight: 600;
}

.login__sign {
  font-weight: 400;
}

.form__action-button {
  width: 100%;
  max-width: 500px;
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid rgb(var(--login-border));
  border-radius: 50px;
  outline: none;
  background: linear-gradient(45deg, rgb(var(--white)), rgb(var(--white)));
  color: rgb(var(--black));
  transition: all 0.3s ease;
}
</style>
