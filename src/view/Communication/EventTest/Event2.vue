<template>
  <div style="background: #ccc; height: 80px;">
    <h2>Event2组件</h2>
<button @click="$emit('xxx','dashabi')">发送数过去</button>
  </div>
</template>


<script>
export default {
  name: 'EventTest',
}
</script>

<style scoped>

</style>
