<template>
  <div class="circle-preview">
    <img class="circle-preview__img" :src="props.icon" alt="user image" />
  </div>
</template>

<script setup lang="ts">
import type { IProps } from "./types";

const props = defineProps<IProps>();
</script>

<style scoped lang="scss">
// @import "../assets/styles/variables/variables.scss";

.circle-preview {
  position: relative;
  width: 60px;
  height: 60px;
  border: 1px solid black;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__img {
    width: 100%;
    height: auto;
  }
}
</style>
