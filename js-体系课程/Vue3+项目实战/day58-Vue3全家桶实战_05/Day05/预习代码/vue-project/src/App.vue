<script>
  import { computed } from 'vue'
  import AppContent from './components/AppContent.vue'

  export default {
    components: {
      AppContent
    },
    data() {
      return {
        names: ["abc", "cba", "nba"]
      }
    },
    provide() {
      return {
        name: "why",
        age: 18,
        length: computed(() => this.names.length)
      }
    },
    methods: {
      addItem() {
        this.names.push("why")
      }
    }
  }
</script>

<template>
  <app-content></app-content>
  <button @click="addItem">添加元素</button>
</template>

<style scoped>

</style>
