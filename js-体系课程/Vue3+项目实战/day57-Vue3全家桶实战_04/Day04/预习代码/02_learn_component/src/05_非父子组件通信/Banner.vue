<script>
  import eventBus from './utils/event-bus'

  export default {
    methods: {
      prevClick() {
        eventBus.emit("bannerClick", { type: "prev" })
      },
      nextClick() {
        eventBus.emit("bannerClick", { type: "next" })
      }
    }
  }
</script>


<template>
  <button @click="prevClick">上一个</button>
  <button @click="nextClick">下一个</button>
</template>


<style scoped>

</style>