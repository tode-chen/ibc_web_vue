<template>
    <div id="help">
        <div class="t-scr-wrap page-header-wrap">
            <headerbar col="help" />
        </div>
        <div class="breadcrumbWrap">
            <div class="_breadcrumb">
                帮助中心
            </div>
        </div>
        <div class="mainWrap p-wrap clearfix">
            <div class="leftBar">
                <ul class="navBar">
                    <li v-for="(value, key) in navList"
                        :key="key">
                        <span @click="nav_cid = Number(key)">{{ value.name }}</span>
                        <ul v-if="value.list.length > 0"
                            v-show="Number(key) === nav_cid">
                            <li v-for="(item, index) in value.list"
                                :key="index">
                                <a href="javascript:void(0)"
                                   :class="{act:item.id===Number(nav_aid)}"
                                   @click="onNav(item)">{{ item.post_title }}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="rightBar">
                <div class="title">{{ articleDetail.post_title }}</div>
                <div class="content"
                     v-html="articleDetail.post_content"></div>
            </div>
        </div>
        <!-- footer -->
        <footerbar />
    </div>
</template>

<script>
import merge from 'webpack-merge'
import footerbar from '@/components/footerbar'
import headerbar from '@/components/headerbar'
import '@/assets/css/twentyseventeen.scss'
export default {
    components: { footerbar, headerbar },
    data () {
        return {
            helpList: [],
            categoryList: [],
            navList: {},
            nav_cid: '',
            nav_aid: '',
            articleDetail: {
                post_title: '',
                post_content: '',
            },
        }
    },
    created () {
        var e = this.$route.query
        console.log('e', e);
        if (e.cid && e.aid) {
            this.nav_cid = Number(e.cid)
            this.nav_aid = Number(e.aid)
            this.getArticleDetail()
        }
        this.getCategoryList()
        this.getHelpList()
    },
    computed: {
        navDataRange () {
            return {
                helpList: this.helpList,
                categoryList: this.categoryList,
            }
        },
    },
    watch: {
        navDataRange (val, oldVal) {
            if (val.helpList.length > 0 && val.categoryList.length > 0) {
                var navList = {}
                val.categoryList.forEach((item, index) => {
                    if (!navList[item.cat_id]) navList[item.cat_id] = {}
                    navList[item.cat_id]['list'] = []
                    navList[item.cat_id]['name'] = item.name
                })
                val.helpList.forEach((item, index) => {
                    if (!navList[item.cat_id]['list'])
                        navList[item.cat_id]['list'] = []
                    navList[item.cat_id]['list'].push(item)
                })
                if (!this.nav_cid && !this.nav_aid) {
                    for (var key in navList) {
                        if (navList[key].list.length > 0) {
                            for (var i = 0; i < navList[key].list.length; i++) {
                                var item = navList[key].list[i]
                                this.nav_cid = item.cat_id
                                this.nav_aid = item.id
                                this.getArticleDetail()
                                break
                            }
                        }
                    }
                }
                this.navList = navList
            }
        },
    },
    methods: {
        getHelpList () {
            this.$ajax
                .get('/home/getHelpList', {
                    params: {
                        limit: 1,
                        page: 1,
                    },
                })
                .then((res) => {
                    if (res.code === 200) {
                        this.helpList = res.data.concat()
                    }
                })
        },
        getCategoryList () {
            this.$ajax
                .get('/home/getCategoryList', {
                    params: {
                        limit: 1,
                        page: 1,
                    },
                })
                .then((res) => {
                    if (res.code === 200) {
                        var arr = res.data
                        this.categoryList = res.data.concat()
                    }
                })
        },
        onNav (item) {
            this.nav_cid = item.cat_id
            this.nav_aid = item.id
            this.$router.push({
                query: merge({}, { cid: this.nav_cid, aid: this.nav_aid })
            })
            this.getArticleDetail()
            // this.current_nav_name = item.name
        },
        getArticleDetail () {
            if (!this.nav_aid) return
            this.$ajax
                .get('/home/getArticleDetail', {
                    params: {
                        id: this.nav_aid,
                    },
                })
                .then((res) => {
                    if (res.code === 200) {
                        var arr = Object.assign({}, res.data)
                        this.articleDetail = arr
                    }
                })
        },
    },
}
</script>

<style lang="scss" scoped>
#help {
    .breadcrumbWrap {
        width: 100%;
        background: #f9f9f9;
        ._breadcrumb {
            margin: 0 auto;
            width: 1120px;
            height: 64px;
            line-height: 64px;
            font-size: 16px;
            background: #f9f9f9;
        }
    }
    .mainWrap {
        margin: 0 auto;
        padding: 28px 0 45px;
        .leftBar {
            float: left;
            width: 180px;
            .navBar {
                width: 150px;
                box-sizing: border-box;
                border-right: 1px solid #eee;
                color: #333;
                li {
                    box-sizing: border-box;
                    cursor: pointer;
                    width: 100%;
                    font-weight: 700;
                    position: relative;
                    font-size: 16px;
                    color: #333;
                    line-height: 16px;
                    span {
                        padding-bottom: 20px;
                        display: block;
                    }
                    a {
                        width: 100%;
                        font-size: 14px;
                        color: #555;
                        line-height: 16px;
                        display: inline-block;
                        overflow: hidden;
                        &.act {
                            color: $t-color-primary;
                        }
                    }
                    li {
                        padding: 0 16px 12px;
                    }
                }
            }
        }
        .rightBar {
            float: left;
            width: calc(100% - 180px);
            .title {
                font-size: 24px;
                color: #333;
                line-height: 33px;
                padding: 0 0 24px;
                word-break: break-all;
                -webkit-user-select: auto !important;
                -moz-user-select: auto !important;
                -ms-user-select: auto !important;
                user-select: auto !important;
            }
            /deep/ .content {
                // webkit-user-select: auto !important;
                -moz-user-select: auto !important;
                -ms-user-select: auto !important;
                user-select: auto !important;
                font-size: 14px;
                color: #333;
                line-height: 24px;
                padding-bottom: 32px;
                word-break: break-all;
                img,
                video {
                    display: block;
                    max-width: 100%;
                    height: auto;
                }
            }
        }
    }
}
</style>
