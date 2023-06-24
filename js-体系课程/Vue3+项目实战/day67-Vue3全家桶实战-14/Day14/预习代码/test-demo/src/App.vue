<template>
  <div class="app">
    <button @click="addNum">添加数字</button>
    <button @click="removeNum">删除数字</button>
    <button @click="shuffleNum">打乱数字</button>
    <transition-group tag="div" name="why">
      <template v-for="item in nums" :key="item">
        <li>{{ item }}</li>
      </template>
    </transition-group>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { shuffle } from 'underscore'

const nums = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])

const addNum = () => {
  nums.value.splice(randomIndex(), 0, nums.value.length)
}

const removeNum = () => {
  nums.value.splice(randomIndex(), 1)
}

const shuffleNum = () => {
  nums.value = shuffle(nums.value)
}

const randomIndex = () => {
  console.log(Math.floor(Math.random() * nums.value.length))
  return Math.floor(Math.random() * nums.value.length)
}

const afterEnter = () => {
  console.log("after-enter")
}

</script>

<style scoped>

  span {
    margin-right: 10px;
    display: inline-block;
  }

  .why-enter-from,
  .why-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .why-move {
    transition: all 2s ease;
  }

  .why-leave-active {
    position: absolute;
  }

  .why-enter-active,
  .why-leave-active {
    transition: all 2s ease;
  }

</style>