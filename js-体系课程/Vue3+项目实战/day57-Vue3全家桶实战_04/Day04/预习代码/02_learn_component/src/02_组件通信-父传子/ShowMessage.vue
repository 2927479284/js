<script>
  export default {
    // props: ["title", "message"].

    // inheritAttrs: false,
    props: {
      title: {
        type: String,
        // required: true,
        default: "我是title默认值",
      },
      message: {
        type: String,
        default: "我是message默认值"
      },
      showInfo: {
        type: Object,
        default: () => {
          return { name: "why", age: 18 }
        }
      }
    }
  }
</script>


<template>
  <div class="show-message">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <p>个人信息: {{ showInfo.name }} {{ showInfo.age }}</p>
  </div>
  <div class="aaa" v-bind="$attrs"></div>
</template>


<style scoped>
  .show-message {
    background-color: orange;
  }
</style>