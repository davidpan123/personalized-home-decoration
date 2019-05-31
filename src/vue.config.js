/**
 * @description Global config for Vue
 */
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import filters from '@/filters/filter'

// 注入过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.use(ElementUI)
export default Vue
