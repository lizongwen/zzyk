<template>
  <div class="home-search">
    <div>
      <div class="search-category clearfix">
        <a
          class="search-category__item"
          href="javascript:;"
          @click="selectSearch(1)"
          :class="{'search-category__item--active':current==1}"
        >资质</a>
        <a
          class="search-category__item"
          href="javascript:;"
          @click="selectSearch(2)"
          :class="{'search-category__item--active':current==2}"
        >技术负责人</a>
      </div>
      <div class="search-input-wrap">
        <input class="search-input" type="text" placeholder="请输入您的要求">
        <button type="button" class="search-btn">搜一下</button>
        <div class="hot-word">
          <dl>
            <dt>本周热搜：</dt>
            <dd>幕墙技术负责人</dd>
            <dd>市政</dd>
            <dd>电子智能</dd>
            <dd>装饰</dd>
            <dd>房建三</dd>
            <dd>智能化</dd>
            <dd>幕墙</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1
    };
  },
  methods: {
    selectSearch(val) {
      this.current = val;
    }
  }
};
</script>

<style lang="scss" scoped>
.home-search {
  .search-category {
    margin-bottom: 15px;
    text-align: center;
    font-size: 18px;
    .search-category__item {
      position: relative;
      margin: 0 25px;
      display: inline-block;
      color: #e2e2f1;
      padding-left: 37px;
      background: url("../img/home_sprites.png") no-repeat;
      background-position: 0 -27px;
      &:not(:first-child) {
        background-position: -0 -81px;
        &::before {
          content: "";
          top: 5px;
          left: -25px;
          position: absolute;
          width: 2px;
          height: 17px;
          background-color: rgb(255, 255, 255);
        }
      }
    }
    .search-category__item--active {
      color: #fff;
      &:first-child {
        background-position: 0 0;
      }
      &:last-child {
        background-position: -0 -54px;
      }
      &::after {
        content: "";
        position: absolute;
        bottom: -20px;
        left: 50%;
        width: 10px;
        height: 10px;
        margin-left: -5px;
        background-color: #fff;
        transform: rotate(-45deg);
      }
    }
  }
  .search-input-wrap {
    width: 1000px;
    height: 56px;
    margin: 0 auto;
    font-size: 0;
    .search-input {
      border: none;
      width: 86%;
      height: 100%;
      padding: 0 20px;
      vertical-align: top;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      font-size: 16px;
    }
    .search-btn {
      width: 14%;
      height: 100%;
      display: inline-block;
      border: none;
      font-size: 24px;
      border-top-left-radius: 0;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 0;
      background-color: #128bed;
      color: #fff;
      cursor: pointer;
    }
    .hot-word {
      margin: 15px 0 0 144px;
      text-align: center;
      font-size: 18px;
      color: #fff;
      dl {
        overflow: hidden;
        margin: 0;
        dt,
        dd {
          float: left;
        }
        dt {
          margin-right: 15px;
        }
        dd {
          color: #e2e2f1;
          &:not(:last-child) {
            margin-right: 32px;
          }
        }
      }
    }
  }
}
</style>

