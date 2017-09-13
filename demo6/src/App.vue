<template>
  <div id="app">
    <h1>一个混合失败的例子</h1>
    <p>请查看控制台</p>
    <child></child>
  </div>
</template>

<script>
  import Child from 'src/components/child'
  export default {
    components: {
      Child
    }
  }
</script>
