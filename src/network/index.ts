import tyeRequest from '@/network/request'
import { BASE_URL, TIME_OUT } from './request/config'

const tyeReq = new tyeRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log(err)
    },
    responseInterceptor: (res) => {
      console.log(res)
      return res
    },
    responseInterceptorCatch: (err) => console.log(err)
  }
})

export default tyeReq
