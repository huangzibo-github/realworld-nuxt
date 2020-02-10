import axios from 'axios'

const request = axios.create({
    baseURL: 'http://conduit.productionready.io'
})

// 请求拦截器

// 响应拦截器

export default request