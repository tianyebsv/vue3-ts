import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface tyeRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface tyeRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: tyeRequestInterceptors<T>
}
