import axios from "axios";

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前,把本地存的token取出,放入请求头传给后端校验,如果过期就重定向到login界面,不过期就重新生成一个新token传给前端
    const token = localStorage.getItem("token");

    config.headers.authorization = `Bearer ${token}`;

    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 拿到后端login接口设置的响应头里的authorization字段并存到localStorage中
    response.headers.authorization &&
      localStorage.setItem("token", response.headers.authorization);

    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么

    if (error.request.status === 401)
      //如果token被删除或过期，重定向到login
    location.href = "/login";
    
    return Promise.reject(error);
  }
);
