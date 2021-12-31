<template>

    <h1>你的评分是 {{score}} </h1>
    <!-- <RateWithEvent :value="score" @update-rate="update"></RateWithEvent> -->

    <!-- 使用v-model实现组件事件的传递 -->
    <RateWithEvent2 v-model:modelValue="score"></RateWithEvent2>
</template>

<script setup>
import {ref} from 'vue'
// import RateWithEvent from './RateWithEvent.vue'
let score = ref(3.5)
// function update(num) {
//     score.value = num
// }

import RateWithEvent2 from './RateWithEvent2.vue'

</script>