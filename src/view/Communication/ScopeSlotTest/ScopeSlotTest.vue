<template>
  <div>
    <h2>效果一: 显示TODO列表时, 已完成的TODO为绿色</h2>
     <!-- 1.默认插槽(父向子)  2.具名插槽(父向子)
        3.作用域插槽(父子之间传递数据) -->
    <List :todos="todos">
      <template  slot-scope="paramsObj">
       <p :style="{color:paramsObj.todo.isComplete ? 'green' : ''}"> {{ paramsObj.todo.text }}</p>
      </template>
    </List>
  <!-- <Child>
    <template>
      <p>默认插槽显示</p>
    </template>
   
    <template  slot="nm">
      <p >具名nm你吗</p>
    </template>

    <template>
      <p>草拟吗的第二个默认</p>
    </template>

    <template slot="nd">
      <p>具名nd你爹</p>
    </template>
  </Child> -->

   



  
    <hr>

    <h2>效果二: 显示TODO列表时, 带序号, TODO的颜色为蓝绿搭配</h2>
    <List :todos="todos">
      <template  slot-scope="paramsObj">
       <p :style="{color:paramsObj.index%2===0 ? 'blue' : 'green'}">
         {{ paramsObj.todo.text }} {{paramsObj.index}}</p>
      </template>
    </List>
  </div>
</template>

<script type="text/ecmascript-6">
  import List from './List'
  import Child from './Child.vue'

  export default {
    name: 'ScopeSlotTest',
    data () {
      return {
        todos: [
          {id: 1, text: 'AAA', isComplete: false},
          {id: 2, text: 'BBB', isComplete: true},
          {id: 3, text: 'CCC', isComplete: false},
          {id: 4, text: 'DDD', isComplete: false},
        ]
      }
    },
    components: {
      List,
      Child
   
    }
  }
</script>
