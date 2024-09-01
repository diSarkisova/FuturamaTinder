<template>
  <div class="circle-preview">
    <!--    <button class="circle-preview__primary-button"></button>-->
    <img class="circle-preview__img" :src="icon" alt="user image" />
  </div>
  <!--  <button-->
  <!--    class="circle-preview__secondary-button"-->
  <!--    @click="addNewPhoto"-->
  <!--  ></button>-->
</template>

<script setup>
defineProps({
  icon: {
    src: String,
    required: true,
    default: "../assets/icons/user.png",
  },
});

// function addNewPhoto() {
//   alert("Тут мы добавляем фото");
// }
</script>

<style scoped lang="scss">
@import "../assets/styles/variables/variables.scss";

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

  //&__secondary-button {
  //  position: absolute;
  //  bottom: 15px;
  //  right: 15px;
  //  //margin-left: 10px;
  //  width: 30px;
  //  height: 30px;
  //  border: none;
  //  border-radius: 50%;
  //  background-color: $grey-400;
  //  color: white;
  //  font-size: 18px;
  //  display: flex;
  //  align-items: center;
  //  justify-content: center;
  //  cursor: pointer;
  //  transition: background-color 0.3s;

  //&::after {
  //  content: "+";
  //  display: flex;
  //  position: absolute;
  //  z-index: 5;
  //  //font-size: 35px;
  //  //font-weight: 400;
  //  color: black;
  //  background-color: $grey-400;
  //  border: solid 1px $grey-400;
  //  border-radius: 50%;
  //  width: 20px;
  //  height: 20px;
  //  align-items: center !important;
  //  flex-direction: column !important;
  //  justify-content: space-evenly !important;
  //}
}
</style>
