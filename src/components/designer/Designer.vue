<template lang="pug">
    div.global-wrap 
        div.designer-container
            div.designer-star-pane.rapper-width
                div.designer-star
                    div.head
                        h3 明星设计师
                        a 如何出现在这里？
                    div.content        
                        i.arrow.el-icon-arrow-right.arrow-left
                        div.star(v-for="item in starDesignerList" :key="item.id")
                            a
                                span.avatar(:style="{'background-image': 'url(' + item.avatar + ')'}")
                                span.order-num {{item.count}}
                                h3.name {{item.name}}
                                p.experience {{item.experience}}
                        i.arrow.el-icon-arrow-left.arrow-right
                div.order-apply
                    span 你的style你做主!
                    el-input.form-input(placeholder="请输入您的称呼" size="mini")
                    el-input.form-input(placeholder="请输入手机号码" size="mini")
                    el-input.form-input(placeholder="请输入地址" size="mini")
                    div.submit 立即申请
            div.rapper-width
                div.designer-header
                    div.style-pane
                        span.desc 风格: 
                        ul
                            li(v-for="item in styleList" :key="item.style")
                                a(:class="{'active': item.style === style}") {{item.name}}
                    div.area-pane
                        span.desc 地区: 
                        ul
                            li(v-for="item in areaList" :key="item.area")
                                a(:class="{'active': item.area === area}") {{item.name}}
                    div.type-pane
                        span.desc 类型: 
                        ul
                            li(v-for="item in typeList" :key="item.type")
                                a(:class="{'active': item.type === type}") {{item.name}}
                    div.sort-pane
                        div.sort-left
                            span.default 默认排序
                            span.line
                            span.orderNum 预约数
                        div.sort-right
                            el-radio-group(v-model="check")
                                el-radio(:label="3") 签约
                                el-radio(:label="6") 同城
                div.designer-content
                    div.designer-pane
                        div.designer(v-for="item in designerList" :key="item.id")
                            div.desiger-info
                                div.main-info
                                    span.avatar(:style="{'background-image': 'url(' + item.avatar + ')'}")
                                    h4.userName {{item.name}}
                                    p.deal-info
                                        span 预约人数
                                        span.count {{item.count}}
                                div.more-info
                                    div.badge-row
                                        span.row-head 平台认证
                                        span.content
                                            span.badge-item.dl-icon 金牌
                                            span.badge-item 实名认证
                                            span.badge-item 质保金
                                            //- span.badge-item 接单大人
                                    div.info-row
                                        span.row-head 基本信息
                                        span.content
                                            span {{item.address}}
                                            span.divider
                                            span {{item.experience}}
                                    div.info-row
                                        span.row-head 擅长风格
                                        span.content {{item.goodStyle}}
                                    div.info-row
                                        span.row-head 服务类型
                                        span.content {{item.serviceType}}
                                div.btn-info
                                    span.advice-btn 联系TA
                            div.desiger-works
                                span.img-warp(v-for="(workItem, index) in item.workList" :key="index" :style="{'background-image': 'url(' + workItem + ')'}")
                                    span.bg
                            div.desiger-btn 
                                span 查看TA主页
                                span.icon.el-icon-caret-right
                    el-pagination.pagination(background layout="prev, pager, next" :total="100")
</template>
<script>
/**
 * @description 设计师
 */
export default {
    name: 'designer',
    data () {
        return {
            check: 3,
            style: 'all',
            area: 'all',
            type: 'all',
            sortType: '',
            styleList: [
                {
                   name: '不限',
                   style: 'all'
                },
                {
                   name: '工装',
                   style: 'frock'
                },
                {
                   name: '现代简约',
                   style: 'simple'
                },
                {
                   name: '欧式',
                   style: 'frock1'
                },
                {
                   name: '田园',
                   style: 'simple1'
                },
                {
                   name: '地中海',
                   style: 'frock2'
                },
                {
                   name: '简欧',
                   style: 'simple2'
                },
                {
                   name: '日式',
                   style: 'frock3'
                },
                {
                   name: '美式',
                   style: 'simple3'
                },
                {
                   name: '北欧',
                   style: 'frock4'
                },
                {
                   name: '混搭',
                   style: 'simple4'
                },
                {
                   name: '简美',
                   style: 'frock5'
                },
                {
                   name: '摩登',
                   style: 'simple5'
                }
            ],
            areaList: [
                {
                   name: '不限',
                   area: 'all'
                },
                {
                   name: '江苏',
                   area: 'frock'
                },
                {
                   name: '北京',
                   area: 'simple'
                }
            ],
            typeList: [
                {
                   name: '全部',
                   type: 'all'
                },
                {
                   name: '设计师',
                   type: 'frock'
                },
                {
                   name: '工作室',
                   type: 'simple'
                }
            ],
            starDesignerList: [
                {
                    id: 1,
                    name: '袁星',
                    count: 6235,
                    experience: '10年工作经验',
                    avatar: 'https://qhyxpicoss.kujiale.com/avatars/2017/11/21/origin4865081222722023863.jpg?x-oss-process=image/resize,m_fill,w_80,h_80/format,webp'
                },
                {
                    id: 2,
                    name: '穆建光',
                    count: 1235,
                    experience: '10年工作经验',
                    avatar: 'https://qhyxpicoss.kujiale.com/avatars/2017/01/14/origin397220154918609795.jpg?x-oss-process=image/resize,m_fill,w_80,h_80/format,webp'
                },
                {
                    id: 3,
                    name: '王芬芬',
                    count: 6235,
                    experience: '10年工作经验',
                    avatar: 'https://qhyxpicoss.kujiale.com/avatars/2016/09/02/origin7843263054263599043.jpg?x-oss-process=image/resize,m_fill,w_80,h_80/format,webp'
                },
                {
                    id: 4,
                    name: '谷音',
                    count: 6235,
                    experience: '10年工作经验',
                    avatar: 'https://qhyxpicoss.kujiale.com/avatars/2018/12/29/origin81881081547623629.jpg?x-oss-process=image/resize,m_fill,w_80,h_80/format,webp'
                },
                {
                    id: 5,
                    name: '胡月平',
                    count: 6235,
                    experience: '10年工作经验',
                    avatar: 'https://user-platform-oss.kujiale.com/avatars/2019/04/15/SXL6SYWOS3UJGZ4XLQM6YMY8.png?x-oss-process=image/resize,m_fill,w_80,h_80/format,webp'
                },
                {
                    id: 6,
                    name: '张思倩',
                    count: 6235,
                    experience: '10年工作经验',
                    avatar: 'https://qhyxpicoss.kujiale.com/avatars/2016/11/27/origin8131665129016118248.jpg?x-oss-process=image/resize,m_fill,w_80,h_80/format,webp'
                }
            ],
            designerList: [
                {
                    id: 1,
                    name: '袁星',
                    count: 6235,
                    address: '广东 广州',
                    experience: '10年工作经验',
                    goodStyle: '工装、现代简约、新中式、北欧、欧式、田园、地中海、简欧、日式、美式、混搭、简美、后现代',
                    serviceType: '未知',
                    avatar: 'https://qhyxpicoss.kujiale.com/avatars/2017/11/21/origin4865081222722023863.jpg?x-oss-process=image/resize,m_fill,w_80,h_80/format,webp',
                    workList: [
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/04/L3D206S8ENDIHJHS2YUI5L7ELUF3P3XA888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/08/L3D187S8ENDIHG4NPIUI5L7GLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/03/L3D124S8ENDIHKEAVQUI5NFSLUF3P3WE888_4000x3000.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/03/L3D124S8ENDIHKEAVQUI5NFSLUF3P3WE888_4000x3000.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp'
                    ]
                },
                {
                    id: 2,
                    name: '穆建光',
                    count: 1235,
                    address: '广东 广州',
                    experience: '10年工作经验',
                    goodStyle: '工装、现代简约、新中式、北欧、欧式、田园、地中海、简欧、日式、美式、混搭、简美、后现代',
                    serviceType: '未知',
                    avatar: 'https://qhyxpicoss.kujiale.com/avatars/2017/01/14/origin397220154918609795.jpg?x-oss-process=image/resize,m_fill,w_80,h_80/format,webp',
                    workList: [
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/04/L3D206S8ENDIHJHS2YUI5L7ELUF3P3XA888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/08/L3D187S8ENDIHG4NPIUI5L7GLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/03/L3D124S8ENDIHKEAVQUI5NFSLUF3P3WE888_4000x3000.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/08/L3D187S8ENDIHG4NPIUI5L7GLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp'
                    ]
                },
                {
                    id: 3,
                    name: '王芬芬',
                    count: 1235,
                    address: '广东 广州',
                    experience: '10年工作经验',
                    goodStyle: '工装、现代简约、新中式、北欧、欧式、田园、地中海、简欧、日式、美式、混搭、简美、后现代',
                    serviceType: '未知',
                    avatar: 'https://qhyxpicoss.kujiale.com/avatars/2016/09/02/origin7843263054263599043.jpg?x-oss-process=image/resize,m_fill,w_80,h_80/format,webp',
                    workList: [
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/04/L3D206S8ENDIHJHS2YUI5L7ELUF3P3XA888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/08/L3D187S8ENDIHG4NPIUI5L7GLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/03/L3D124S8ENDIHKEAVQUI5NFSLUF3P3WE888_4000x3000.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/08/L3D187S8ENDIHG4NPIUI5L7GLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp'
                    ]
                },
                {
                    id: 4,
                    name: '谷音',
                    count: 1235,
                    address: '广东 广州',
                    experience: '10年工作经验',
                    goodStyle: '工装、现代简约、新中式、北欧、欧式、田园、地中海、简欧、日式、美式、混搭、简美、后现代',
                    serviceType: '未知',
                    avatar: 'https://qhyxpicoss.kujiale.com/avatars/2018/12/29/origin81881081547623629.jpg?x-oss-process=image/resize,m_fill,w_80,h_80/format,webp',
                    workList: [
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/04/L3D206S8ENDIHJHS2YUI5L7ELUF3P3XA888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/08/L3D187S8ENDIHG4NPIUI5L7GLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/03/L3D124S8ENDIHKEAVQUI5NFSLUF3P3WE888_4000x3000.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/08/L3D187S8ENDIHG4NPIUI5L7GLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp'
                    ]
                },
                {
                    id: 5,
                    name: '胡月平',
                    count: 1235,
                    address: '广东 广州',
                    experience: '10年工作经验',
                    goodStyle: '工装、现代简约、新中式、北欧、欧式、田园、地中海、简欧、日式、美式、混搭、简美、后现代',
                    serviceType: '未知',
                    avatar: 'https://user-platform-oss.kujiale.com/avatars/2019/04/15/SXL6SYWOS3UJGZ4XLQM6YMY8.png?x-oss-process=image/resize,m_fill,w_80,h_80/format,webp',
                    workList: [
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/04/L3D206S8ENDIHJHS2YUI5L7ELUF3P3XA888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/08/L3D187S8ENDIHG4NPIUI5L7GLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/03/L3D124S8ENDIHKEAVQUI5NFSLUF3P3WE888_4000x3000.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/08/L3D187S8ENDIHG4NPIUI5L7GLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp'
                    ]
                },
                {
                    id: 6,
                    name: '张思倩',
                    count: 1235,
                    address: '广东 广州',
                    experience: '10年工作经验',
                    goodStyle: '工装、现代简约、新中式、北欧、欧式、田园、地中海、简欧、日式、美式、混搭、简美、后现代',
                    serviceType: '未知',
                    avatar: 'https://qhyxpicoss.kujiale.com/avatars/2016/11/27/origin8131665129016118248.jpg?x-oss-process=image/resize,m_fill,w_80,h_80/format,webp',
                    workList: [
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/04/L3D206S8ENDIHJHS2YUI5L7ELUF3P3XA888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/08/L3D187S8ENDIHG4NPIUI5L7GLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/03/L3D124S8ENDIHKEAVQUI5NFSLUF3P3WE888_4000x3000.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/08/L3D187S8ENDIHG4NPIUI5L7GLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp'
                    ]
                },
                {
                    id: 7,
                    name: '文秋竹子',
                    count: 1235,
                    address: '广东 广州',
                    experience: '10年工作经验',
                    goodStyle: '工装、现代简约、新中式、北欧、欧式、田园、地中海、简欧、日式、美式、混搭、简美、后现代',
                    serviceType: '未知',
                    avatar: 'https://qhyxpicoss.kujiale.com/avatars/2016/11/08/origin1314745143074671293.jpg?x-oss-process=image/resize,m_fill,w_80,h_80/format,webp',
                    workList: [
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/04/L3D206S8ENDIHJHS2YUI5L7ELUF3P3XA888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/08/L3D187S8ENDIHG4NPIUI5L7GLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/03/L3D124S8ENDIHKEAVQUI5NFSLUF3P3WE888_4000x3000.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/08/L3D187S8ENDIHG4NPIUI5L7GLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp'
                    ]
                },
                {
                    id: 8,
                    name: '宋博',
                    count: 1235,
                    address: '广东 广州',
                    experience: '10年工作经验',
                    goodStyle: '工装、现代简约、新中式、北欧、欧式、田园、地中海、简欧、日式、美式、混搭、简美、后现代',
                    serviceType: '未知',
                    avatar: 'https://qhyxpicoss.kujiale.com/avatars/LAVMAPAKQQOBWEBIAAAAACQ8.jpg?x-oss-process=image/resize,m_fill,w_80,h_80/format,webp',
                    workList: [
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/04/L3D206S8ENDIHJHS2YUI5L7ELUF3P3XA888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/08/L3D187S8ENDIHG4NPIUI5L7GLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/03/L3D124S8ENDIHKEAVQUI5NFSLUF3P3WE888_4000x3000.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/08/L3D187S8ENDIHG4NPIUI5L7GLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp'
                    ]
                },
                {
                    id: 9,
                    name: '张丹华',
                    count: 1235,
                    address: '广东 广州',
                    experience: '10年工作经验',
                    goodStyle: '工装、现代简约、新中式、北欧、欧式、田园、地中海、简欧、日式、美式、混搭、简美、后现代',
                    serviceType: '未知',
                    avatar: 'https://qhyxpicoss.kujiale.com/avatars/2018/04/15/origin8800102421664678309.jpg?x-oss-process=image/resize,m_fill,w_80,h_80/format,webp',
                    workList: [
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/04/L3D206S8ENDIHJHS2YUI5L7ELUF3P3XA888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/08/L3D187S8ENDIHG4NPIUI5L7GLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/03/L3D124S8ENDIHKEAVQUI5NFSLUF3P3WE888_4000x3000.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/08/L3D187S8ENDIHG4NPIUI5L7GLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp'
                    ]
                },
                {
                    id: 10,
                    name: '徐瑞林',
                    count: 1235,
                    address: '广东 广州',
                    experience: '10年工作经验',
                    goodStyle: '工装、现代简约、新中式、北欧、欧式、田园、地中海、简欧、日式、美式、混搭、简美、后现代',
                    serviceType: '未知',
                    avatar: 'https://qhyxpicoss.kujiale.com/avatars/2016/07/20/origin2555881042419798502.jpg?x-oss-process=image/resize,m_fill,w_80,h_80/format,webp',
                    workList: [
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/04/L3D206S8ENDIHJHS2YUI5L7ELUF3P3XA888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/08/L3D187S8ENDIHG4NPIUI5L7GLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/03/L3D124S8ENDIHKEAVQUI5NFSLUF3P3WE888_4000x3000.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp',
                        'https://qhrenderpicoss.kujiale.com/r/2019/05/08/L3D187S8ENDIHG4NPIUI5L7GLUF3P3WW888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_268,h_268/format,webp'
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
 %header-style {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    .desc {
        font-size: $fontsize14;
        font-weight: 900;
    }
    ul {
        padding-left: 0;
        list-style: none;
        display: flex;
        align-items: center;
        li {
            padding-left: 20px;
            a {
                color: $fontContentGray;
                padding: 2px 5px;
                border-radius: 5px;
                cursor: pointer;
                &.active {
                    background-color: $themeColor;
                    color: #fff;
                }
            }
        }
    }
}
.designer-container {
    padding-top: 115px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: $bacGroundColor;
    .designer-star-pane {
        display: flex;
        .designer-star {
            margin-top: 20px;
            background: #fff;
            position: relative;
            height: 270px;
            padding: 24px 30px 34px;
            box-sizing: border-box;
            margin-bottom: 20px;
            .head {
                display: flex;
                justify-content:space-between;
            }
            .content {
                margin: 30px 55px;
                overflow: hidden;
                width: 1022px;
                font-size: 0;
                display: flex;
                align-self: center;
                .arrow {
                    position: absolute;
                    top: 116px;
                    display: block;
                    text-align: center;
                    font-size: 26px;
                    line-height: 26px;
                    color: #d3d3d3;
                    cursor: pointer;
                    transform: scaleX(-1);
                    font-weight: 600;
                }
                .arrow-left {
                    left: 25px;
                }
                .arrow-right {
                    right: 25px;
                }
                .star {
                    display: inline-block;
                    position: relative;
                    margin-right: 70px;
                    width: 112px;
                    text-align: center;
                    .avatar {
                        width: 110px;
                        height: 110px;
                        border-radius: 55px;
                        overflow: hidden;
                        background-size: cover;
                        display: inline-block;
                    }
                    .order-num {
                        position: absolute;
                        top: 94px;
                        left: 50%;
                        width: 86px;
                        max-width: 86px;
                        height: 18px;
                        line-height: 17px;
                        margin-left: -43px;
                        font-size: 12px;
                        color: #fff;
                        background: #fa0;
                        border-radius: 10px;
                        display: block;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                    .name {
                        margin: 12px 0 5px;
                        max-width: 112px;
                        color: #333;
                        line-height: 16px;
                        display: block;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        font-size: 16px;
                    }
                    .experience {
                        font-size: 12px;
                        color: #333;
                    }
                }
            }
        }
        .order-apply {
            margin-left: 20px;
            margin-top: 20px;
            min-width: 250px;
            height: 270px;
            padding: 24px 30px 34px;
            box-sizing: border-box;
            margin-bottom: 20px;
            // background: #fff;
            background: #98eff0;
            .form-input {
                margin-top: 15px;
            }
            .submit {
                margin-top: 20px;
                width: 100%;
                height: 36px;
                line-height: 36px;
                text-align: center;
                border: none;
                padding: 0;
                outline: none;
                display: block;
                background: #ffda36;
                cursor: pointer;
                font-size: 14px;
                color: #0e5a7c;
                font-family: '微软雅黑';
                font-weight: bold;
            }
        }
    }
    .designer-header {
        margin-top: 20px;
        background-color: #fff;
        .style-pane{
            @extend %header-style;
        }
        .area-pane{
            @extend %header-style;
        }
        .type-pane {
            @extend %header-style;
        }
        .sort-pane {
            border-top: 1px solid $borderColor;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            .sort-left {
                .default {
                    cursor: pointer;
                    color: $themeColor;
                }
                .orderNum {
                    cursor: pointer;
                    color: $fontContent;
                }
                .line {
                    display: inline-block;
                    height: 12px;
                    width: 2px;
                    background-color: #666;
                    margin: 0 15px;
                }
            }
        }
    }
    .designer-content {
        margin-top: 20px;
        padding-bottom: 20px;
        .designer {
            height: 268px;
            background: #fff;
            margin-bottom: 20px;
            padding: 30px 30px 30px 326px;
            position: relative;
            cursor: pointer;
            .desiger-info {
                position: absolute;
                left: 30px;
                top: 30px;
                width: 266px;
                height: 268px;
                .main-info {
                    border-bottom: 1px solid #eee;
                    padding: 0 0 0 96px;
                    height: 95px;
                    position: relative;
                    .avatar {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 80px;
                        height: 80px;
                        border-radius: 40px;
                        overflow: hidden;
                        background-size: cover;
                    }
                    .userName {
                        padding: 12px 0;
                        font-size: 22px;
                        line-height: 22px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-weight: 600;
                        cursor: pointer;
                    }
                    .deal-info {
                        font-size: 14px;
                        line-height: 14px;
                        color: #999;
                        .count {
                            padding-left: 5px;
                            color: $themeColor;
                        }
                    }
                }
                .more-info {
                    margin-top: 12px;
                    .badge-row {
                        margin-bottom: 4px;
                        .row-head {
                            line-height: 16px;
                            vertical-align: top;
                            display: inline-block;
                            color: #bbb;
                            width: 74px;
                            font-size: 12px;
                        }
                        .content {
                            .badge-item {
                                background: #90aad6;
                                color: #fff;
                                font-size: 12px;
                                height: 18px;
                                line-height: 17px;
                                border-radius: 8px;
                                overflow: hidden;
                                display: inline-block;
                                margin: 0 8px 2px 0;
                                padding: 0 7px;
                            }
                            .dl-icon {
                                background: #f60;
                            }
                        }
                    }
                    .info-row {
                        font-size: 12px;
                        line-height: 12px;
                        margin-bottom: 11px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        .row-head {
                            display: inline-block;
                            color: #bbb;
                            width: 74px;
                        }
                        .content {
                            .divider {
                                display: inline-block;
                                height: 14px;
                                border-left: 1px solid #ddd;
                                margin: -1px 12px;
                                vertical-align: middle;
                            }
                        }
                    }
                }
                .btn-info {
                    text-align: center;
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    .advice-btn {
                        border: 1px solid $themeColor;
                        color: $themeColor;
                        padding: 5px 30px;
                        &:hover {
                            background: $themeColor;
                            color: #fff;
                        }
                    }
                }
            }
            .desiger-works {
                .img-warp {
                    display: inline-block;
                    margin-right: 10px;
                    width: 265px;
                    height: 268px;
                    background-size: cover;
                    position: relative;
                    cursor: pointer;
                    .bg {
                        display: inline-block;
                        width: 268px;
                        height: 268px;
                        background: #fff;
                        opacity: .2;
                        transition: opacity .3s;
                    }
                }
            }
            .desiger-btn {
                width: 130px;
                height: 54px;
                padding-left: 10px;
                font-size: 16px;
                position: absolute;
                right: 0;
                top: 200px;
                background: $themeColor;
                color: #fff;
                z-index: 1;
                line-height: 54px;
                text-align: center;
                display: none;
                .icon {
                    margin-left: 4px;
                }
            }
            &:hover {
                box-shadow: 0 5px 10px rgba(0,0,0,.1);
                .desiger-btn {
                    display: block;
                }  
            }
        }
        .pagination {
            display: flex;
            justify-content: flex-end;
        }
    }
}
</style>
