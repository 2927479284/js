<script>
  export default {
    props: {
      slotName: {
        type: String,
        default: ""
      }
    }
  }
</script>


<template>
  <h2>ShowMessage</h2>
  <div>
    <slot :name="slotName"></slot>
  </div>
  <div>
    <slot name="top">
      我是默认值
    </slot>
  </div>
  <div>
    <slot name="center"></slot>
  </div>
  <div>
    <slot name="bottom"></slot>
  </div>
</template>


<style scoped>

</style>