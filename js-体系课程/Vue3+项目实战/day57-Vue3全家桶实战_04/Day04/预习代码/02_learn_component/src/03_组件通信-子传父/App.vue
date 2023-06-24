<script>
  import AddCounter from './AddCounter.vue'

  export default {
    components: {
      AddCounter
    },
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      oneClick() {
        this.counter += 1
      }
    }
  }
</script>


<template>
  <h2>当前计数: {{ counter }}</h2>
  <add-counter @oneClick="oneClick"></add-counter>

  <div>
    <button>-1</button>
    <button>-5</button>
    <button>-10</button>
  </div>
</template>


<style scoped>

</style>