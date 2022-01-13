import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { cookieGet, cookieSet } from "@/utils/cookies";

const VITE_API_URL = import.meta.env.VITE_API_URL as string;

const errorStatus: { [k in string]: string } = {
  "400": "请求错误",
  "401": "未授权，请登录",
  "403": "拒绝访问",
  "404": "请求地址出错",
  "408": "请求超时",
  "500": "服务器内部错误",
  "501": "服务未实现",
  "502": "网关错误",
  "503": "服务不可用",
  "504": "网关超时",
  "505": "HTTP版本不受支持",
};

const request = axios.create({
  baseURL: VITE_API_URL,
  timeout: 2000,
});

// 错误处理
const handlerError = (error: AxiosError) => {
  const { response } = error;
  const status = response?.status || "";
  const message = errorStatus[status];
  const data = response?.data;

  if (data.message) {
    // Toast({ message: data.message, position: "bottom" });
  } else {
    // Toast({ message, position: "bottom" });
  }
  return {
    errData: data,
    message,
    fail: true,
  };
};

request.interceptors.request.use((config: AxiosRequestConfig) => {
  const url = config?.url || "";

  if (config.headers && url.indexOf("sign/in") == -1) {
    const token = cookieGet("token") as string;
    config.headers.Authorization = token;
  }

  return config;
}, handlerError);

request.interceptors.response.use((response) => {
  const data = response?.data;
  const code = data?.code as string;

  console.log(code, "code");

  if (code != "0") {
    let msg = data?.msg || "未登录或者登录失效";
    if (data.data) {
      msg = data.data.msg || msg;
    }

    // msg && Toast({ message: msg, position: "bottom" });

    if ([401, 530].includes(+data.code)) {
      cookieSet("token", "");
      location.href = "/login";
    }
  }

  return response;
}, handlerError);

export default request;
