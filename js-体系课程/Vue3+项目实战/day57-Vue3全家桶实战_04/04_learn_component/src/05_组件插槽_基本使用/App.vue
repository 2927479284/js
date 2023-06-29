<template>
    <use-cha-cao title="父组件传值给子组件 替换title">
<!--        <h2>我是H2标签 替换子组件中的 slot </h2>-->
    </use-cha-cao>
</template>


<script>
    import UseChaCao from "@/05_组件插槽_基本使用/UseChaCao.vue";

    export default {
        // 注册组件
        components:{
            UseChaCao: UseChaCao
        }

    }
</script>



<style scoped>

</style>