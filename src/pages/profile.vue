<template>
  <div class="profile">
    <CirclePreview />
    <div class="profile__wrapper">
      <p>Name{{ user }}</p>
      <p>Surname</p>
      <p>E-mail</p>
      <p>Username</p>
      <p>Password</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import TheLogo from "../components/TheLogo.vue";
import { useStore } from "vuex";
import CirclePreview from "../components/CirclePreview/CirclePreview.vue";

const store = useStore();

const user = computed(() => store.state.name);
</script>

<script lang="ts">
export default {
  name: "Profile",
};
</script>

<style scoped>
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: white;
  gap: 25px;
}
</style>
