<template>
  <div>
    <h2>{{ info1.name }}</h2>
  </div>
  <button @click="onClick">修改数据</button>
</template>

<script>
  import { watchEffect, watch, ref } from 'vue'

  export default {
    setup() {
      let info1 = ref({
        name: "张三",
        age: "188"
      });
      watch(info1,(newValue,oldValue)=>{
        console.log(newValue,oldValue);
      },{deep: true});

      function onClick(){
        info1.value.name = "李四"
        console.log(info1)
      }

      return {
        info1: info1,
        onClick
      }
    }
  }
</script>

<style scoped>
</style>

