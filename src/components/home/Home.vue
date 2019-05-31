<template lang="pug">
div.global-wrap
    div.home-container
        div.slider-pane
            el-carousel(indicator-position="outside" height="460px")
                el-carousel-item(v-for="item in sliderList" :key="item.id")
                    img.slider-img(:src="item.url")
        div.process-pane
            ul
                li.process-item(v-for="item in processList" :key="item.id")
                    div.process-item-pane
                        div.process-item-left
                            div {{item.title}}
                            span {{item.desc}}
                        div.process-item-right
                            img(:src="item.url")
        div.content-pane
            div.content-warpper.rapper-width
                div.content-index-header
                    h2.title
                        span.title-before
                        a(herf="https://sz.to8to.com/company/") 深圳装修公司
                        span.title-after
                div.content-index-company
                    a.company-list(v-for="item in componyList" :key="item.id")
                        div.company
                            div.company-bac-url
                                img.bac-img(:src="item.url")
                            div.zzx-company-logo-box
                                img.zzx-company-logo(:src="item.logoUrl")
                        div.detail
                            p.title {{item.title}}
                            div.case-pane
                                span.lable 设计案例: 
                                span.conter {{item.caseNum}}
                                span.lable.build-lable 装修工地: 
                                span.conter {{item.buildingSiteNum}}
                            span.tel-pane 免费预约: 
                                span.telphone {{item.phoneNumber}}
            el-pagination.pagination(background layout="prev, pager, next" :total="100")
</template>
<script>
export default {
    name: 'home',
    data () {
        return {
            // 滚动条距离顶部高度
            isFixed: false,
            sliderList: [
                {
                    id: 1,
                    url: require('../../assets/img/slider1.jpg')
                },
                {
                    id: 2,
                    url: require('../../assets/img/slider2.jpg')
                }
            ],
            processList: [
                {
                    id: '1',
                    title: '免费设计',
                    desc: '获取三份设计方案',
                    url: require('../../assets/img/design.jpg')
                },
                {
                    id: '2',
                    title: '免费报价',
                    desc: '算算装修要花多少钱',
                    url: require('../../assets/img/price.jpg')
                },
                {
                    id: '3',
                    title: '全屋定制',
                    desc: '让家轻松扩大n平方',
                    url: require('../../assets/img/order.jpg')
                },
                {
                    id: '4',
                    title: '装修分期',
                    desc: '按月付款轻松住新家',
                    url: require('../../assets/img/stages.jpg')
                },
                {
                    id: '5',
                    title: '全程质检',
                    desc: '20元/平请老师盯工地',
                    url: require('../../assets/img/quality.jpg')
                }
            ],
            componyList: [
                {
                    id: '1',
                    title: '广一装饰',
                    phoneNumber: '133-4982-3114',
                    url: require('../../assets/img/c1.jpg'),
                    logoUrl: require('../../assets/img/componyLogo1.png'),
                    caseNum: 3053,
                    buildingSiteNum: 92
                },
                {
                    id: '2',
                    title: '晶志装饰',
                    phoneNumber: '133-4982-3115',
                    url: require('../../assets/img/c2.jpg'),
                    logoUrl: require('../../assets/img/componyLogo2.jpg'),
                    caseNum: 3053,
                    buildingSiteNum: 92
                },
                {
                    id: '3',
                    title: '恒泰兴装饰',
                    phoneNumber: '133-4982-3116',
                    url: require('../../assets/img/c3.jpg'),
                    logoUrl: require('../../assets/img/componyLogo3.jpg'),
                    caseNum: 3053,
                    buildingSiteNum: 92
                },
                {
                    id: '4',
                    title: '自然元素装饰',
                    phoneNumber: '133-4982-3118',
                    url: require('../../assets/img/c4.jpg'),
                    logoUrl: require('../../assets/img/componyLogo4.jpg'),
                    caseNum: 3053,
                    buildingSiteNum: 92
                },
                 {
                    id: '5',
                    title: '广一装饰',
                    phoneNumber: '133-4982-3114',
                    url: require('../../assets/img/c1.jpg'),
                    logoUrl: require('../../assets/img/componyLogo1.png'),
                    caseNum: 3053,
                    buildingSiteNum: 92
                },
                {
                    id: '6',
                    title: '晶志装饰',
                    phoneNumber: '133-4982-3115',
                    url: require('../../assets/img/c2.jpg'),
                    logoUrl: require('../../assets/img/componyLogo2.jpg'),
                    caseNum: 3053,
                    buildingSiteNum: 92
                },
                {
                    id: '7',
                    title: '恒泰兴装饰',
                    phoneNumber: '133-4982-3116',
                    url: require('../../assets/img/c3.jpg'),
                    logoUrl: require('../../assets/img/componyLogo3.jpg'),
                    caseNum: 3053,
                    buildingSiteNum: 92
                },
                {
                    id: '8',
                    title: '自然元素装饰',
                    phoneNumber: '133-4982-3118',
                    url: require('../../assets/img/c4.jpg'),
                    logoUrl: require('../../assets/img/componyLogo4.jpg'),
                    caseNum: 3053,
                    buildingSiteNum: 92
                },
                {
                    id: '9',
                    title: '广一装饰',
                    phoneNumber: '133-4982-3114',
                    url: require('../../assets/img/c1.jpg'),
                    logoUrl: require('../../assets/img/componyLogo1.png'),
                    caseNum: 3053,
                    buildingSiteNum: 92
                },
                {
                    id: '10',
                    title: '晶志装饰',
                    phoneNumber: '133-4982-3115',
                    url: require('../../assets/img/c2.jpg'),
                    logoUrl: require('../../assets/img/componyLogo2.jpg'),
                    caseNum: 3053,
                    buildingSiteNum: 92
                },
                {
                    id: '11',
                    title: '恒泰兴装饰',
                    phoneNumber: '133-4982-3116',
                    url: require('../../assets/img/c3.jpg'),
                    logoUrl: require('../../assets/img/componyLogo3.jpg'),
                    caseNum: 3053,
                    buildingSiteNum: 92
                },
                {
                    id: '12',
                    title: '自然元素装饰',
                    phoneNumber: '133-4982-3118',
                    url: require('../../assets/img/c4.jpg'),
                    logoUrl: require('../../assets/img/componyLogo4.jpg'),
                    caseNum: 3053,
                    buildingSiteNum: 92
                },
                 {
                    id: '13',
                    title: '广一装饰',
                    phoneNumber: '133-4982-3114',
                    url: require('../../assets/img/c1.jpg'),
                    logoUrl: require('../../assets/img/componyLogo1.png'),
                    caseNum: 3053,
                    buildingSiteNum: 92
                },
                {
                    id: '14',
                    title: '晶志装饰',
                    phoneNumber: '133-4982-3115',
                    url: require('../../assets/img/c2.jpg'),
                    logoUrl: require('../../assets/img/componyLogo2.jpg'),
                    caseNum: 3053,
                    buildingSiteNum: 92
                },
                {
                    id: '15',
                    title: '恒泰兴装饰',
                    phoneNumber: '133-4982-3116',
                    url: require('../../assets/img/c3.jpg'),
                    logoUrl: require('../../assets/img/componyLogo3.jpg'),
                    caseNum: 3053,
                    buildingSiteNum: 92
                },
                {
                    id: '16',
                    title: '自然元素装饰',
                    phoneNumber: '133-4982-3118',
                    url: require('../../assets/img/c4.jpg'),
                    logoUrl: require('../../assets/img/componyLogo4.jpg'),
                    caseNum: 3053,
                    buildingSiteNum: 92
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
            this.$router.push(url)
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
