import axios from 'axios'
import { getToken } from '../utils/auth'
import { Message } from 'element3'
import router from '../router'

const service = axios.create({
    baseURL: '/',
    timeout: 5000,
})

// 请求拦截
service.interceptors.request.use(
    config => {
        const token = getToken()
        if (token) {
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    error => {
        console.log(error, "Have Error") // for debug
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data
        // Invalid token
        if (res.code === 401) {
            Message({
                message: "登录失效，请重新登录",
                type: 'warning'
            })
            console.log(res)
            return router.push('/login')
            // return Promise.reject(new Error(res.data) || "Error")
        }

        if (res.code !== 200) {
            console.log("接口信息报错", res.message)
            return Promise.reject(new Error(res.message || "warning"))
        } else {
            return res
        }
    },
    error => {
        console.log('接口信息报错' + error)
        return Promise.reject(error)
    }
)

export default service