<template>
    <div id="app">
        <h2>当前计数：{{ counter }}</h2>

        <AddCounter @add="addBtn1Click"></AddCounter>
        <SubCounter @sub="subBtnClick"></SubCounter>
    </div>
</template>

<script>
    import AddCounter from "@/03_组件通信_子传父/AddCounter.vue";
    import SubCounter from "@/03_组件通信_子传父/SubCounter.vue";


    export default {
        data(){
            return{
                counter:0
            }
        },
        methods:{
            addBtn1Click(counter){
                this.counter += counter;
            },
            subBtnClick(counter){
                this.counter -= counter;
            }
        },
        components:{
            AddCounter,
            SubCounter
        }
    }
</script>


<style>

</style>