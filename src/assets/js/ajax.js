/**
 * axios全局配置，包括验证校验及错误处理
 */
import axios from 'axios'
import router from '@/router'
// import Cookies from 'js-cookie'
// import api from '@/util/api'

// // 超时设置
const service = axios.create({
    timeout: 30 * 1000 // 请求超时时间
})

// // baseURL
axios.defaults.baseURL = 'http://ibc.com'
// axios.defaults.baseURL = 'https://web.ibclubs.com/api/v1'
axios.defaults.headers.post['Content-Type'] = 'application/form-data;charset=UTF-8'
// axios.defaults.headers.get['Content-Type'] = 'application/form-data;charset=UTF-8';
// axios.defaults.headers.get['Access-Control-Allow-Headers'] = 'content-type';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

// axios.defaults.withCredentials = true

// http request 拦截器
// 每次请求都为http头增加Authorization字段，其内容为token
service.interceptors.request.use(config => {
    // config.cancelToken = new CancelToken(function executor(c) {
    //     cancel = c;
    // })
    // checkToken(function(){
    // if (Cookies.get('token')) {
    //     Auth.setLoginStatus()
    //     config.headers.Authorization = `Bearer ${Cookies.get('token')}`
    // }
    // })
    if (!config.baseURL)  config.baseURL = '/api/public/api/v1'
    return config
},
err => {
    return Promise.reject(err)
}
)

// http response 拦截器
// 针对响应代码确认跳转到对应页面
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        if (error.response) {
            // switch (error.response.status) {
            //     // case 401:
            //     //     router.push('error/401');
            //     // case 403:
            //     //     router.push('error/403');
            //     default:
            //         Message({message: '服务器错误！', type: 'error'});
            // }
            if (error.response.status == 401) {
                // Message({ message: '请您登陆！', type: 'error' })
                router.push('/login')
            }
            return Promise.reject(error.response.data)
        }
    }
)

export default service