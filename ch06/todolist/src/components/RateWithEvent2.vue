<template>
    <h1 :style="fontstyle">
        <div class="rate" @mouseout="mouseOut">
            <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
            <span class="hollow" :style="fontwidth">
                <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
            </span>
        </div>
    </h1>
</template>

<script setup>
import { defineProps, computed, ref, defineEmits } from 'vue'
let props  = defineProps({
    // 组件上的v-model使用modelValue作为prop，同时使用update:modelValue作为事件
    modelValue: Number,
    theme: {type:String, default: 'orange'}
})

// 评分宽度
let width = ref(props.modelValue)

function mouseOver(i) {
    width.value = i
}

function mouseOut() {
    width.value = props.modelValue
}

const fontwidth = computed(()=>`width:${width.value}em;`)


const themeObj = {
    'black': '#00', 
    'white': '#fff', 
    'red': '#f5222d', 
    'orange': '#fa541c', 
    'yellow': '#fadb14', 
    'green': '#73d13d', 
    'blue': '#40a9ff',
}
const fontstyle = computed(() => {
    return `color: ${themeObj[props.theme]};`
})

let emits = defineEmits('[update:modelValue]') // 定义emits
function onRate(num) {
    emits('update:modelValue', num)
}

</script>

<style scoped>

.rate {
    position: relative;
    display: inline-block;
}

/* CSS 选择器 */
.rate > span.hollow {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
}
</style>