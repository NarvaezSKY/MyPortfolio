import axios, { AxiosInstance } from "axios";
import { URL } from "../config";
import { responseInterceptor, responseInterceptorError } from "../interceptors";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: URL,
    headers: {
      Accept: '*/*'
    },
    timeout: 1000000
  })

axiosInstance.interceptors.response.use(responseInterceptor, responseInterceptorError)

export default axiosInstance