<template>
  <div class="profile">
    <TheLogo />
    <h3>Имя пользователя</h3>
    <img>Фото пользователя</img>
  </div>
</template>

<script setup>
import  TheLogo from '../components/TheLogo.vue'


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

