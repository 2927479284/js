<template>
    <div class="app">
        <h2>App Content</h2>
        <div class="nav">
            <router-link to="/home"  >首页</router-link>
            <router-link to="/about" active-class="active">关于</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script setup>

</script>

<style>

    .active {
        color: red;
        font-size: 20px;
    }
</style>
