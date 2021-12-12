<template>
    <h1 @click="add">{{count}} * 2 = {{double}}</h1>
</template>


<script setup>
import { ref, computed } from "vue";

let count = ref(1)
function add() {
    count.value++;
    color.value = Math.random() > 0.5 ? 'green' : 'red'
}

let double = computed(() => count.value * 2)


let color = ref('red')

</script>

<style scoped>
    h1 {
        color: v-bind(color)
    }
</style>