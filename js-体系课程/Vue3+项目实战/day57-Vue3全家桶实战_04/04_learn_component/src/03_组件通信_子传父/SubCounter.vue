<template>
    <div class="sub">
        <button @click="btnClick(1)">-1</button>
        <button @click="btnClick(5)">-5</button>
        <button @click="btnClick(10)">-10</button>
    </div>
</template>


<script>
    export default {
        methods:{
            btnClick(counter){
                this.$emit("sub",counter);
            }
        }
    }
</script>


<style>

</style>