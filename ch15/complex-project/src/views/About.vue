<template>
    <Heading :level="3">
        点击验证token<el-button type="primary" @click="validToken">Click</el-button>
        Your Name: {{ name }}
    </Heading>
</template>

<script setup>
import { getInfo } from '../api/apis.js';
import Heading from '../components/Heading.jsx'
import { ref } from 'vue'
// import {useRouter} from 'vue-router'
import router from '../router/index'

const name = ref("")

async function validToken() {
    try {
        const {code, data} = getInfo()
        router.replace('/login')
        console.log(code,data)
        if (code === 401) {
            router.push('/login')
        }
        name.value = data
    } catch {
        router.push('/login')
    }
}
</script>