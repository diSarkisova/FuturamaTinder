<template>
  <div class="profile">
    <CirclePreview  />
    <h1 class="profile__title">Profile</h1>
    <div class="profile__details">
      <div class="profile__field">
        <span class="profile__label">Name:</span>
        <span class="profile__value">{{ user.name || null }}</span>
      </div>
      <div class="profile__field">
        <span class="profile__label">Surname:</span>
        <span class="profile__value">{{ user.surname || null }}</span>
      </div>
      <div class="profile__field">
        <span class="profile__label">E-mail:</span>
        <span class="profile__value">{{ user.email || null }}</span>
      </div>
      <div class="profile__field">
        <span class="profile__label">Username:</span>
        <span class="profile__value">{{ user.username || null }}</span>
      </div>
      <div class="profile__field">
        <span class="profile__label">Password:</span>
        <span class="profile__value">{{ user.password || null }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import CirclePreview from "../components/CirclePreview/CirclePreview.vue";

// Подключаем Vuex Store
const store = useStore();

// Геттер для получения данных пользователя
const user = computed(() => store.state.user || {});
</script>

<script lang="ts">
export default {
  name: "Profile",
};
</script>

<style scoped lang="scss">
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(var(--profile-bg), 0.5);
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(var(--black), 0.3);
  color: rgb(var(--white));
  gap: 25px;

  &__title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: rgb(var(--white));
  }

  &__details {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__field {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background-color: rgba(var(--black), 0.5);
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(var(--black), 0.2);
  }

  &__label {
    font-size: 16px;
    color: rgb(var(--white));
  }

  &__value {
    font-size: 16px;
    color: rgb(var(--white));
    word-break: break-word;
  }
}
</style>
