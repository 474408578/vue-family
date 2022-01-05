<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
    <div id="app">
      <router-link to="/">首页</router-link> | 
      <router-link to="/about">关于</router-link> |
      <router-link to="/counter">累加器</router-link> |
      <router-link to="/rate0">五星评rate0</router-link> | 
      <router-link to="/rate1">五星评rate1</router-link> | 
      <router-link to="/rate2">五星评rate2</router-link>
    </div>

    <router-view></router-view>
    
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
