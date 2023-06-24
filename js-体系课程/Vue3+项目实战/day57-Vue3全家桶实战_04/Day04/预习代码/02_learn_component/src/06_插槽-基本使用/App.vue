<script>
  import ShowMessage from './ShowMessage.vue'
  import HelloWorld from './HelloWorld.vue'

  export default {
    components: {
      ShowMessage,
      HelloWorld
    },
    data() {
      return {
        message: "Hello World",
        slotName: "why"
      }
    }
  }
</script>


<template>
  <show-message>
    <template #top>
      <button>按钮</button>
    </template>
    <template #center>
      <span>span</span>
    </template>
    <template #bottom>
      <a href="#">百度一下</a>
    </template>
  </show-message>

  <show-message>
    <input type="text">
  </show-message>

  <show-message :slot-name="slotName">
    <template #[slotName]>
      <h1>呵呵呵</h1>
    </template>
  </show-message>
</template>


<style scoped>

</style>