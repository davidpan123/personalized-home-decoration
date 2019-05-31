import axios from 'axios'

const instance = axios.create({
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
})

instance.interceptors.request.use(
    config => {
        // 没有token跳转登录
        return config
    }, err => {
        return Promise.reject(err)
    }
)

instance.interceptors.response.use(
    response => {
        if (response.headers && response.headers['x-subject-token'] && response.headers['x-subject-token'] !== 'None')
            localStorage.setItem('authenticationToken', response.headers['x-subject-token'])

        return response.data
    }, err => {
        return Promise.reject(err)
    }
)

export default instance
