<template>

    <div id="app">
        <tab-control :titles="['衣服','鞋子','裤子']"/>
    </div>
</template>

<script>
    import TabControl from "@/04_组件通信_案例/TabControl.vue";
    export default {
        components:{
            TabControl
        }
    }
</script>

<style scoped>

</style>