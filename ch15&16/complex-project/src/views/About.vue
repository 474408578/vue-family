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
        getInfo().then(res => {
            if (res.code === 401) {
                // 移除token数据
                localStorage.removeItem("token")
                // 跳转到登录页
                router.push('/login')
            }
            else if (res.code === 200){
                name.value = res.data
            } else {
                console(res) // for debug
            }
        }).catch(err => console.log(err))
        
    } catch {
        router.push('/login')
    }
}
</script>