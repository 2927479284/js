<template>
  <render/>
</template>

<script setup>
  import { h, ref } from 'vue'
  import HelloWorld from "./components/HelloWorld.vue"

  const counter = ref(200)

  const increment = () => {
    counter.value++
  }
  const decrement = () => {
    counter.value--
  }

  const render = () => h("div", { class: "counter" }, [
    h("h2", { class: "title" }, `当前计数: ${counter.value}`),
    h("button", { onclick: increment}, `+1` ),
    h("button", { onclick: decrement}, `-1` ),
    h(HelloWorld, { msg: "哈哈哈" })
  ])
</script>

<style scoped>

</style>