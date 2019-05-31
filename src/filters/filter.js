
import util from '@/utils/util'

// 时间
const FormatTime = time => {
    if (isNaN(Number(time))) {
        return util.formate((new Date(time)).getTime())
    } else {
        return util.formate((new Date(Number(time))).getTime())
    }
}

export default {
    FormatTime
}
