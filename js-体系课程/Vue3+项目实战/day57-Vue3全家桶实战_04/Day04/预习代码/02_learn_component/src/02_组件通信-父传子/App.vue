<script>
  import ShowMessage from './ShowMessage.vue'

  export default {
    components: {
      ShowMessage
    },
    data() {
      return {
        messages: [
          { title: "哈哈哈", message: "我是哈哈哈" },
          { title: "呵呵呵", message: "我是呵呵呵" },
        ]
      }
    }
  }
</script>


<template>
  <template v-for="(item, index) in messages" :key="index">
    <show-message :title="item.title" :message="item.message"></show-message>
  </template>
  
  <show-message></show-message>

  <show-message class="why" id="abc" abc="cba" :show-info="{ name: 'kobe', age: 20 }"></show-message>
</template>


<style scoped>

</style>