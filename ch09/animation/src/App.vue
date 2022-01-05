<template>  

  <div id="navigation">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Transition'}">Transition</router-link>
  </div>
  <router-view></router-view>
</template>

<script setup>
</script>

<style>
#navigation {
  text-align: center;
}
</style>