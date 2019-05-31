<template lang="pug">
div.case-container
    vueWaterfallEasy#waterfall.case-pane(ref="waterfall" :imgsArr="imgsArr" :imgWidth="340" :gap="30" :maxCols="4" @scrollReachBottom="fetchImgsData")
        template(slot-scope="props")
            div.case-info
                p.case-name 万达饭店
                div.designer-info
                    div.designer-info-left
                        img.avater(src="https://qhyxpicoss.kujiale.com/avatars/2018/03/19/origin5466863111312800864.jpg@!60x60")
                        span.name 艾瑞工作室
                    div.designer-info-right
                        span
                            i.el-icon-view
                            span 233
                        span.praise
                            i.icon-praise
                            span 1
    div.back-top(@click="smoothScroll" :class="{'isShow': isShow}") 
        i.el-icon-top 
        span.back Top
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
    name: 'Case',
    data () {
        return {
            isShow: false,
            waterfallDom: null,
            imgsArr: [],
            randomList: [
                'https://qhrenderpicoss.kujiale.com/r/2019/03/09/L3D121S8ENDIGOMHKAUI5MJEXPT3P3X4888_1600x1200.jpg?x-oss-process=image/resize,m_fill,w_340,h_285/format,webp',
                'https://qhrenderpicoss.kujiale.com/r/2019/04/29/L3D187S8ENDIHMYT2YUI5NYALUF3P3W4888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_340,h_325/format,webp',
                'https://qhrenderpicoss.kujiale.com/r/2019/05/26/L3D123S8ENDIH277RAUI5L7ELUF3P3WE888_3200x2400.jpg?x-oss-process=image/resize,m_fill,w_340,h_345/format,webp',
                'https://qhrenderpicoss.kujiale.com/r/2019/02/12/L3D187S8ENDIF6YAUAUI5MI27M23P3WO888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_340,h_255/format,webp',
                'https://qhrenderpicoss.kujiale.com/r/2019/05/22/L3D206S8ENDIH55ROYUI5NYALUF3P3WE888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_340,h_485/format,webp',
                'https://qhrenderpicoss.kujiale.com/r/2019/02/14/L3D206S8ENDIF5MJJQUI5NZUC2P3P3XO888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_340,h_315/format,webp',
                'https://qhrenderpicoss.kujiale.com/r/2019/05/17/L3D204S8ENDIHAZOCYUI5NFSLUF3P3WW888_1080x1080.jpg?x-oss-process=image/resize,m_fill,w_340,h_485/format,webp',
                'https://qhrenderpicoss.kujiale.com/r/2019/04/30/L3D206S8ENDIHMEGGQUI5NYALUF3P3X6888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_340,h_385/format,webp'
            ]
        }
    },
    created () {
        this.imgsArr = this.initImgsArr(0, 12)
    },
    methods: {
        initImgsArr (n, m) { //num 图片数量
            let arr = []
            for (let i = n; i < m; i++) {
                let index = Math.floor(Math.random() * 7)
                let url = this.randomList[index]
                arr.push({ id: i, src: url, link: '', info: '一些图片描述文字' })
            }
            return arr
        },
        fetchImgsData () {
            let fetchImgsArr = []
            for (let i = 0; i < 8; i++) {
                let index = Math.floor(Math.random() * 7 + 1)
                let url = this.randomList[index]
                fetchImgsArr.push({ id: this.imgsArr.length + i, src: url, link: '', info: '一些图片描述文字' })
            }

            this.imgsArr = this.imgsArr.concat(fetchImgsArr)
        },
        smoothScroll () {
            let currentScroll = this.$refs.waterfall.$refs.scrollEl.scrollTop
            if (currentScroll > 0) {
                requestAnimationFrame(this.smoothScroll)
                this.$refs.waterfall.$refs.scrollEl.scrollTo(0, currentScroll - (currentScroll / 10))
            }
        },
        handleScroll () {
            this.isShow = this.$refs.waterfall.$refs.scrollEl.scrollTop > 1000
        }
    },
    mounted () {
        // 监听（绑定）滚轮滚动事件
        this.waterfallDom = document.querySelector('#waterfall')
        this.waterfallDom.addEventListener('scroll', this.handleScroll, true)
    },
    destroyed () {
        // 离开页面(清除)滚轮滚动事件
        this.waterfallDom.removeEventListener('scroll', this.handleScroll)
    },
    components: {
        vueWaterfallEasy
    }
}
</script>

<style lang="scss" scoped>
.case-container {
    height: calc(100% - 135px);
    position: absolute;
    padding-top: 115px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .back-top {
        cursor: pointer;
        position: fixed;
        right: 18px;
        bottom: 50px;
        width: 100px;
        height: 50px;
        background-color: $themeColor;
        opacity: .8;
        color: #fff;
        line-height: 50px;
        text-align: center;
        display: none;
        i {
            font-size: 18px;
            font-weight: 600;
        }
        .back {
            padding-left: 5px;
        }
        &.isShow {
            display: block;
        }
    }
    .case-pane {
        width: 100%;
        height: 100%;
        margin-top: 20px;
        background-color: #ffffff;
        .case-info {
            position: relative;
            max-width: 350px;
            padding: 15px 15px 19px;
            border: 1px solid #eee;
            border-top: 0;
            .case-name {
                cursor: pointer;
                color: #333;
                font-size: 16px;
                &:hover {
                    color: $themeColor;
                }
            }
            .designer-info {
                padding-top: 10px;
                display: flex;
                justify-content: space-between;
                .designer-info-left {
                    .avater {
                        cursor: pointer;
                        margin-right: 5px;
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        vertical-align: -7px;
                    }
                    .name {
                        cursor: pointer;
                        color: #666;
                        font-size: 14px;
                        &:hover {
                            color: $themeColor;
                        }
                    }
                }
                .designer-info-right {
                    .praise {
                        padding-left: 10px;
                    }
                }
            }
        }
    }
}
</style>
