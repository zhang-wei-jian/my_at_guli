<template>
  <div>
    <h1>Test2组件</h1>
    <button @click="handle">点击按钮给Test1传递数据</button>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  name: 'Test2',
  data(){
    return {
      msg:'2JZ'
    }
  },
  methods:{
handle(){
  PubSub.publish('test',this.msg)
}
  }
}
</script>

<style scoped>

</style>
