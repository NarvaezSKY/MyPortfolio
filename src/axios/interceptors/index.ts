import { AxiosError, AxiosResponse } from "axios"

export const responseInterceptor = (response: AxiosResponse): AxiosResponse => response

export const responseInterceptorError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}