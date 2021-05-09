<template>
    <!-- banner footer -->
    <div>
        <div class="t-src-wrap footer-wrap">
            <div class="footer p-wrap">
                <div class="footer-title">先锋证券（Pioneer Brokers）</div>
                <div class="footer-content">
                    <p>
                        先锋证券（Pioneer Brokers，下称“PBNZ”）是根据新西兰法律成立并注册金融服务供应商（Financial service provider，注册编号：FSP736831），同时PBNZ还是新西兰金融纠纷独立调解机制登记会员。
                    </p>
                    <p>
                        PBNZ致力于为适当投资者、交易员提供全球范围内的交易品种，包含美股、港股、中国A国、全球主流期货及期货期权、美股期权等。PBNZ尽最大努力协助投资者、交易员掌握有着强大功能的TWS交易软件，享受尽可能低的交易成本，以及高性价比的客服质量。PBNZ希望与各位投资者、交易员一道，实现预期的投资价值与目标，携手共进，敢为人先！
                    </p>
                    <p>
                        请注意，如您想获取PBNZ的经纪服务，请您确认是否满足您所在地区的法律法规要求；PBNZ未在新西兰以外地区申请持牌或登记注册，如您来自新西兰以外地区，PBNZ有权要求您提供相关资料以供开户审核，并决定是否接受您成为我们的用户。如后续新西兰或您所在地的相关法规法律有变更，或PBNZ公司政策更新，我们合规部门有权中止与您的合作关系。
                    </p>
                    <p>
                        投资证券或其他金融产品存在亏损风险，甚至金额可能超过本金。
                    </p>
                    <p>
                        @2021 – PioneerBrokersNz – All right reserved
                        <span class="footer-record-varchar">浙ICP备20007545号-1</span>
                    </p>
                </div>
                <div class="dotted"></div>
                <div class="footer-cols">
                    <div class="footer-cols_l">
                        <div class="footer-title">联系我们</div>
                        <div class="footer-content footer-content_contact">
                            <div class="footer-contact__cn">
                                中文客服公众号：ib俱乐部<br />
                                服务时间：北京时间 交易日09:00-24:00 <br />
                                仅提供一般咨询
                            </div>
                            <div class="footer-contact__en">
                                英文fb机构账户：123456789<br />
                                服务时间：交易日 09:30-15:00<br />
                                提供全部咨询<br />
                            </div>
                        </div>
                        <div class="footer-title">商务合作</div>
                        <div class="footer-content">
                            FB账户二维码还在制作中<br />
                            咨询邮箱：cms@pioneerbrokersnz.com<br />
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
