<template>
  <div class="app">
    <h2 class="title">{{title}}</h2>
    <p class="content">{{content}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "我是标题",
        content: "我是内容, 哈哈哈"
      }
    }
  }
</script>

<style>
  .title {
    color: blue;
  }

  .content {
    color: red;
  }
</style>
