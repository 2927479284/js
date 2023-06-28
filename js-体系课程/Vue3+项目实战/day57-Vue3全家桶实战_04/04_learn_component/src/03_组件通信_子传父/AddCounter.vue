<template>

    <div class="add">
        <button @click="btnClick(1)">+1</button>
        <button @click="btnClick(5)">+5</button>
        <button @click="btnClick(10)">+10</button>
    </div>

</template>


<script>
    export default {
        methods:{
            btnClick(counter){
                // 子组件抛出一个事件 事件名：add
                this.$emit("add",counter);
            }
        }
    }

</script>


<style>

</style>