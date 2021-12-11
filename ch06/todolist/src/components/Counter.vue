<template>
    <div>{{count}} * 2 = {{double}}</div>
    <button @click="add">add</button>
</template>


<script setup>
import { ref } from "vue";

let count = ref(0)
function add() {
    count.value++
}

let double = computed(() => count.value * 2)

</script>