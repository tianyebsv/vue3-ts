import axios from 'axios'
import { BASE_URL, TIME_OUT } from '@/network/request/config'

axios
  .request({
    baseURL: BASE_URL,
    url: '/test',
    method: 'GET'
  })
  .then((res) => {
    console.log(res)
  })
// 拦截器，请求
axios.interceptors.request.use(
  (res) => {
    console.log(res)
    return res
  },
  (err) => {
    console.log(err)
  }
)
// 拦截器，响应
axios.interceptors.response.use(
  (res) => {
    console.log(res)
    return res
  },
  (error) => {
    console.log(error)
  }
)
