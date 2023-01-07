<template>
  <div>
    <!-- 默认插槽，在子组件内部写solt标签，之后使用子组件的标签内部可以传递结构，最终渲染在solt标签位置 -->
    <h1>里面有很多很多重复的结构...</h1>
   <slot name="nm"></slot>
  
 <!-- <slot></slot> -->
    <!-- <slot name="nm"></slot> -->

  </div>
</template>

<script>
export default {
  name: 'Child',
}
</script>

<style scoped>

</style>
