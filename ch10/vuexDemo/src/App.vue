<script setup>

</script>

<template>
 
  <div id="app">
    <router-link to="/">首页</router-link> | 
    <router-link to="/about">关于</router-link> |
    <router-link to="/count">counter</router-link>
  </div>

  <router-view></router-view>

</template>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
    text-align: center;
}

</style>
