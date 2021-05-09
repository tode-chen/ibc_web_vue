<template>
    <div id="help">
        <div class="t-scr-wrap page-header-wrap">
            <headerbar col="about" />
        </div>
        <div class="mainWrap p-wrap clearfix"
             style="height:600px;">
            <p>公司介绍</p>
            <p>Pioneer Brokers Limited（先锋证券）总部位于新西兰(New Zealand)，是根据新西兰法律注册和成立的金融服务器提供商(Financial Service Providers Register，注册编号：FSP736831。先锋证券的创始团队来自于大型证券期货、资产管理等机构，专业法务合规事务所以及知名互联网公司技术团队，拥有非常丰富的海外金融市场经验。先锋证券秉承从一线客户使用角度出发，详尽介绍软件使用、市场知识、法规条例等，让用户能够最快速度上手交易，大大节省学习时间。同时提供极具竞争力的佣金利率水平，助力降低交易成本，增强长期投资收益。先锋证券期待与客户长期共同成长，实现预期的投资价值与投资目标。</p>
            <p>Pioneer Brokers Limited（先锋证券）是美国盈透证券的全披露介绍经纪商(fully disclosed introducing brokers)，所有用户资金结算、资产清算、定单执行等都通过盈透证券处理。盈透证券是美国顶级的网络折扣经纪商，受美国证券交易监督委员会(SEC)、美国金融监管局(FINRA)、美国商品期货交易委员会(CFTC)等监管。</p>
            <p>Pioneer Brokers Limited（先锋证券）未在新西兰以外国家或地区的监管部门进行登记注册或允许经营业务，如您来自新西兰以外地区，请您咨询当地的法律专业人士，确认您是否满足相关法律法规，再决定是否可以使用先锋证券相关服务。此外，我们有权根据新西兰相关法律法规及公司相关政策，搜集您的信息及资料，并决定是否接受您的开户申请，或终止后续与您的合作关系。</p>
            <p>Pioneer Brokers Limited（先锋证券）目前仅持有经纪(broker)牌照，未持有任何投资咨询牌照，本公司任何信息、资讯、意见、消息等并非我们向您提供投资推荐、购买、处置任何金融产品的建议。</p>
            <p>投资证券或其他金融产品存在亏损的风险，甚至超过本金，请您使用本公司提供的服务之前，完整阅读有关我们的风险披露。</p>
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
