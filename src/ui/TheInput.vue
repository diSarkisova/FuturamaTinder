<template>
  <div>
    <textarea
      class="ui-textarea"
      v-model="filterTable"
      placeholder="Введите запрос "
    >
    </textarea>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const filterTable = ref("");

const filterTable = computed({
  get() {},
});
</script>
