<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="todo.id">
      {{todo.text}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    todos: Array
  }
}
</script>