<template>
    <div id="counter">
        <h2>我是h2标签</h2>
        <h2>{{counter.name}}</h2>
        <h2>{{counter.age}}</h2>
    </div>
</template>

<script setup>
    import useCounter from "@/stores/counter";
    let counter = useCounter();
</script>


<style>

</style>