<template>
    <button @click="toggle">click</button>
        <div>
            <transition name="fade">
                <h1 v-if="showTitle">你好，vue</h1>
            </transition>
        </div>
</template>

<script setup>
import {ref} from 'vue'

let showTitle = ref(true)

function toggle() {
    showTitle.value = !showTitle.value
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s linear;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>