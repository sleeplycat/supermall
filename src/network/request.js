import axios from 'axios'


export function request(config) {

  // 1建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/m3',
    timeout: 5000
  })

  // 2 axios拦截器
  instance.interceptors.request.use(config => {
    // console.log(config)
    // 2.1 请求拦截的作用
    // 可以把拦截下来的内容进行修改再传出去,比如修改headers等
    // 比如每次发生请求时都希望在界面中显示一个请求的图标
    // 某些网络请求,比如登录,是必须携带一些特殊的信息token
    // 拦截之后必须要返回不然后面就得不到config


    return config
  }, err => {
    console.log(err)
  });
  // 2.2 响应拦截
  instance.interceptors.response.use(res=>{
    // console.log(res)
    return res.data
  }, err =>{
    console.log(err)
  })

  // 发生真正的网络请求
  return instance(config)

}

