<template>
  <div class="profile">
    <TheLogo />
    <img>Фото Пользователя</img>
    <h3>{{user}} </h3>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import  TheLogo from '../components/TheLogo.vue'
import { useStore } from "vuex";

const store = useStore();

const user= computed(()=> store.state.name)

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

