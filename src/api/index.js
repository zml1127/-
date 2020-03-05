import axios from 'axios'
var service = axios.create({
    // baseURL: "/abc",  //所有的请求都会带上.api。（必须是axios发的请求）
    "content-type": "application/json",
    timeout: 5000  //超5s就超时
})
service.interceptors.request.use((config) => { // 请求拦截器
    // console.log("发请求了，带上token")
    // console.log(555,config)
    if(sessionStorage.getItem("token")){
        config.headers["token"] = sessionStorage.getItem("token")
    }
    // config.headers["csrfToken"] = sessionStorage.getItem("token")
    return config;
})
service.interceptors.response.use((res) => { //响应拦截器
    if(res.data.status === -1){ //token验证失败
        // window.location.href="/login"
        return res.data
    }
     return res
})

export default service