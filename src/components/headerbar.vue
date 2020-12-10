<template>
    <div>
        <div class="header-bar p-wrap">
            <div class="header-logo"></div>
            <ul class="header-nav">
                <li :class="{act:'index'===col}"
                    @click="onHeaderNav('index')">首页</li>
                <li :class="{act:'about'===col}"
                    @click="onHeaderNav('about')">公司介绍</li>
                <li @click="onHeaderNav('help')">佣金费率</li>
                <li :class="{act:'help'===col}"
                    @click="onHeaderNav('help')">帮助</li>
                <li>开户</li>
            </ul>
            <div class="header-panel">
                <div class="wx-follow">微信关注</div>
                <div class="contact-phone">联系电话 400-888-888</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        col: {
            type: String,
            defualt: 'index'
        }
    },
    methods: {
        onHeaderNav (pathName) {
            if (this.col === pathName) return
            if (pathName === 'index') pathName = '/'
            this.$router.push(pathName)
        },
    },
}
</script>

<style lang="scss" scoped></style>
