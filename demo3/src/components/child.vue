<template>
  <h1>Hello 源码结构</h1>
</template>

<script>
  export default {
    beforeCreate: function () {
      console.log('>>Child>> beforeCreate 被调用')
    },
    created: function () {
      console.log('>>Child>> created 被调用')
    },
    beforeMount: function () {
      // 未执行
      console.log('>>Child>> beforeMount 被调用')
    },
    mounted: function () {
      // 未执行
      console.log('>>Child>> mounted 被调用')
    }
  }
</script>
