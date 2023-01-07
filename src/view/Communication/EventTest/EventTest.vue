<template>
  <div>
    <h1>EventTest组件</h1>
    <!-- <Event1></Event1> -->
    <button @click="test1">我是按钮1</button>
    <button @click="test2($event)">我是按钮2</button>
    <button @xxx="test1">傻逼才标签写自定义事件</button>
    <!-- 给组件绑定自定义事件或原生dom事件 -->
    <!-- 给组件绑定的无论是自定义还是dom事件都会当作自定义事件 -->
    <!-- dom原生事件绑定给组件是不能用的需要写。native才能使用-->
    <!-- 给组件绑定dom的事件本质就是吧这个回调函数绑定给了组件的跟标签，事件冒泡 -->
    <!-- 给组件绑定自定义事件就去组件内部去$emit（时间名，参数）去触发好了 -->
    <!--  -->
  
    <!-- <Event2 @click.native="test2"></Event2> -->
    <!-- <Event2 @xxx="test3($event)"></Event2> -->
    <Event2 @xxx="test4($event)"></Event2>
    <!-- <Event2 @xxx="(info)=>{console.log(info)}"></Event2> -->
  </div>
</template>

<script type="text/ecmascript-6">
import Event1 from "./Event1.vue";
import Event2 from "./Event2.vue";

export default {
  name: "EventTest",
  methods: {
    test1() {
      console.log("出啊发了");
    },
    test2(e) {
      console.log("hi", e.target.innerText);
    },
    test3(e) {
      console.log("hi", e);
    },
    test4(e) {
      console.log("hi", e);
    },
  },
  components: {
    Event1,
    Event2,
  },
};
</script>
