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
          <div class="serve-list-item"></div>
          <div class="serve-list-item"></div>
          <div class="serve-list-item"></div>
          <div class="serve-list-item"></div>
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
          <div class="market-head"></div>
          <div class="market-content clearfix">
            <span class="before" style="border-color: transparent transparent #7e5aff  #7e5aff;"></span>
            <div class="market-content__item"></div>
            <div class="market-content__item"></div>
            <div class="market-content__item"></div>
            <div class="market-content__item"></div>
            <span class="after" style="border-color: #3c78f4 transparent transparent #1977d1;"></span>
          </div>
        </div>
        <div
          class="market-item clearfix"
          style="background: linear-gradient(45deg, #f07f4d, #f76a7b) no-repeat;"
        >
          <div class="market-head"></div>
          <div class="market-content clearfix">
            <span class="before" style="border-color:  transparent transparent #f76a7b #f76a7b;"></span>
            <div class="market-content__item"></div>
            <div class="market-content__item"></div>
            <span class="after" style="border-color: #f77261 transparent transparent #f77261;"></span>
          </div>
        </div>
        <div
          class="market-item clearfix"
          style="background: linear-gradient(45deg, #bf5aff, #7e5aff) no-repeat;"
        >
          <div class="market-head"></div>
          <div class="market-content clearfix">
            <span class="before" style="border-color:  transparent transparent #7e5aff #7e5aff;"></span>
            <div class="market-content__item"></div>
            <div class="market-content__item"></div>
            <div class="market-content__item"></div>
            <div class="market-content__item"></div>
            <div class="market-content__item"></div>
            <div class="market-content__item"></div>
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
          <div class="operator-item"></div>
          <div class="operator-item"></div>
          <div class="operator-item"></div>
          <div class="operator-item"></div>
        </div>
      </div>
    </div>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
  </div>
</template>

<script>
import SiteTop from "@/components/SiteTop";
import Navbar from "@/components/Navbar";
import HomeSearch from "@/components/HomeSearch";
import HomeConTitle from "@/components/HomeConTitle";

export default {
  name: "home",
  components: {
    SiteTop,
    Navbar,
    HomeSearch,
    HomeConTitle
  },
  mounted() { },
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
      return parseInt(this.serveInfo.zzqg).toLocaleString()
    },
    formatZzcs() {
      return parseInt(this.serveInfo.zzcs).toLocaleString()
    },
    formatKey() {
      return parseInt(this.serveInfo.key).toLocaleString()
    },
    formatLook() {
      return parseInt(this.serveInfo.look).toLocaleString()
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
        background-color: lawngreen;
      }
      .serve-info {
        padding: 10px 0;
      }
      .serve-info-item {
        float: left;
        width: calc(100% / 4);
        text-align: center;
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
	padding-bottom:89px ;
    .market {
      width: 1200px;
      margin: 0 auto;
      padding-top: 24px;
      overflow: hidden;
      .market-item {
        position: relative;
        margin-bottom: 20px;
        background-size: 256px 100% !important;
      }
      .market-head {
        width: 257px;
        height: 100%;
        float: left;
      }
      .market-content {
        position: relative;
        width: 943px;
        margin: 8px 0;
        float: right;
        background-color: #fff;
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
        height: 200px;
        width: 50%;
        float: left;
        background: #ff6f00;
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
        float: left;
        width: #{$operatorItem}px;
        height: 300px;
        margin-right: calc((100% - #{$operatorItem * 4}px) / 3);
        background-color: lawngreen;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>

