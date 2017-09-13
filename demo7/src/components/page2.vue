<template>
  <h1>Hello Page2</h1>
</template>

<script>
  export default {
    created () {
      throw new Error('page2 created error test')
    }
  }
</script>
