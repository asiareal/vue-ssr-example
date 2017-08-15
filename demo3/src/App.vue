<template>
  <div id="app">
    <child></child>
  </div>
</template>

<script>
  import Child from 'src/components/child'
  export default {
    beforeCreate: function () {
      console.log('>>App>> beforeCreate 被调用')
    },
    created: function () {
      console.log('>>App>> created 被调用')
    },
    beforeMount: function () {
      // 未执行
      console.log('>>App>> beforeMount 被调用')
    },
    mounted: function () {
      // 未执行
      console.log('>>App>> mounted 被调用')
    },
    components: {
      Child
    }
  }
</script>
