<script setup>
import { ref, computed } from "vue";

let id = 0;

const newTodo = ref("");
const hideCompleted = ref(false);
const todos = ref([
  { id: id++, text: "Изучить HTML", done: true },
  { id: id++, text: "Изучить JavaScript", done: true },
  { id: id++, text: "Изучить Vue", done: false },
]);

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false });
  newTodo.value = "";
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}

const filteredTodos = computed(() => {
  if (hideCompleted === false) return todos.value;

  const filtered = todos.value.filter(() => {
    todos.value.done === true;
  });
  return filtered;
});

// если hide false верни все todo, если true , то только те у кого todo.done true
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo" />{{ newTodo }}
    <button>Добавить задачу</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? "Показать все" : "Скрыть выполненные" }}
    {{ hideCompleted }}
  </button>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>
