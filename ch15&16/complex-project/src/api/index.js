import axios from 'axios'
import { getToken } from '../utils/auth'
import { Message } from 'element3'

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
        // Invalid token
        const res = response.data
        if (res.code === 401) {
            Message({
                message: "登录失效，请重新登录",
                type: 'warning'
            })
            return res
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