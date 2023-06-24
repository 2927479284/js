<template>
  <jsx/>
</template>

<script setup lang="jsx">
  import { ref } from 'vue';
  import HelloWorld from "./components/HelloWorld.vue"

  const counter = ref(0)

  const increment = () => {
    counter.value++
  }
  const decrement = () => {
    counter.value--
  }

  const jsx = () => (
    <div>
      <h2>当前计数: { counter.value }</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <HelloWorld msg={'哈哈哈'}/>
    </div>
  )
</script>

<style scoped>

</style>