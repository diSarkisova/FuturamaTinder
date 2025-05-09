<template>
  <div>
    <textarea
      class="ui-textarea"
      v-model="filterTable"
      placeholder="Введите запрос"
    >
    </textarea>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const filterTable = ref("");
</script>
