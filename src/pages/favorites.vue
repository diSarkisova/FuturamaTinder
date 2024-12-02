<template>
  <div class="favorites">
    <h2>Favorite partners</h2>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.favorites {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 25px;
}
.favorite__grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
}

.favorite__grid-wrapper {
  background-color: lightblue;
}

.favorite__character {
  text-align: center;
}
</style>
