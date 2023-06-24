<script>
  export default {
    inject: ["name", "age", "length"]
  }
</script>


<template>
  <h2 class="title">Banner</h2>
  <h2>个人信息: {{ name }}-{{ age }}-{{ length.value }}</h2>
</template>


<style scoped>
  .title {
    font-size: 12px;
  }
</style>