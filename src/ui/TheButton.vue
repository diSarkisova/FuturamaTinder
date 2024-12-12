<template>
  <div class="primary-btn">
    <button type="button" class="close-btn" @click="emitRemove"></button>
  </div>
</template>

<script setup>
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
}

.close-btn:before,
.close-btn:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 3px;
  background-color: white;
  transform: translate(-50%, -50%);
}

.close-btn:before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.close-btn:after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
</style>
