<template>
  <div class="primary-btn">
    <button type="button" class="close-btn" @click="emitRemove"></button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["remove"]); // определяем событие remove

const emitRemove = () => {
  // Генерируем событие удаления
  emit("remove");
};
</script>

<style scoped>
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  background-color: transparent; /* Прозрачный фон */
  cursor: pointer;
  transition: background-color 0.3s ease; /* Плавный переход для фона (при необходимости) */

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 3px;
    background-color: white;
    transform: translate(-50%, -50%);
    transition: background-color 0.3s ease; /* Плавный переход для линий */
  }

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  /* Эффект при наведении */
  &:hover {
    &:before,
    &:after {
      background-color: red; /* Линии крестика становятся черными */
    }
  }
}
</style>
