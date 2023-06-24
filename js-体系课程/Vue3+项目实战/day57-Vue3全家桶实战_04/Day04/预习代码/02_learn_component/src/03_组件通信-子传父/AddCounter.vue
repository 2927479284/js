<script>
  export default {
    data() {
      return {
        message: "Hello World"
      }
    },
    emits: ["oneClick"],
    methods: {
      addOne() {
        this.$emit("oneClick")
      },
      addFive() {
        this.$emit("twoClick")
      },
      addTen() {
        this.$emit("tenClick")
      }
    }
  }
</script>


<template>
  <div class="add">
    <button @click="addOne">+1</button>
    <button @click="addFive">+5</button>
    <button @click="addTen">+10</button>
  </div>
</template>


<style scoped>
</style>