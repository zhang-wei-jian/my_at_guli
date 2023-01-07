<template>
  <div>
    <h1>PubsubTest组件</h1>
    <Test1></Test1>
    <br><br>
    <Test2></Test2>
  </div>
</template>

<script>
import Test1 from './Test1'
import Test2 from './Test2'
export default {
  name: 'PubsubTest',
  components:{
    Test1,
    Test2
  }
}
</script>

<style scoped>

</style>
