<template>
  <div>
    <h2>深入v-model</h2>
    <p>{{msg}}</p>
    <input type="text" :value="msg" @input="msg = $event.target.value">
    //<br/>
    <CustomInput :value="msg" @input="msg=$event"></CustomInput>
  </div>
</template>

<script type="text/ecmascript-6">
  import CustomInput from './CustomInput.vue'
  export default {
    name: 'ModelTest',
    data(){
      return {
        msg:'2JZ'
      }
    },
    components: {
      CustomInput
    }
  }
</script>
