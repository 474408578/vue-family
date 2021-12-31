<script setup>
import useFavicon from '../utils/favicon';
import {useFullscreen} from '@vueuse/core'
let {favicon, reset} = useFavicon()
function loading() {
    favicon.value = '/geek.png'
}

const {isFullscreen, enter, exit, toggle} = useFullscreen
</script>

<template>
    <h1>这是关于页面</h1>
    <button @click="loading">123</button>

    <br>
    <button @click="reset">reset</button>

    <br>

    <h1 @click="toggle">click</h1>
</template>



