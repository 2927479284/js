<template>
    <h2>{{ title }}</h2>
    <slot>
        <p>我是默认P标签</p>
    </slot>
    <div class="content">
        <slot>
            <p>我是默认P标签</p>
        </slot>
    </div>
</template>


<script>
    export default {
        // 父子组件通信传值
        props:{
            title:{
                type: String,
                default: "我是title默认值"
            }
        }
    }
</script>


<style scoped>

</style>