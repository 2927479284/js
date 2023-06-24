<script>
  import TabControl from './TabControl.vue'

  export default {
    components: {
      TabControl
    },
    data() {
      return {
        titles: ["衣服", "鞋子", "裤子"],
        contents: ["衣服页面", "鞋子页面", "裤子页面"],
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>


<template>
  <tab-control :titles="titles" @itemClick="itemClick">
    <template v-slot="slots">
      <button>{{slots.title}}-{{slots.index}}</button>
    </template>
    <template #why>
      <button>aaa</button>
    </template>
  </tab-control>
  <h1>{{ contents[currentIndex] }}</h1>
</template>


<style scoped>

</style>