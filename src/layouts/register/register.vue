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

const store = useStore();
const registerData = reactive({
  name: "",
  surname: "",
  email: "",
  username: "",
  password: "",
});

async function userRegister() {
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
  background: linear-gradient(
    to bottom,
    rgb(var(--register-layout-primary)),
    rgb(var(--register-layout-secondary))
  );
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
      color: rgb(var(--white));
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
      border: 2px solid rgb(var(--register-border));
      border-radius: 50px;
      outline: none;
      background: linear-gradient(
        45deg,
        rgba(var(--register-input), 0.45),
        rgba(var(--register-input), 0.2)
      );
      color: rgb(var(--white));
      transition: all 0.3s ease;
      margin-bottom: 4px;
    }

    .register__input::placeholder,
    .password-input::placeholder {
      color: rgba(var(--register-input), 0.7);
    }

    .register__input:focus,
    .password-input:focus {
      border-color: rgb(var(--register-border-focus));
      background: linear-gradient(
        45deg,
        rgba(var(--register-bg-focus), 0.7),
        rgba(var(--register-input), 0.4)
      );
      box-shadow: 0 0 8px rgba(var(--register-bg-focus), 0.4);
    }
  }
}

.form__action-button {
  width: 100%;
  max-width: 500px;
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid rgb(var(--register-border));
  border-radius: 50px;
  outline: none;
  background: linear-gradient(45deg, rgb(var(--white)), rgb(var(--white)));
  color: rgb(var(--black));
  transition: all 0.3s ease;
}
</style>
