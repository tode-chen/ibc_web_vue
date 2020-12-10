<template>
    <div id="help">
        <div class="t-scr-wrap page-header-wrap">
            <headerbar col="about" />
        </div>
        <div class="mainWrap p-wrap clearfix"
             style="height:600px;">
            <p>公司介绍</p>
            <p>IBClubs证券实体</p>
            <p>IBClubs证券公司是根据新西兰法律成立并注册的金融服务供应商（注册号：123456），同时，SNB公司还是新西兰金融纠纷独立调解机制登记会员。IBClubs证券通过强大的互联网科技和雄厚的金融实力，为全球华人提供包括港股、美股、中国A股在内的全球证券经纪服务。IBClubs证券注册地址：xxx, xxx, Auckland 1023, New Zealand.</p>
            <p>IBClubs证券未在新西兰以外的国家或地区的金融监管部门进行注册登记或经营业务，来自新西兰以外国家或地区的访客应当确认其行为是否满足当地法律法规要求，进而决定是否可以进一步使用IBClubs证券相关服务。</p>
            <p>本服务平台提供的行情价格及其他信息仅供您参考，该等资讯并非我们向您提供的投资推荐或购买及处置任何金融产品的建议。</p>
            <p>投资证券或其他金融产品存在亏损风险，在使用IBClubs证券提供的服务之前，请完整阅读我们的风险披露及条款声明。</p>
        </div>
        <!-- footer -->
        <footerbar />
    </div>
</template>

<script>
import footerbar from '@/components/footerbar'
import headerbar from '@/components/headerbar'
export default {
    components: { footerbar, headerbar },
    created () {
        
    }
}
</script>

<style lang="scss" scoped>
.mainWrap {
    padding: 30px;
    box-sizing: border-box;
    line-height: 21px;
    font-size: 14px;
    p {
        margin-top: 20px;
    }
}
</style>
