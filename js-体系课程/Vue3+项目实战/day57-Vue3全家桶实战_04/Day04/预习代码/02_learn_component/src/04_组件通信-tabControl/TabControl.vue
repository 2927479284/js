<script>
  export default {
    props: {
      titles: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    emits: ["itemClick"],
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit("itemClick", index)
      }
    }
  }
</script>


<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="index">
      <div class="tab-control-item"
           :class="{ active: currentIndex === index }" 
           @click="itemClick(index)">
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>


<style scoped>
  .tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .tab-control-item.active span {
    color: red;
    border-bottom: 3px solid red;
  }
</style>