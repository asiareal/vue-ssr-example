<template>
  <div id="app">
    <ul class="menu">
      <li>
        <router-link to="/page1">page1</router-link>
      </li>
      <li>
        <router-link to="/page2">page2</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  ul.menu {
    list-style: none;
    overflow: hidden;
    padding: 0;
  }

  ul.menu > li {
    float: left;
  }

  ul.menu > li > a {
    display: block;
    padding: 5px;
  }

  a.router-link-active {
    background-color: #f5f5dc;
  }
</style>
