<template>
    <h1>{{star}}</h1>
</template>

<script setup>
import { computed } from 'vue'
let star = computed(()=>"★★★★★☆☆☆☆☆".slice(5 - 1, 10 - 1))
</script>