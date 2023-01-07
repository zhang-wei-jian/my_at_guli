<template>
  <div>

<!-- <a title="啥班卡你妈呢"> -->
<!-- <a :title="$attrs.title"> -->
<a :title="title">
    <el-button type="danger">危险按钮</el-button>
</a>


  </div>
</template>

<script>
export default {
  name: 'sListenersTest',
  props:['title'],
  mounted(){
    console.log(this.$attrs);
    
  }
}
</script>

<style scoped>

</style>
