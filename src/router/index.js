import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from './home'
import Designer from './designer'
import Case from './case'
import Model from './model'
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: {name: 'home'},
            component: Index,
            children: [...Home, ...Designer, ...Case, ...Model]
        }
    ]
})

// 全局路由进入
router.beforeEach((to, from, next) => {
    next()
})
// 全局路由离开
router.afterEach((to, from) => {

})

export default router
