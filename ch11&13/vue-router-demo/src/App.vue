<script setup>
</script>

<template>
  <div id="app">
    <router-link to="/">home</router-link> | 
    <router-link to="/about">about</router-link> | 
    <router-link to="/todo">todo</router-link>
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
