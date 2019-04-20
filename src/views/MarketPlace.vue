<template>
  <div class="market">
    <breadcrumb></breadcrumb>
    <div class="head-wrap clearfix">
      <div class="head-l-wrap">
        <market-search></market-search>
      </div>
      <div class="head-r-wrap">
        <img src="../img/market-logo.png">
        <button type="button" class="head-r-wrap__btn">我要求购资质</button>
        <button type="button" class="head-r-wrap__btn">我要出售资质</button>
      </div>
    </div>
    <div class="search-summary clearfix">
      <div class="search-summary-l">
        <div class="search-sort" :class="{active:currentSort==1}" @click="checkSort(1)">综合排序</div>
        <div class="search-sort" :class="{active:currentSort==2}" @click="checkSort(2)">发布时间</div>
        <div class="search-sort" :class="{active:currentSort==3}" @click="checkSort(3)">价格排序</div>
      </div>
      <div class="search-summary-r">
        共计
        <span class="search__count">{{searchCount}}</span> 条记录
      </div>
    </div>
    <div class="main-wrap">
      <div class="clearfix">
        <market-card
          :markData="item"
          class="fl"
          v-for="(item,index) in markData"
          :key="index"
          :style="3==index%4?{'margin-right':0}:null"
        />
      </div>
      <a-pagination class="text-center" :defaultPageSize="8" :defaultCurrent="1" :total="22" @change="onChangePage"/>
    </div>
    <div class="market-popular">
      <div class="market-popular-wrap">
        <head-title title="推荐热门,POPULAR RECOMMENDATION"></head-title>
        <market-card
          :markData="item"
          class="fl"
          v-for="(item,index) in popularData"
          :key="index"
          :style="3==index%4?{'margin-right':0}:null"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import MarketSearch from "@/components/MarketSearch";
import MarketCard from "@/components/MarketCard";
import HeadTitle from "@/components/HeadTitle";

export default {
  data() {
    return {
      markData: [
        {
          dept: "淮北市政三级+安许",
          price: 80,
          content: "诚心转让，需要联系",
          area: "合肥市",
          date: "2019-02-18 12:30:12"
        },
        {
          dept: "淮北市政三级+安许",
          price: 80,
          content: "诚心转让，需要联系",
          area: "合肥市",
          date: "2019-02-18 12:30:12"
        },
        {
          dept: "淮北市政三级+安许",
          price: 80,
          content: "诚心转让，需要联系",
          area: "合肥市",
          date: "2019-02-18 12:30:12"
        },
        {
          dept: "淮北市政三级+安许",
          price: 80,
          content: "诚心转让，需要联系",
          area: "合肥市",
          date: "2019-02-18 12:30:12"
        },
        {
          dept: "淮北市政三级+安许",
          price: 80,
          content: "诚心转让，需要联系",
          area: "合肥市",
          date: "2019-02-18 12:30:12"
        },
        {
          dept: "淮北市政三级+安许",
          price: 80,
          content: "诚心转让，需要联系",
          area: "合肥市",
          date: "2019-02-18 12:30:12"
        },
        {
          dept: "淮北市政三级+安许",
          price: 80,
          content: "诚心转让，需要联系",
          area: "合肥市",
          date: "2019-02-18 12:30:12"
        },
        {
          dept: "淮北市政三级+安许",
          price: 80,
          content: "诚心转让，需要联系",
          area: "合肥市",
          date: "2019-02-18 12:30:12"
        }
      ],
      popularData: [
        {
          dept: "淮北市政三级+安许1",
          price: 80,
          content: "诚心转让，需要联系",
          area: "合肥市",
          date: "2019-02-18 12:30:12"
        },
        {
          dept: "淮北市政三级+安许1",
          price: 80,
          content: "诚心转让，需要联系",
          area: "合肥市",
          date: "2019-02-18 12:30:12"
        },
        {
          dept: "淮北市政三级+安许1",
          price: 80,
          content: "诚心转让，需要联系",
          area: "合肥市",
          date: "2019-02-18 12:30:12"
        },
        {
          dept: "淮北市政三级+安许1",
          price: 80,
          content: "诚心转让，需要联系",
          area: "合肥市",
          date: "2019-02-18 12:30:12"
        }
      ],
      searchCount: 123,
      currentSort: 1
    };
  },
  methods: {
    checkSort(sort) {
      this.currentSort = sort;
    },
    onChangePage(pageNumber) {
      console.log("Page: ", pageNumber);
    }
  },
  components: {
    Breadcrumb,
    MarketSearch,
    MarketCard,
    HeadTitle
  }
};
</script>
<style  lang="scss">
.market-popular {
  .title__line {
    background-color: #747d96 !important;
  }
}
</style>

<style lang="scss" scoped>
.market {
  overflow: hidden;
  background-color: #f5f5f5;
  .head-wrap {
    width: 1200px;
    margin: 0 auto 20px;
    .head-l-wrap {
      float: left;
      width: 895px;
      background-color: #fff;
    }
    .head-r-wrap {
      float: right;
      width: 285px;
      height: 235px;
      text-align: center;
      background: url("../img/market_bg.jpg") no-repeat;
      .head-r-wrap__btn {
        width: 193px;
        height: 36px;
        border: 1px solid #fff;
        border-radius: 8px;
        color: #fff;
        + .head-r-wrap__btn {
          margin-top: 6px;
        }
      }
    }
  }
  .search-summary {
    width: 1200px;
    height: 48px;
    margin: 0 auto 20px;
    padding: 13px 25px;
    background-color: #fff;
    .search-summary-l {
      float: left;
    }
    .search-sort {
      display: inline-block;
      margin-right: 50px;
      cursor: pointer;
      &.active {
        color: #148ced;
      }
    }
    .search-summary-r {
      float: right;
    }
    .search__count {
      color: #148ced;
    }
  }
  .main-wrap {
    width: 1200px;
    margin: 0 auto 20px;
  }
  .market-popular {
    height: 403px;
    padding-top: 24px;
    background: url("../img/market-popular.jpg") no-repeat center;
    .market-popular-wrap {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
    }
  }
}
</style>
