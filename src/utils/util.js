/**
 * UTC转换时间格式
 * @param {*} date 
 * @param {*} formateStr 
 */
const formate = (date, formateStr = 'yyyy-MM-dd  hh:mm:ss', isNeed) => {
    let timestrap = typeof date === 'number' ? date : date - '0'
    if (isNeed) {
        timestrap = timestrap * 1000
    }
        
    timestrap = new Date(timestrap)  
    const o = {
        'M+': timestrap.getMonth() + 1,                    //月份
        'd+': timestrap.getDate(),                         //日
        'h+': timestrap.getHours(),                        //小时
        'm+': timestrap.getMinutes(),                      //分
        's+': timestrap.getSeconds(),                      //秒
        'q+': Math.floor((timestrap.getMonth() + 3) / 3),  //季度
        'S': timestrap.getMilliseconds()                   //毫秒
    }
    if (/(y+)/.test(formateStr)) {
        formateStr = formateStr.replace(RegExp.$1, (timestrap.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
        
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(formateStr)) {
            formateStr = formateStr.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))  
        }        
    }
    return formateStr
}

export default {
    formate
}
