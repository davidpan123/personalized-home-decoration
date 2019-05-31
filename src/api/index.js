import Instance from './instance'
import Url from './url'
import Qs from 'qs'

export default {
    get (url, data, rmEnd = false, responseType = 'json', headers = {}) {
        let xhrInfo = this._transformUrl(url, data, rmEnd)
        return Instance({
            url: xhrInfo.url,
            method: 'get',
            params: xhrInfo.data,
            paramsSerializer: function (params) {
                return Qs.stringify(params)
            },
            responseType,
            headers
        })
    },
    post (url, data, rmEnd = false, headers = {}) {
        let xhrInfo = this._transformUrl(url, data, rmEnd)

        return Instance({
            url: xhrInfo.url,
            method: 'post',
            data: xhrInfo.data,
            headers
        })
    },
    put (url, data, rmEnd = false, headers = {}) {
        let xhrInfo = this._transformUrl(url, data, rmEnd)

        return Instance({
            url: xhrInfo.url,
            method: 'put',
            data: xhrInfo.data,
            headers
        })
    },
    patch (url, data, rmEnd = false, headers = {}) {
        let xhrInfo = this._transformUrl(url, data, rmEnd)

        return Instance({
            url: xhrInfo.url,
            method: 'patch',
            data: xhrInfo.data,
            headers
        })
    },
    delete (url, data, rmEnd = false, headers = {}) {
        let xhrInfo = this._transformUrl(url, data, rmEnd)

        return Instance({
            url: xhrInfo.url,
            method: 'delete',
            params: xhrInfo.data,
            headers
        })
    },
    /**
     * @description 请求前转换url以及data 1. key(:id)替换为具体的值 2. 去除替换值
     * @param {*} url
     * @param {*} data
     */
    _transformUrl (origin_url, data, rmEnd) {
        let url = origin_url
        // origin_url在url列表(./modules/*.url.js)中配置，以配置的url为主;否则以origin_url为url
        if (Url[origin_url])
            url = Url[origin_url]
        let reg = /\:[\w_\-.]+/g
        let copiedUrl = url
        let copiedData = JSON.parse(JSON.stringify(data))

        let matched = copiedUrl.match(reg)
        /**
         * 判断目标字符串是否以指定字符串结尾
         * @param {*} endStr
         */
        String.prototype.endWith = function (endStr) {
            let d = this.length - endStr.length

            return (d >= 0 && this.lastIndexOf(endStr) === d)
        }
        // 处理指定参数
        if (matched && matched.length) {
            matched.forEach(
                item => {
                    let key = item.replace(/\:/, '')
                    let value = ''
                    if (copiedData[key] !== undefined) {
                        value = copiedData[key]
                        delete copiedData[key]
                    }
                    // if (copiedUrl.endWith(item))
                    //     copiedUrl = copiedUrl.replace(item, value)
                    // else
                    // 原有判断冗余，且影响url query添加变量
                    copiedUrl = copiedUrl.replace(item, value)
                }
            )
        }
        // 去除重复冗余的/
        copiedUrl = copiedUrl.replace(/\/\//g, '/')
        // 去除末尾冗余的/，可选
        if (rmEnd && copiedUrl.match(/.+\/$/))
            copiedUrl = copiedUrl.substr(0, copiedUrl.length - 1)
        return {
            url: copiedUrl,
            data: copiedData
        }
    }
}
