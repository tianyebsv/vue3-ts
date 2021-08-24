import type { AxiosInstance } from 'axios'
import axios from 'axios'
import type { tyeRequestConfig, tyeRequestInterceptors } from './type'

class TyeRequest {
  instance: AxiosInstance
  interceptors?: tyeRequestInterceptors

  constructor(config: tyeRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)

    // 保存基本信息
    this.interceptors = config.interceptors

    // 使用拦截器，从config取出来的拦截器是对应实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //给所有请求响应添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('主拦截器。。。请求拦截')
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('响应成功拦截器。。。主拦截器')
        return res
      },
      (error) => {
        return error
      }
    )
  }
  request<T>(config: tyeRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          //单个请求的拦截处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
            console.log('请求响应成功')
            resolve(res)
          }
        })
        .catch((err) => {
          reject(err)
          return err
        })
    })
  }
  get<T = any>(config: tyeRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: tyeRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: tyeRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: tyeRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default TyeRequest
