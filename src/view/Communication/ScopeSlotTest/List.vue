<template>
  <ul>
    <li v-for="(todo,index) in todos" :key="todo.id">
      <!-- {{ todo.text }} -->
      <slot :todo="todo" :index="index"></slot>
      
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    todos: Array,
  },
};
</script>