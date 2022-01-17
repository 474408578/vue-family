<template>
    <el-form style="position: absolute; left: 45%; " :model="form" label-width="auto">
        <el-form-item label="用户名">
            <el-input v-model="form.name" size="small" />
        </el-form-item>
    
        <el-form-item label="密码">
            <el-input v-model="form.password" type="password" size="small" />
        </el-form-item>
    
        <el-form-item>
            <el-button type="primary" @click="onSubmit" :loading="loading" >登录</el-button>
        </el-form-item>
    </el-form>

</template>

<script setup>
import { ref, reactive } from 'vue'
import { login } from '../api/apis'
import { Message } from 'element3'
import router from '../router/index'

const loading = ref(false)
const form = reactive({
    name: '',
    password: '',
})

const onSubmit = async () => {
    loading.value = true
    try {
        // 异步登录
        const res = await login(form)
        if (res.code === 200) {
            // 跳转到首页
            router.replace('/')
        } else if (res.code === 403) { // 未校验通过
            Message({
                type: "warning",
                message: res.message
            })
        }
    } catch (error) {
        console.log("errror")
        Message({
            type: 'warning',
            message: error
        })
    } finally {
        // 结束后不再显示loading
        loading.value = false
    }
}


</script>