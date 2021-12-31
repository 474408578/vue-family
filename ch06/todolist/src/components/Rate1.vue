<template>
    <Rate :value="3">三星</Rate>
    <Rate :value="4" theme="red">四星</Rate>
    <Rate :value="1" theme="green">一星</Rate>
    <!-- 插槽 -->
    <Rate :value="5" theme="red">五星好评</Rate>
    <Rate :value="2" theme="yellow">
        <img width="30" src="/favicon.ico">
    </Rate>
</template>

<script setup>
import Rate from './Rate.vue'
</script>