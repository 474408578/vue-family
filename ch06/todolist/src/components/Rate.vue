<template>
    <div>
    <h1 :style="fontStyle">
        <slot></slot>
        {{star}}
    </h1>
    </div>
    
</template>

<script setup>
import { defineProps, computed } from 'vue'
let props  = defineProps({
    value: Number,
    theme: {type:String, default: 'orange'}
})

console.log(props)
let star = computed(()=>"★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))

const themeObj = { 
    'black': '#00', 
    'white': '#fff', 
    'red': '#f5222d', 
    'orange': '#fa541c', 
    'yellow': '#fadb14', 
    'green': '#73d13d', 
    'blue': '#40a9ff',
}


const fontStyle = computed(() => {
    return `color: ${themeObj[props.theme]};`
})
</script>
