<template>
  <div class="profile">
    <TheLogo />
    <img>Фото Пользователя</img>
    <h3>Имя пользователя</h3>
  </div>
</template>

<script setup lang="ts">
import  TheLogo from '../components/TheLogo.vue'
</script>

<script lang="ts">
export default {
  name: 'Profile'
};
</script>

<style scoped>
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
</style>

