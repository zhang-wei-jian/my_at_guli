<template>
  <div>hi</div>
</template>

<script>
export default {
  name: "ttrsListenersTest",
  mounted() {
    console.log(this.$attrs,this.$listeners);
  },
};
</script>

<style scoped>
</style>
