<template>
    <div id="index-page">
        <div class="t-scr-wrap bg-black">
            <headerbar col="index" />
        </div>
        <swiper ref="mySwiper"
                :options="swiperOptions">
            <!-- swiper-1 -->
            <swiper-slide>
                <div class="swiper-item-wrap swiper-1 t-scr-wrap">
                    <div class="banner-wrap p-wrap">
                        <div class="banner-ad1 t-active"
                             @click="$router.push({path:'/help'})"></div>
                        <!-- <div class="banner-cols-wrap">
                            <div class="banner-cols-title">热门服务</div>
                            <ul>
                                <li class="t-active">
                                    <div class="banner-col-tit icon-account">
                                        开户出入金
                                    </div>
                                    <div class="banner-col-content">
                                        出金手续费：每个自然月第一笔出金免费，随后按10刀/笔收；
                                    </div>
                                    <div class="banner-col-btn_arrow"></div>
                                </li>
                                <li class="t-active">
                                    <div class="banner-col-tit icon-settings">
                                        账户设置
                                    </div>
                                    <div class="banner-col-content">
                                        为保护用户资产，盈透允许用户进行【双因素验证】（如何设置），设置后...
                                    </div>
                                    <div class="banner-col-btn_arrow"></div>
                                </li>
                                <li class="t-active">
                                    <div class="banner-col-tit noIcon">
                                        查看所有服务
                                    </div>
                                    <div class="banner-col-content">
                                        包括交易设置、账户设置、出入金、银透介绍等。
                                    </div>
                                    <div class="banner-col-btn_arrow"></div>
                                </li>
                            </ul>
                        </div> -->
                    </div>
                </div>
            </swiper-slide>
            <!-- swiper-2 -->
            <swiper-slide>
                <div class="swiper-item-wrap swiper-2 t-scr-wrap">
                    <div class="banner-wrap p-wrap">
                        <div class="banner-ad2 t-active"
                             @click="$router.push({path:'/help?cid=5&aid=48'})"></div>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"
                 slot="pagination"></div>
        </swiper>

        <!-- 4优势 -->
        <div class="t-scr-wrap">
            <div class="banner-advantage p-wrap">
                <ul>
                    <li>
                        <i class="icon-calculation"></i>
                        <span>超低佣金、低息融资</span>
                    </li>
                    <li>
                        <i class="icon-global"></i>
                        <span>全能账户、交易全球</span>
                    </li>
                    <li>
                        <i class="icon-shield"></i>
                        <span>资金托管、账户保险</span>
                    </li>
                    <li>
                        <i class="icon-exchange"></i>
                        <span>强大订单、灵活交易</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 费率 -->
        <div class="t-scr-wrap bgf2f2f5">
            <div class="expenses-wrap p-wrap">
                <div class="expenses-title">
                    <div class="expenses-tit">佣金资费 · 融资利率</div>
                    <div class="expenses-more"
                         @click="$router.push({path:'/help?cid=5&aid=48'})">查看更多 ></div>
                </div>
                <ul class="clearfix">
                    <!-- 美股 -->
                    <li>
                        <div class="expenses-li-tit banner-astock"></div>
                        <div class="expenses-content">
                            <div class="t-cells">
                                <div class="t-cell noLine">
                                    <div class="t-cell__hd">
                                        <div class="t-cell__label">佣金</div>
                                    </div>
                                    <div class="t-cell__bd">
                                        <span>0.0035美元</span>/股，最低<span>0.35美元</span>/笔
                                    </div>
                                </div>
                                <div class="t-cell ">
                                    <div class="t-cell__hd">
                                        <div class="t-cell__label">
                                            平台使用费
                                        </div>
                                    </div>
                                    <div class="t-cell__bd">
                                        无平台使用费，代收外部机构费（如交易所费、监管费等）
                                    </div>
                                </div>
                                <div class="t-cell ">
                                    <div class="t-cell__hd">
                                        <div class="t-cell__label">
                                            融资利率
                                        </div>
                                    </div>
                                    <div class="t-cell__bd">
                                        <span>3.16%</span>起
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- 港股 -->
                    <li>
                        <div class="expenses-li-tit banner-hkstocks"></div>
                        <div class="expenses-content">
                            <div class="t-cells">
                                <div class="t-cell noLine">
                                    <div class="t-cell__hd">
                                        <div class="t-cell__label">佣金</div>
                                    </div>
                                    <div class="t-cell__bd">
                                        交易金额<span>0.08%</span>,
                                        最低<span>18港币</span>/笔
                                    </div>
                                </div>
                                <div class="t-cell ">
                                    <div class="t-cell__hd">
                                        <div class="t-cell__label">
                                            平台使用费
                                        </div>
                                    </div>
                                    <div class="t-cell__bd">
                                        无平台使用费
                                    </div>
                                </div>
                                <div class="t-cell ">
                                    <div class="t-cell__hd">
                                        <div class="t-cell__label">
                                            融资利率
                                        </div>
                                    </div>
                                    <div class="t-cell__bd">
                                        <span>4.26%</span>起
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="expenses-li-tit banner-futures"></div>
                        <div class="expenses-content">
                            <div class="t-cells">
                                <div class="t-cell noLine">
                                    <div class="t-cell__hd">
                                        <div class="t-cell__label">佣金</div>
                                    </div>
                                    <div class="t-cell__bd">
                                        <span>0.85美元</span>/张合约
                                        <!-- <p>
                                            北美地区：<span>0.85</span>美元/张(单边)
                                        </p>
                                        <p>
                                            非北美地区：<span>1.05</span>美元/张(单边)<br /><span>0.85</span>欧元/张(单边)
                                        </p> -->
                                    </div>
                                </div>
                                <div class="t-cell ">
                                    <div class="t-cell__hd">
                                        <div class="t-cell__label">
                                            平台使用费
                                        </div>
                                    </div>
                                    <div class="t-cell__bd">
                                        无平台使用费，代收外部机构费（如交易所费、监管费等）
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="expenses-li-tit banner-option"></div>
                        <div class="expenses-content">
                            <div class="t-cells">
                                <div class="t-cell noLine">
                                    <div class="t-cell__hd">
                                        <div class="t-cell__label">佣金</div>
                                    </div>
                                    <div class="t-cell__bd">
                                        <span>0.65美元</span>/张(期权费>0.1美元)<br />
                                        最低每笔定单<span>1.00美元</span>
                                    </div>
                                </div>
                                <div class="t-cell ">
                                    <div class="t-cell__hd">
                                        <div class="t-cell__label">
                                            平台使用费
                                        </div>
                                    </div>
                                    <div class="t-cell__bd">
                                        无平台使用费，代收外部机构费（如交易所费、监管费等）
                                    </div>
                                </div>
                                <div class="t-cell ">
                                    <div class="t-cell__hd">
                                        <div class="t-cell__label">
                                            融资利率
                                        </div>
                                    </div>
                                    <div class="t-cell__bd">
                                        <span>3.16%</span>起
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- banner 安全 -->
        <div class="t-src-wrap bgf2f2f5">
            <div class="banner-safe p-wrap">
                <div class="k-btn more"
                     @click="$router.push({path:'/help'})">查看更多信息</div>
            </div>
        </div>
        <!-- banner 全能 -->
        <div class="t-src-wrap">
            <div class="banner-acount p-wrap">
                <div class="k-btn more"
                     @click="$router.push({path:'/help'})">查看更多信息</div>
            </div>
        </div>
        <!-- banner 入门 -->
        <div class="t-src-wrap bg11131b">
            <div class="banner-primer p-wrap k-active"
                 @click="$router.push({path:'/developing'})"></div>
        </div>
        <!-- footer -->
        <footerbar />
    </div>
</template>

<script>
import headerbar from '@/components/headerbar'
import footerbar from '@/components/footerbar'
import { Swiper, SwiperSlide, directive, Autoplay } from 'vue-awesome-swiper'
// import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'
// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'
export default {
    components: {
        headerbar,
        footerbar,
        Swiper,
        SwiperSlide,
    },
    data () {
        return {
            swiperOptions: {
                observer: true,//修改swiper自己或子元素时，自动初始化swiper 
                observeParents: true,//修改swiper的父元素时，自动初始化swiper 
                loop: true,
                autoplay: {
                    disableOnInteraction: false,
                    delay: 3000
                },
                pagination: {
                    el: '.swiper-pagination'
                },
                // Some Swiper option/callback...
            }
        }
    },
    computed: {
        swiper () {
            return this.$refs.mySwiper.$swiper
        }
    },
    methods: {
        onSwiper (swiper) {
            console.log(swiper)
        },
        onSlideChange () {
            console.log('slide change')
        },
    },
}
</script>

<style lang="scss" scoped>
#index-page {
    .swiper-item-wrap {
        height: 738px;
        background: no-repeat center;
        background-size: cover;
        &.swiper-1 {
            background-image: url("~@/assets/images/index-swiper-1.jpg");
        }
        &.swiper-2 {
            background-image: url("~@/assets/images/index-swiper-2.jpg");
        }
        .banner-wrap {
            position: relative;
            height: 738px;
            .banner-ad1 {
                position: absolute;
                top: 208px;
                right: 0;
                left: 0;
                z-index: 200;
                width: 100%;
                height: 231px;
                background: url("~@/assets/images/banner-ad-1.png") no-repeat
                    center;
                background-size: 471px 231px;
                cursor: pointer;
            }
            .banner-ad2 {
                position: absolute;
                top: 208px;
                right: 0;
                left: 0;
                z-index: 200;
                width: 100%;
                height: 256px;
                background: url("~@/assets/images/banner-ad-2.png") no-repeat
                    center;
                background-size: 1013px 256px;
                cursor: pointer;
            }
            .banner-cols-wrap {
                position: absolute;
                right: 0;
                bottom: 70px;
                left: 0;
                z-index: 200;
                width: 100%;
                padding: 0 40px;
                box-sizing: border-box;
                color: #fff;
                .banner-cols-title {
                    height: 40px;
                    line-height: 40px;
                    font-size: 16px;
                    font-weight: 700;
                }
                ul {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    li {
                        position: relative;
                        padding: 30px;
                        box-sizing: border-box;
                        border-radius: 8px;
                        width: 256px;
                        height: 194px;
                        background: #1a1e2d;
                        font-size: 14px;
                        cursor: pointer;
                        &:not(:first-child) {
                            margin-left: 24px;
                        }
                        .banner-col-tit {
                            padding: 0 10px 0 calc(22px + 10px);
                            box-sizing: border-box;
                            width: 100%;
                            height: 40px;
                            line-height: 40px;
                            background: no-repeat left center;
                            background-size: 22px 22px;
                            border-bottom: 1px solid #fff;
                            color: #fff;
                            &.icon-account {
                                background-image: url(~@/assets/images/icon-account.png);
                            }
                            &.icon-settings {
                                background-image: url(~@/assets/images/icon-settings.png);
                            }
                            &.noIcon {
                                padding-left: 0;
                            }
                        }
                        .banner-col-content {
                            margin-top: 10px;
                            color: #999;
                            line-height: 1.5;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 3;
                            overflow: hidden;
                        }
                        .banner-col-btn_arrow {
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            z-index: 300;
                            border-radius: 8px 0 8px;
                            width: 50px;
                            height: 20px;
                            background: #484b57
                                url(~@/assets/images/icon-arrow.png) no-repeat
                                center;
                            background-size: 16px 16px;
                        }
                    }
                }
            }
        }
    }
    .banner-advantage {
        ul {
            height: 168px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            li {
                width: 210px;
                height: 110px;
                i,
                span {
                    display: block;
                }
                i {
                    width: 100%;
                    height: 70px;
                    background: no-repeat center;
                    background-size: 48px 48px;
                    &.icon-calculation {
                        background-image: url(~@/assets/images/icon-calculation.png);
                    }
                    &.icon-global {
                        background-image: url(~@/assets/images/icon-global.png);
                    }
                    &.icon-shield {
                        background-image: url(~@/assets/images/icon-shield.png);
                    }
                    &.icon-exchange {
                        background-image: url(~@/assets/images/icon-exchange.png);
                    }
                }
                span {
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    color: #666;
                    font-size: 15px;
                }
            }
        }
    }

    .expenses-wrap {
        padding-top: 75px;
        box-sizing: border-box;
        height: 830px;
        .expenses-title {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding: 0 53px;
            box-sizing: border-box;
            height: 38px;
            .expenses-tit {
                flex: 1;
                height: 38px;
                line-height: 38px;
                font-size: 36px;
                color: #313131;
                font-weight: 700;
            }
            .expenses-more {
                height: 34rpx;
                line-height: 34rpx;
                font-size: 32rpx;
                cursor: pointer;
            }
        }
        ul {
            margin: calc(40px - 53px) 0 0 -53px;
            padding: 0 53px;
            li {
                float: left;
                // 1120 480*2 / 3 160 53
                margin: 53px 0 0 53px;
                border-radius: 8px;
                width: 480px;
                height: 280px;
                background: #fff;
                overflow: hidden;
                .expenses-li-tit {
                    border-radius: 8px 8px 0 0;
                    width: 100%;
                    height: 76px;
                    background: no-repeat cover;
                    &.banner-astock {
                        background-image: url(~@/assets/images/banner-astock.png);
                    }
                    &.banner-hkstocks {
                        background-image: url(~@/assets/images/banner-hkstocks.png);
                    }
                    &.banner-futures {
                        background-image: url(~@/assets/images/banner-futures.png);
                    }
                    &.banner-option {
                        background-image: url(~@/assets/images/banner-option.png);
                    }
                }
                .expenses-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 30px 0;
                    box-sizing: border-box;
                    height: calc(280px - 76px);
                    .t-cells {
                        width: 100%;
                        .t-cell {
                            padding: 17px 5px;
                            box-sizing: border-box;
                            // 60 26 34 17
                            line-height: 1.5;
                            font-size: 18px;
                            .t-cell__hd {
                                .t-cell__label {
                                    display: block;
                                    min-width: 110px;
                                    font-size: 18px;
                                    font-weight: 700;
                                    color: #333;
                                    text-align-last: justify;
                                }
                            }

                            .t-cell__bd {
                                padding-left: 20px;
                                box-sizing: border-box;
                                text-align: right;
                                font-size: 16px;
                                color: #666;
                                span {
                                    margin: 0 5px;
                                    color: #ff7700;
                                }
                                p {
                                    margin-top: 10px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .banner-acount {
        position: relative;
        background: url(~@/assets/images/banner-global-computer.jpg) no-repeat
            center;
        background-size: 1120px 329px;
        height: 518px;
        .k-btn {
            position: absolute;
            left: 96px;
            bottom: 160px;
        }
    }
    .banner-safe {
        position: relative;
        background: url(~@/assets/images/banner-safe.jpg) no-repeat center;
        background-size: 1120px 471px;
        height: 518px;
        .k-btn {
            position: absolute;
            right: 324px;
            bottom: 80px;
        }
    }
    .banner-primer {
        background: url(~@/assets/images/banner-primer.jpg) no-repeat center;
        background-size: 1120px 586px;
        height: 586px;
        cursor: pointer;
    }
    .bgf2f2f5 {
        background: #f2f2f5;
    }
    .bgf2f2f5 {
        background: #f9f9f9;
    }
    .bg11131b {
        background: #11131b;
    }
}
</style>
