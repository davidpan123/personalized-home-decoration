<template lang="pug">
    div.global-wrap 
        div.model-container
            div.rapper-width
                div.model-header
                    div.style-pane
                        span.desc 风格: 
                        ul
                            li(v-for="item in styleList" :key="item.style")
                                a(:class="{'active': item.style === style}") {{item.name}}
                    div.space-pane
                        span.desc 空间: 
                        ul
                            li(v-for="item in spaceList" :key="item.space")
                                a(:class="{'active': item.space === space}") {{item.name}}
                    div.sort-pane
                        div.sort-left
                            span.default 综合
                            span.line
                            span.orderNum 最新
                            span.line
                            span.orderNum 最热
                div.model-content
                    div.model-pane
                        div.model(v-for="item in modelList" :key="item.id")
                            div.model-img
                                a.img-pane
                                    img(:src="item.url")
                                div.lucency  
                                    h3 {{item.desc}}
                            div.model-material
                                div.material-item(v-for="(material, index) in item.materials")
                                    a(v-if="index < 5")
                                       img(:src="material") 
                                div.material-item.more
                                    p 44个素材
                                    p . . .
                    el-pagination.pagination(background layout="prev, pager, next" :total="100")
</template>
<script>
/**
 * @description 设计师
 */
export default {
    name: 'model',
    data () {
        return {
            check: 3,
            style: 'all',
            space: 'all',
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
            spaceList: [
                {
                   name: '不限',
                   space: 'all'
                },
                {
                   name: '客厅',
                   space: 'frock'
                },
                {
                   name: '走廊',
                   space: 'simple'
                },
                {
                   name: '餐厅',
                   space: 'frock1'
                },
                {
                   name: '主卧',
                   space: 'simple2'
                },
                {
                   name: '书房',
                   space: 'frock3'
                },
                {
                   name: '厨房',
                   space: 'simple4'
                },
                {
                   name: '卫生间',
                   space: 'frock5'
                },
                {
                   name: '儿童房',
                   space: 'simple6'
                },
                {
                   name: '次卧',
                   space: 'frock7'
                },
                {
                   name: '客卧',
                   space: 'frock8'
                },
                {
                   name: '老人房',
                   space: 'frock9'
                },
                {
                   name: '卧室',
                   space: 'frock10'
                },
                {
                   name: '阳台',
                   space: 'simple11'
                },
                {
                   name: '玄关',
                   space: 'simple12'
                },
                {
                   name: '玄关',
                   space: 'simple13'
                },
                {
                   name: '门厅',
                   space: 'frock14'
                },
                {
                   name: '自定义',
                   space: 'frock15'
                }
            ],
            modelList: [
                {
                    id: 1,
                    desc: '现代卧室',
                    url: 'https://3vj-render.3vjia.com/UpFile_Render/C00000022/DesignSchemeRenderFile/201708/22/06022750/1738ab1beecc4161a97d071d0b208e31.jpg?x-oss-process=image/resize,m_fixed,w_600&v=1.0.0.0.2019053001',
                    materials: [
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966329/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966331/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966341/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44982725/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44982726/RenderImage_130x100.jpg?v=0.0.0.0.20190716'
                    ]
                },
                {
                    id: 2,
                    desc: '新中式客厅',
                    url: 'https://3vj-render.3vjia.com/UpFile_Render/C00000022/DesignSchemeRenderFile/201807/19/15331775/21a290d2a0114ed0b3487ae156ef00d2.jpg?x-oss-process=image/resize,m_fixed,w_600&v=1.0.0.0.2019053001',
                    materials: [
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966329/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966331/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966341/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44982725/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44982726/RenderImage_130x100.jpg?v=0.0.0.0.20190716'
                    ]
                },
                {
                    id: 3,
                    desc: '现代卧室',
                    url: 'https://3vj-render.3vjia.com/UpFile_Render/C00000022/DesignSchemeRenderFile/201805/21/11863569/8ad27a7a91f34d9389bfc9ff41dac27b.jpg?x-oss-process=image/resize,m_fixed,w_600&v=1.0.0.0.2019053001',
                    materials: [
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966329/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966331/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966341/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44982725/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44982726/RenderImage_130x100.jpg?v=0.0.0.0.20190716'
                    ]
                },
                {
                    id: 4,
                    desc: '新中式客厅',
                    url: 'https://3vj-render.3vjia.com/UpFile_Render/C00000022/DesignSchemeRenderFile/201708/22/06022750/1738ab1beecc4161a97d071d0b208e31.jpg?x-oss-process=image/resize,m_fixed,w_600&v=1.0.0.0.2019053001',
                    materials: [
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966329/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966331/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966341/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44982725/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44982726/RenderImage_130x100.jpg?v=0.0.0.0.20190716'
                    ]
                },
                {
                    id: 5,
                    desc: '现代卧室',
                    url: 'https://3vj-render.3vjia.com/UpFile_Render/C00000022/DesignSchemeRenderFile/201708/22/06022750/1738ab1beecc4161a97d071d0b208e31.jpg?x-oss-process=image/resize,m_fixed,w_600&v=1.0.0.0.2019053001',
                    materials: [
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966329/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966331/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966341/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44982725/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44982726/RenderImage_130x100.jpg?v=0.0.0.0.20190716'
                    ]
                },
                {
                    id: 6,
                    desc: '新中式客厅',
                    url: 'https://3vj-render.3vjia.com/UpFile_Render/C00000022/DesignSchemeRenderFile/201807/19/15331775/21a290d2a0114ed0b3487ae156ef00d2.jpg?x-oss-process=image/resize,m_fixed,w_600&v=1.0.0.0.2019053001',
                    materials: [
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966329/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966331/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966341/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44982725/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44982726/RenderImage_130x100.jpg?v=0.0.0.0.20190716'
                    ]
                },
                {
                    id: 7,
                    desc: '现代卧室',
                    url: 'https://3vj-render.3vjia.com/UpFile_Render/C00000022/DesignSchemeRenderFile/201805/21/11863569/8ad27a7a91f34d9389bfc9ff41dac27b.jpg?x-oss-process=image/resize,m_fixed,w_600&v=1.0.0.0.2019053001',
                    materials: [
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966329/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966331/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966341/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44982725/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44982726/RenderImage_130x100.jpg?v=0.0.0.0.20190716'
                    ]
                },
                {
                    id: 8,
                    desc: '新中式客厅',
                    url: 'https://3vj-render.3vjia.com/UpFile_Render/C00000022/DesignSchemeRenderFile/201805/21/11863569/8ad27a7a91f34d9389bfc9ff41dac27b.jpg?x-oss-process=image/resize,m_fixed,w_600&v=1.0.0.0.2019053001',
                    materials: [
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966329/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966331/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44966341/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44982725/RenderImage_130x100.jpg?v=0.0.0.0.20190716',
                        'http://img2.3vjia.com/UpFile/C00000022/DesignMaterial/201906/24/44982726/RenderImage_130x100.jpg?v=0.0.0.0.20190716'
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
.model-container {
    padding-top: 115px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: $bacGroundColor;
    .model-header {
        margin-top: 20px;
        background-color: #fff;
        .style-pane{
            @extend %header-style;
        }
        .space-pane{
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
    .model-content {
        margin-top: 20px;
        padding: 20px;
        background: #fff;
        .model-pane {
            display: flex;
            padding: 20px 30px;
            justify-content: space-around;
            flex-wrap: wrap;
            .model {
                margin-top: 20px;
                cursor: pointer;
                .model-img {
                    position: relative;
                    .img-pane {
                        width: 600px;
                        height: 450px;
                    }
                    .lucency {
                        position: absolute;
                        height: 42px;
                        line-height: 42px;
                        width: 560px;
                        padding: 0 20px;
                        bottom: 0;
                        background: rgba(0,0,0,.5);
                        h3 {
                            font-size: 16px;
                            color: #fff;
                        }
                    }
                }
                
                .model-material {
                    position: relative;
                    padding: 10px;
                    background: #fff;
                    border: 1px solid #eee;
                    border-top: none;
                    display: flex;
                    justify-content: center;
                    .material-item {
                        position: relative;
                        height: 90px;
                        margin-right: 6px;
                        a {
                            display: block;
                            height: 90px;
                            background: rgba(242, 242, 242, 1);
                            img {
                                width: 90px;
                                height: 90px;
                            }
                        }
                        &.more {
                            color: $fontContentGray;
                            background-color: rgba(242, 242, 242, 1);
                            width: 90px;
                            height: 90px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-direction: column;
                        }
                    }
                }
                &:hover {
                    .model-material {
                        box-shadow: 0 5px 10px 8px rgba(0,0,0,.1);
                    }
                    .model-img {
                        opacity: .9;
                    }
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
