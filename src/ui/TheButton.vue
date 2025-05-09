<template>
  <div class="primary-btn">
    <button type="button" class="close-btn" @click="emitRemove"></button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["remove"]);

const emitRemove = () => {
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
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;
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
    transition: background-color 0.3s ease;
  }

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:hover {
    &:before,
    &:after {
      background-color: red;
    }
  }
}
</style>
