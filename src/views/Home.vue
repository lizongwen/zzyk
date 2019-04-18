<template>
  <div class="home">
    <site-top></site-top>
    <navbar></navbar>
    <div class="banner-wrap" ref="bannerWrap">
      <img class="banner" src="../img/banner.jpg" alt="banner" @load="imgload">
      <div class="banner-mark" :style="{height:bannerMmarkH}"></div>
      <div class="banner-content">
        <div class="banner-text text-center">互联网+「建筑」资质云库平台</div>
        <home-search></home-search>
      </div>
    </div>
    <div class="home-hot-box">
      <div class="serve">
        <home-con-title title="平台服务,PLATFORM SERVICE"></home-con-title>
        <div class="serve-list clearfix">
          <div class="serve-list-item">
            <img class="serve-list-item__icon" src="../img/serve1.png" alt>
            <p class="serve-list-item__text">出售求购对接</p>
            <p class="serve-list-item__textdesc">交易需求平台客服对接</p>
          </div>
          <div class="serve-list-item">
            <img class="serve-list-item__icon" src="../img/serve2.png" alt>
            <p class="serve-list-item__text">信息核验</p>
            <p class="serve-list-item__textdesc">交易前核验真实性</p>
          </div>
          <div class="serve-list-item">
            <img class="serve-list-item__icon" src="../img/serve3.png" alt>
            <p class="serve-list-item__text">平台变更担保</p>
            <p class="serve-list-item__textdesc">优质事务所变更服务</p>
          </div>
          <div class="serve-list-item">
            <img class="serve-list-item__icon" src="../img/serve4.png" alt>
            <p class="serve-list-item__text">平台先行赔付</p>
            <p class="serve-list-item__textdesc">交易纠纷平台先赔</p>
          </div>
        </div>
        <div class="serve-info clearfix">
          <div class="serve-info-item">
            资质求购数据：
            <span class="serve-info__count">{{formatZzqg}}</span>条
          </div>
          <div class="serve-info-item">
            资质出售数据：
            <span class="serve-info__count">{{formatZzcs}}</span>条
          </div>
          <div class="serve-info-item">
            关键词搜索：
            <span class="serve-info__count">{{formatKey}}</span>条
          </div>
          <div class="serve-info-item">
            网站浏览量：
            <span class="serve-info__count">{{formatLook}}</span>条
          </div>
        </div>
      </div>
    </div>
    <div class="home-content">
      <div class="market">
        <home-con-title title="交易市场,PLATFORM SERVICE"></home-con-title>
        <div
          class="market-item clearfix"
          style="background: linear-gradient(45deg, #128bed, #7e5aff) no-repeat;"
        >
          <div class="market-head">
            <div class="market-head__title">
              <span>资质出售</span>
            </div>
            <div class="market-head-content-wrap">
              <div class="market-head-content">
                <span class="market-head-content__title">寻求商机（条）</span>
                <div class="market-head-content-count-wrap">
                  <div class="count">
                    <span>2</span>
                  </div>
                  <div class="count">
                    <span>6</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="market-btn-wrap">查看更多</div>
          </div>
          <div class="market-content clearfix">
            <span class="before" style="border-color: transparent transparent #7e5aff  #7e5aff;"></span>
            <div class="market-content__item">
              <div class="m-c-i__title">地基贰级</div>
              <div class="m-c-i-info">
                <div>
                  内容：
                  <span>一手资源，诚心转让</span>
                </div>
                <div>
                  地区：
                  <span>合肥市</span>
                </div>
                <div>
                  时间：
                  <span>2019-4-4 14:29:24</span>
                </div>
              </div>
              <div class="m-c-i-price-wrap">
                价格：
                <span class="m-c-i-price">80</span>
              </div>
              <button type="button" class="m-c-i-contact-btn">立即沟通</button>
              <img class="m-c-i-flag-icon" src="../img/chu.png">
            </div>
            <div class="market-content__item">
              <div class="m-c-i__title">地基贰级</div>
              <div class="m-c-i-info">
                <div>
                  内容：
                  <span>一手资源，诚心转让</span>
                </div>
                <div>
                  地区：
                  <span>合肥市</span>
                </div>
                <div>
                  时间：
                  <span>2019-4-4 14:29:24</span>
                </div>
              </div>
              <div class="m-c-i-price-wrap">
                价格：
                <span class="m-c-i-price">80</span>
              </div>
              <button type="button" class="m-c-i-contact-btn">立即沟通</button>
              <img class="m-c-i-flag-icon" src="../img/chu.png">
            </div>
            <div class="market-content__item">
              <div class="m-c-i__title">地基贰级</div>
              <div class="m-c-i-info">
                <div>
                  内容：
                  <span>一手资源，诚心转让</span>
                </div>
                <div>
                  地区：
                  <span>合肥市</span>
                </div>
                <div>
                  时间：
                  <span>2019-4-4 14:29:24</span>
                </div>
              </div>
              <div class="m-c-i-price-wrap">
                价格：
                <span class="m-c-i-price">80</span>
              </div>
              <button type="button" class="m-c-i-contact-btn">立即沟通</button>
              <img class="m-c-i-flag-icon" src="../img/chu.png">
            </div>
            <div class="market-content__item">
              <div class="m-c-i__title">地基贰级</div>
              <div class="m-c-i-info">
                <div>
                  内容：
                  <span>一手资源，诚心转让</span>
                </div>
                <div>
                  地区：
                  <span>合肥市</span>
                </div>
                <div>
                  时间：
                  <span>2019-4-4 14:29:24</span>
                </div>
              </div>
              <div class="m-c-i-price-wrap">
                价格：
                <span class="m-c-i-price">80</span>
              </div>
              <button type="button" class="m-c-i-contact-btn">立即沟通</button>
              <img class="m-c-i-flag-icon" src="../img/chu.png">
            </div>
            <span class="after" style="border-color: #3c78f4 transparent transparent #1977d1;"></span>
          </div>
        </div>
        <div
          class="market-item clearfix"
          style="background: linear-gradient(45deg, #f07f4d, #f76a7b) no-repeat;"
        >
          <div class="market-head">
            <div class="market-head__title">
              <span>资质求购</span>
            </div>
            <div class="market-head-content-wrap">
              <div class="market-head-content">
                <span class="market-head-content__title">寻求商机（条）</span>
                <div class="market-head-content-count-wrap">
                  <div class="count">
                    <span>2</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="market-btn-wrap">查看更多</div>
          </div>
          <div class="market-content clearfix">
            <span class="before" style="border-color:  transparent transparent #f76a7b #f76a7b;"></span>
            <div class="market-content__item">
              <div class="m-c-i__title">地基贰级</div>
              <div class="m-c-i-info">
                <div>
                  内容：
                  <span>诚心买17年的装饰装修二级</span>
                </div>
                <div>
                  地区：
                  <span>合肥市</span>
                </div>
                <div>
                  时间：
                  <span>2019-4-4 14:29:24</span>
                </div>
              </div>
              <div class="m-c-i-price-wrap">
                价格：
                <span class="m-c-i-price">80</span>
              </div>
              <button type="button" class="m-c-i-contact-btn">立即沟通</button>
              <img class="m-c-i-flag-icon" src="../img/qiu.png">
            </div>
            <div class="market-content__item">
              <div class="m-c-i__title">地基贰级</div>
              <div class="m-c-i-info">
                <div>
                  内容：
                  <span>诚心买17年的装饰装修二级</span>
                </div>
                <div>
                  地区：
                  <span>合肥市</span>
                </div>
                <div>
                  时间：
                  <span>2019-4-4 14:29:24</span>
                </div>
              </div>
              <div class="m-c-i-price-wrap">
                价格：
                <span class="m-c-i-price">80</span>
              </div>
              <button type="button" class="m-c-i-contact-btn">立即沟通</button>
              <img class="m-c-i-flag-icon" src="../img/qiu.png">
            </div>
            <span class="after" style="border-color: #f77261 transparent transparent #f77261;"></span>
          </div>
        </div>
        <div
          class="market-item clearfix"
          style="background: linear-gradient(45deg, #bf5aff, #7e5aff) no-repeat;"
        >
          <div class="market-head">
            <div class="market-head__title">
              <span>技术负责人</span>
            </div>
            <div class="market-head-content-wrap">
              <div class="market-head-content">
                <span class="market-head-content__title">寻求商机（条）</span>
                <div class="market-head-content-count-wrap">
                  <div class="count">
                    <span>2</span>
                  </div>
                  <div class="count">
                    <span>6</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="market-btn-wrap">查看更多</div>
          </div>
          <div class="market-content clearfix">
            <span class="before" style="border-color:  transparent transparent #7e5aff #7e5aff;"></span>
            <div class="market-content__item">
              <div class="m-c-i__title">电子智能化技术负责人</div>
              <div class="m-c-i-info">
                <div>
                  内容：
                  <span>一手资源，诚心转让</span>
                </div>
                <div>
                  地区：
                  <span>合肥市</span>
                </div>
                <div>
                  时间：
                  <span>2019-4-4 14:29:24</span>
                </div>
              </div>
              <div class="m-c-i-price-wrap">
                价格：
                <span class="m-c-i-price">4W</span>
              </div>
              <button type="button" class="m-c-i-contact-btn">立即沟通</button>
              <img class="m-c-i-flag-icon" src="../img/chu.png">
            </div>
            <div class="market-content__item">
              <div class="m-c-i__title">电子智能化技术负责人</div>
              <div class="m-c-i-info">
                <div>
                  内容：
                  <span>一手资源，诚心转让</span>
                </div>
                <div>
                  地区：
                  <span>合肥市</span>
                </div>
                <div>
                  时间：
                  <span>2019-4-4 14:29:24</span>
                </div>
              </div>
              <div class="m-c-i-price-wrap">
                价格：
                <span class="m-c-i-price">4W</span>
              </div>
              <button type="button" class="m-c-i-contact-btn">立即沟通</button>
              <img class="m-c-i-flag-icon" src="../img/chu.png">
            </div>
            <div class="market-content__item">
              <div class="m-c-i__title">电子智能化技术负责人</div>
              <div class="m-c-i-info">
                <div>
                  内容：
                  <span>一手资源，诚心转让</span>
                </div>
                <div>
                  地区：
                  <span>合肥市</span>
                </div>
                <div>
                  时间：
                  <span>2019-4-4 14:29:24</span>
                </div>
              </div>
              <div class="m-c-i-price-wrap">
                价格：
                <span class="m-c-i-price">4W</span>
              </div>
              <button type="button" class="m-c-i-contact-btn">立即沟通</button>
              <img class="m-c-i-flag-icon" src="../img/chu.png">
            </div>
            <div class="market-content__item">
              <div class="m-c-i__title">电子智能化技术负责人</div>
              <div class="m-c-i-info">
                <div>
                  内容：
                  <span>一手资源，诚心转让</span>
                </div>
                <div>
                  地区：
                  <span>合肥市</span>
                </div>
                <div>
                  时间：
                  <span>2019-4-4 14:29:24</span>
                </div>
              </div>
              <div class="m-c-i-price-wrap">
                价格：
                <span class="m-c-i-price">4W</span>
              </div>
              <button type="button" class="m-c-i-contact-btn">立即沟通</button>
              <img class="m-c-i-flag-icon" src="../img/chu.png">
            </div>
            <span class="after" style="border-color: #a65aff transparent transparent #a65aff;"></span>
          </div>
        </div>
        <div class="public-link">
          <img src="../img/public-link.jpg" alt="广告位">
        </div>
      </div>
      <div class="operator">
        <home-con-title title="推荐运营商,RECOMMENDED CARRIER"></home-con-title>
        <div class="clearfix operator-wrap">
          <div class="operator-item">
            <div
              class="operator-assess"
              :style="{backgroundImage:'url('+require('../img/operator_top1.jpg')+')'}"
            >
              <div class="operator-count">6件</div>
              <a-rate :defaultValue="2" disabled/>
            </div>
            <img class="operator-logo" src="../img/merchant-icon.png" alt="商家logo">
            <div class="operator-info">
              <div class="operator-name">运营商名称</div>
              <div class="operator-customer-name">客服：Mona</div>
              <button class="operator-btn" type="button">了解详情</button>
            </div>
          </div>
          <div class="operator-item">
            <div
              class="operator-assess"
              :style="{backgroundImage:'url('+require('../img/operator_top2.jpg')+')'}"
              style="background: url('../../img/operator_top1.jpg') no-repeat;"
            >
              <div class="operator-count">6件</div>
              <a-rate :defaultValue="2" disabled/>
            </div>
            <img class="operator-logo" src="../img/merchant-icon.png" alt="商家logo">
            <div class="operator-info">
              <div class="operator-name">运营商名称</div>
              <div class="operator-customer-name">客服：Mona</div>
              <button class="operator-btn" type="button">了解详情</button>
            </div>
          </div>
          <div class="operator-item">
            <div
              class="operator-assess"
              :style="{backgroundImage:'url('+require('../img/operator_top3.jpg')+')'}"
            >
              <div class="operator-count">6件</div>
              <a-rate :defaultValue="2" disabled/>
            </div>
            <img class="operator-logo" src="../img/merchant-icon.png" alt="商家logo">
            <div class="operator-info">
              <div class="operator-name">运营商名称</div>
              <div class="operator-customer-name">客服：Mona</div>
              <button class="operator-btn" type="button">了解详情</button>
            </div>
          </div>
          <div class="operator-item">
            <div
              class="operator-assess"
              :style="{backgroundImage:'url('+require('../img/operator_top4.jpg')+')'}"
            >
              <div class="operator-count">6件</div>
              <a-rate :defaultValue="2" disabled/>
            </div>
            <img class="operator-logo" src="../img/merchant-icon.png" alt="商家logo">
            <div class="operator-info">
              <div class="operator-name">运营商名称</div>
              <div class="operator-customer-name">客服：Mona</div>
              <button class="operator-btn" type="button">了解详情</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-line"></div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteTop from "@/components/SiteTop";
import Navbar from "@/components/Navbar";
import HomeSearch from "@/components/HomeSearch";
import HomeConTitle from "@/components/HomeConTitle";
import SiteFooter from "@/components/SiteFooter";

export default {
  name: "home",
  components: {
    SiteTop,
    Navbar,
    HomeSearch,
    HomeConTitle,
    SiteFooter
  },
  mounted() {},
  data() {
    return {
      bannerMmarkH: null,
      serveInfo: {
        zzqg: 1,
        zzcs: 26,
        key: 62,
        look: 2033
      }
    };
  },
  computed: {
    formatZzqg() {
      return parseInt(this.serveInfo.zzqg).toLocaleString();
    },
    formatZzcs() {
      return parseInt(this.serveInfo.zzcs).toLocaleString();
    },
    formatKey() {
      return parseInt(this.serveInfo.key).toLocaleString();
    },
    formatLook() {
      return parseInt(this.serveInfo.look).toLocaleString();
    }
  },
  methods: {
    imgload() {
      this.bannerMmarkH = this.$refs.bannerWrap.offsetHeight + "px";
    }
  }
};
</script>
<style lang="scss" scoped>
$serveListItemW: 150;
$operatorItem: 285;
.home {
  .banner-wrap {
    position: relative;
    .banner-mark {
      position: absolute;
      top: 0;
      width: 100%;
      background-color: rgba(39, 45, 101, 0.7);
    }
    .banner-content {
      top: 18%;
      position: absolute;
      width: 80%;
      left: 50%;
      margin-left: -40%;
    }
    .banner-text {
      font-size: 58px;
      color: #fff;
      margin-bottom: 20px;
      @media screen and (max-width: 1366px) {
        font-size: 41px;
      }
    }
  }
  .home-hot-box {
    .serve {
      padding-top: 24px;
      width: 1200px;
      margin: 0 auto;
      .serve-list {
        border-bottom: 1px solid #efefef;
      }
      .serve-list-item {
        float: left;
        width: #{$serveListItemW}px;
        height: 210px;
        margin: 0 calc((100% - #{$serveListItemW * 4}px) / 8);
        text-align: center;
      }
      .serve-list-item__icon {
        display: block;
        width: 120px;
        height: 120px;
        margin: 0 auto;
        text-align: center;
      }
      .serve-list-item__text {
        font-size: 18px;
        color: #222;
      }
      .serve-info {
        padding: 10px 0;
      }
      .serve-info-item {
        position: relative;
        float: left;
        width: calc(100% / 4);
        text-align: center;
        &:not(:last-child) {
          &:after {
            content: "";
            position: absolute;
            width: 1px;
            height: 24px;
            top: 7px;
            right: 0;
            background: linear-gradient(
                #fff,
                #f2f2f2 20%,
                #efefef 50%,
                #f2f2f2 80%,
                #fff
              )
              no-repeat;
          }
        }
      }
      .serve-info__count {
        margin-right: 4px;
        font-size: 22px;
        color: #ff6f00;
      }
    }
  }
  .home-content {
    background-color: #f5f5f5;
    padding-bottom: 89px;
    .market {
      width: 1200px;
      margin: 0 auto;
      padding-top: 24px;
      overflow: hidden;
      .market-item {
        position: relative;
        margin-bottom: 20px;
        background-size: 257px 100% !important;
      }
      .market-head {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 257px;
        text-align: center;
        color: #fff;
      }
      .market-head__title {
        display: table;
        width: 100%;
        height: 21.8%;
        font-size: 24px;
        font-weight: bold;
        span {
          display: table-cell;
          vertical-align: bottom;
        }
      }

      .market-head-content-wrap {
        display: table;
        width: 100%;
        height: 55.1%;
      }
      .market-head-content {
        display: table-cell;
        vertical-align: middle;
      }
      .market-head-content__title {
        font-size: 18px;
      }
      .market-head-content-count-wrap {
        margin-top: 19px;
        .count {
          position: relative;
          display: inline-block;
          padding: 0 10px;
          font-size: 36px;
          text-align: center;
          color: #222;
          &:not(:last-child) {
            margin-right: 8px;
          }
          &:before,
          &:after {
            content: "";
            left: 0;
            position: absolute;
            width: 100%;
            height: 50%;
          }
          &:before {
            top: 0;
            background: linear-gradient(#fff, #c5cee9) no-repeat;
            border-radius: 8px 8px 0 0;
          }
          &:after {
            bottom: 0;
            background: #fff;
            border-radius: 0 0 8px 8px;
          }
          span {
            position: relative;
            z-index: 1;
            font-weight: bold;
          }
        }
      }
      .market-btn-wrap {
        width: 120px;
        margin: 0 auto;
        padding: 4px 30px;
        border-radius: 4px;
        border: 1px solid #fff;
      }
      .market-content {
        position: relative;
        width: 943px;
        margin: 8px 0;
        float: right;

        .before {
          position: absolute;
          top: -8px;
          left: 0;
          border-width: 4px 8px;
          border-style: solid;
        }
        .after {
          position: absolute;
          bottom: -8px;
          left: 0;
          border-width: 4px 8px;

          border-style: solid;
        }
      }
      .market-content__item {
        position: relative;
        height: 200px;
        width: 471px;
        padding: 33px 0 0 40px;
        float: left;
        background: #ff6f00;
        margin-right: 1px;
        margin-bottom: 1px;
        background-color: #fff;
        &:nth-child(odd) {
          margin-right: 0;
        }
        &:last-of-type {
          margin-bottom: 0;
        }
        &:nth-last-child(3) {
          margin-bottom: 0;
        }
        .m-c-i__title {
          margin-bottom: 19px;
          font-size: 18px;
          color: #333;
        }
        .m-c-i-info {
          line-height: 30px;
        }
        .m-c-i-price-wrap,
        .m-c-i-contact-btn {
          position: absolute;
        }
        .m-c-i-price-wrap {
          top: 69px;
          right: 40px;
        }
        .m-c-i-price {
          font-size: 18px;
          color: #ff6f00;
        }
        .m-c-i-contact-btn {
          right: 40px;
          bottom: 24px;
          width: 128px;
          height: 36px;
          color: #fff;
          background-color: #128bed;
        }
        .m-c-i-flag-icon {
          position: absolute;
          top: 0;
          right: 40px;
        }
      }
      .public-link {
        height: 300px;
      }
    }
    .operator {
      width: 1200px;
      margin: 0 auto;
      padding-top: 24px;
      overflow: hidden;
      .operator-item {
        position: relative;
        float: left;
        width: #{$operatorItem}px;
        height: 253px;
        margin-right: calc((100% - #{$operatorItem * 4}px) / 3);
        border-radius: 4px;
        overflow: hidden;
        &:last-child {
          margin-right: 0;
        }
        .operator-assess {
          height: 77px;
          padding: 10px;
          text-align: right;
        }
        .operator-count {
          width: 48px;
          height: 25px;
          margin-left: auto;
          padding: 2px 0;
          border-radius: 12.5px;
          text-align: center;
          background-color: #fff;
          color: #128bed;
        }
        .operator-logo {
          position: absolute;
          top: 49px;
          left: 24px;
        }
        .operator-info {
          height: calc(100% - 77px);
          padding: 44px 0 0 23px;
          background-color: #fff;
        }
        .operator-name {
          font-size: 18px;
        }
        .operator-customer-name {
          margin-top: 8px;
          font-size: 12px;
        }
        .operator-btn {
          width: 120px;
          height: 32px;
          margin: 28px 0 0 56px;
          border-radius: 4px;
          border: 1px solid #128bed;
          color: #128bed;
        }
      }
    }
  }
  .footer-line {
    position: absolute;
	width: 100%;
	height: 1px;
  }
}
</style>

