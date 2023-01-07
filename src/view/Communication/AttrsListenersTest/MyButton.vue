<template>
  <div>
    <!-- <a title="啥班卡你妈呢"> -->
    <!-- <a :title="$attrs.title"> -->
    <a :title="title">
      <!-- <el-button v-bind="$attrs" v-on="$listeners">自己二次封装</el-button> -->
      <el-button v-bind="$attrs" v-on="$listeners">我是按钮</el-button>
    </a>
  </div>
</template>

<script>
export default {
  name: "sListenersTest",
  props: ["title"],

  mounted() {
    // console.log(this.$attrs);
    console.log(this.$listeners);
  },
};
</script>

<style scoped>
</style>
