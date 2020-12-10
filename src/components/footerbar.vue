<template>
    <!-- banner footer -->
    <div>
        <div class="t-src-wrap footer-wrap">
            <div class="footer p-wrap">
                <div class="footer-title">IBClubs证券实体</div>
                <div class="footer-content">
                    <p>
                        IBClubs证券公司是根据新西兰法律成立并注册的金融服务供应商（注册号：123456），同时，SNB公司还是新西兰金融纠纷独立调解机制登记会员。IBClubs证券通过强大的互联网科技和雄厚的金融实力，为全球华人提供包括港股、美股、中国A股在内的全球证券经纪服务。IBClubs证券注册地址：xxx,
                        xxx, Auckland 1023, New Zealand.
                    </p>
                    <p>
                        IBClubs证券未在新西兰以外的国家或地区的金融监管部门进行注册登记或经营业务，来自新西兰以外国家或地区的访客应当确认其行为是否满足当地法律法规要求，进而决定是否可以进一步使用IBClubs证券相关服务。
                    </p>
                    <p>
                        本服务平台提供的行情价格及其他信息仅供您参考，该等资讯并非我们向您提供的投资推荐或购买及处置任何金融产品的建议。
                    </p>
                    <p>
                        投资证券或其他金融产品存在亏损风险，在使用IBClubs证券提供的服务之前，请完整阅读我们的风险披露及条款声明。
                    </p>
                    <p>
                        © 2020 - ibclubs - All rights reserved
                        <span class="footer-record-varchar"
                            >浙ICP备20007545号-1</span
                        >
                    </p>
                </div>
                <div class="dotted"></div>
                <div class="footer-cols">
                    <div class="footer-cols_l">
                        <div class="footer-title">联系我们</div>
                        <div class="footer-content footer-content_contact">
                            <div class="footer-contact__cn">
                                中文热线：400-888-8888<br />
                                服务时段：北京时间交易日09:00-次日06:00（美国冬令时）/<br />
                                北京时间交易日09:00-次日05:00（美国夏令时）<br />
                                仅提供一般咨询
                            </div>
                            <div class="footer-contact__en">
                                英文热线：400-888-8888<br />
                                服务时段：新西兰时间交易日10:00-16:00<br />
                            </div>
                        </div>
                        <div class="footer-title">商务合作</div>
                        <div class="footer-content">
                            请发送姓名、联系方式及合作内容至bd@ibclubs.com<br />
                            我们将尽快与您取得联系<br />
                        </div>
                    </div>
                    <div class="footer-cols_r clearfix">
                        <div class="footer-logo fr"></div>
                        <div class="footer-logo_info footer-content  fr">
                            专业服务、值得依赖，<br />
                            一直致力于使交易和投资大众化。
                        </div>
                        <div class="footer-qrcode fr"></div>
                        <div class="footer-qrcode_info footer-content fr">
                            扫一扫、立即咨询
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {

    }
}
</script>

<style lang="scss" >
.footer-wrap {
    min-height: 680px;
    background: #292c33;
    .footer {
        padding: 30px 80px 0;
        box-sizing: border-box;
        font-size: 14px;
        .footer-title {
            position: relative;
            height: 70px;
            line-height: 70px;
            color: #fff;
        }
        .dotted {
            margin-top: 35px;
            width: 100%;
            height: 1px;
            line-height: 1px;
            font-size: 1px;
            background: url(~@/assets/images/bg-dotted.jpg) repeat-x;
        }

        .footer-content {
            line-height: 21px;
            color: #cccccc;
            p {
                &:not(:first-child) {
                    margin-top: 14px;
                }
            }
        }

        .footer-cols {
            display: flex;
            justify-content: space-between;
            .footer-cols_l {
                flex: 1;
                .footer-content_contact {
                    display: flex;
                    justify-content: space-between;
                    .footer-contact__cn {
                        flex: 1;
                    }
                    .footer-contact__en {
                        width: 340px;
                    }
                }
            }
            .footer-cols_r {
                width: 188px;
                .footer-logo {
                    margin-top: 30px;
                    width: 165px;
                    height: 26px;
                    background: url(~@/assets/images/logo.png) no-repeat;
                    background-size: cover;
                }
                .footer-logo_info {
                    margin-top: 10px;
                    font-size: 12px;
                    text-align: right;
                }
                .footer-qrcode {
                    margin-top: 10px;
                    width: 120px;
                    height: 120px;
                    background: url(~@/assets/images/qrcode.jpg) no-repeat;
                    background-size: cover;
                }
                .footer-qrcode_info {
                    margin-top: 5px;
                }
            }
        }
        .footer-record-varchar {
            margin-left: 10px;
            text-decoration: underline;
        }
    }
}
</style>
