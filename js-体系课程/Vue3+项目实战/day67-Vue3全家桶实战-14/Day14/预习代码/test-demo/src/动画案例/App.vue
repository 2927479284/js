<template>
  <div class="app">
    <button @click="isShow = !isShow">切换</button>
    <transition 
      type="animation" 
      @after-enter="afterEnter"
      @after-leave="afterEnter"
      mode="out-in"
      appear
    >
      <h2 v-if="isShow">你好啊, 李银河</h2>
      <h2 v-else>Hello World</h2>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(false)

const afterEnter = () => {
  console.log("after-enter")
}

</script>

<style scoped>

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .v-enter-to,
  .v-leave-from {
    opacity: 1;
  }

  /* h2 {
    display: inline-block;
  } */

  .v-enter-active {
    animation: bounce-in 2s ease;
    transform: opacity 2s ease;
  }
  .v-leave-active {
    transition: opacity 2s ease;
    animation: bounce-in 2s ease reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.25);
    }

    100% {
      transform: scale(1);
    }
  }

</style>