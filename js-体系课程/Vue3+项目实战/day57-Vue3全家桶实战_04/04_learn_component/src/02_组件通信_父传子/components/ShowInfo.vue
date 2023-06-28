<template>
  <div class="infos">
    <h2 :class="$attrs.class">姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <h2>身高: {{ height }}</h2>

    <h2>Message: {{ showMessage }}</h2>
  </div>

<!--  <div class="others" v-bind="$attrs"></div>-->
</template>

<script>
  export default {
    props: ['name','age','height','showMessage']
  }
</script>

<style scoped>
</style>

