<template lang="pug">
div.global-wrap 
    div.header.header-nav(:class="{'move-down': isFixed}")
        div.header-first-box
            div.header-nav-first.rapper-width
                div.nav-first-left 
                    div.city-pane
                        span 深圳
                        span.switch-city [切换]
                div.nav-first-right 
                    div.login-pane
                        span 登录
                        span 注册
        div.header-nav-content
            div.header-nav-box.rapper-width
                div.nav-box-left
                    i.icon-home
                ul.nav-url-pane
                    li(v-for="item in menuList" :key="item.url")
                        a(@click="goMenu(item.url)")
                            span.nav-span(:class="{'active': $route.path === item.url}") {{item.name}}
                div.nav-box-right
                    div.search-pane
                        el-collapse-transition
                            el-input.inner-search-input(placeholder="请输入查询"  v-model="searchTxt" size="small" )
                        el-button.search(icon="el-icon-search" @click="intoSearchPage")
    router-view
</template>
<script>
export default {
    name: 'home',
    data () {
        return {
            // 滚动条距离顶部高度
            isFixed: false,
            searchTxt: '',
            showSearchBar: false,
            menuList: [
                {
                    name: '首页',
                    url: '/home'
                },
                {
                    name: '设计师',
                    url: '/designer'
                },
                {
                    name: '艺术集',
                    url: '/case'
                },
                {
                    name: '模型库',
                    url: '/model'
                },
                {
                    name: '移动端',
                    url: '/app'
                }
            ]
        }
    },
    created () {
    },
    methods: {
        handleScroll () {
            // 滚动条滚动距离
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // 吸顶元素距离顶部的距离
            let offsetTop = document.querySelector('.header-nav-content').offsetTop
            this.isFixed = scrollTop > offsetTop ? true : false
        },
        /**
         * @description 菜单跳转
         * @param [url] 
         */
        goMenu (url) {
            if (url === '/app') return
            this.$router.push(url)
        },
        intoSearchPage () {
            this.showSearchBar = true
        }
    },
    mounted () {
        // 监听（绑定）滚轮滚动事件
        window.addEventListener('scroll', this.handleScroll, true)
    },
    destroyed () {
        // 离开页面(清除)滚轮滚动事件
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>
<style lang="scss" scoped>
</style>
