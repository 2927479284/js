<template>
  <h2>{{title}}</h2>
  <h2>当前计数: {{counter}}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>

  <product-item></product-item>
</template>

<script>
  import productItem from "@/components/ProductItem.vue";
  export default {
    data(){
      return{
        title: "我是标题",
        counter: 1,
      }
    },
    methods:{
      increment(){
        this.counter++;
      },
      decrement(){
        this.counter--;
      }
    },
    components:{
      "product-item": productItem
    }
  }
</script>

<style>
  h2 {
    color: red;
  }
</style>
