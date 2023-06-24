<script>
  import AppContent from './AppContent.vue'

  import eventBus from './utils/event-bus'

  export default {
    components: {
      AppContent
    },
    created() {
      eventBus.on("bannerClick", this.bannerClick)
    },
    methods: {
      bannerClick(payload) {
        console.log(payload)
      },

      cancelListener() {
        eventBus.off("bannerClick", this.bannerClick)
      }
    }
  }
</script>


<template>
  <app-content></app-content>
  <button @click="cancelListener">取消监听</button>
</template>


<style scoped>

</style>