<template>
  <div class="market-search">
    <div class="market-search-item clearfix">
      <div class="market-search-l">
        <span>资质类型</span>
      </div>
      <div class="market-search-r">
        <div class="market-search-r-item">
          <span
            class="market-search-r-item__label"
            :class="{'market-search-r-item__label--active':zzlxCurrentSel==index}"
            v-for="(item,index) in zzlxShowItem"
            :key="index"
            @click="selectItem('zzlx',index)"
          >{{item}}</span>
        </div>
        <button type="button" class="toggle-btn" @click="toggleShow('zzlxShowItem',zzlx)">
          <span v-if="zzlxShowItem.length==zzlx.length">
            收起
            <a-icon type="caret-up"/>
          </span>
          <span v-else>
            展开
            <a-icon type="caret-down"/>
          </span>
        </button>
      </div>
    </div>
    <div class="market-search-item clearfix">
      <div class="market-search-l">
        <span>有效期限</span>
      </div>
      <div class="market-search-r">
        <div class="market-search-r-item">
          <span
            :class="{'market-search-r-item__label--active':effDateCurrentSel==index}"
            class="market-search-r-item__label"
            v-for="(item,index) in effDateShowItem"
            :key="index"
            @click="selectItem('effDate',index)"
          >{{item}}</span>
        </div>
        <button type="button" class="toggle-btn" @click="toggleShow('effDateShowItem',effDate)">
          <span v-if="effDateShowItem.length==effDate.length">
            收起
            <a-icon type="caret-up"/>
          </span>
          <span v-else>
            展开
            <a-icon type="caret-down"/>
          </span>
        </button>
      </div>
    </div>
    <div class="market-search-item clearfix">
      <div class="market-search-l">
        <span>省级</span>
      </div>
      <div class="market-search-r">
        <div class="market-search-r-item">
          <span
            :class="{'market-search-r-item__label--active':provinceCurrentSel==index}"
            class="market-search-r-item__label"
            v-for="(item,index) in provinceShowItem"
            :key="index"
            @click="selectItem('province',index)"
          >{{item}}</span>
        </div>
        <button type="button" class="toggle-btn" @click="toggleShow('provinceShowItem',province)">
          <span v-if="provinceShowItem.length==province.length">
            收起
            <a-icon type="caret-up"/>
          </span>
          <span v-else>
            展开
            <a-icon type="caret-down"/>
          </span>
        </button>
      </div>
    </div>
    <div class="market-search-item clearfix">
      <div class="market-search-l">
        <span>城市</span>
      </div>
      <div class="market-search-r">
        <div class="market-search-r-item">
          <span
            :class="{'market-search-r-item__label--active':cityCurrentSel==index}"
            class="market-search-r-item__label"
            v-for="(item,index) in cityShowItem"
            :key="index"
            @click="selectItem('city',index)"
          >{{item}}</span>
        </div>
        <button type="button" class="toggle-btn" @click="toggleShow('cityShowItem',city)">
          <span v-if="cityShowItem.length==city.length">
            收起
            <a-icon type="caret-up"/>
          </span>
          <span v-else>
            展开
            <a-icon type="caret-down"/>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zzlxCurrentSel: 0,
      zzlxShowItem: [],
      zzlx: [
        "不限",
        "施工总承包资质",
        "施工专业承包资质",
        "施工劳务资质",
        "承装类承装资质",
        "设计资质",
        "房地产资质",
        "其他"
      ],
      effDateCurrentSel: 0,
      effDateShowItem: [],
      effDate: ["不限", 2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019],

      provinceCurrentSel: 0,
      provinceShowItem: [],
      province: [
        "不限",
        "安徽",
        "河北",
        "贵州",
        "重庆",
        "四川",
        "云南",
        "湖北",
        "湖南",
        "江苏",
        "浙江",
        "福建",
        "江西",
        "广州",
        "河南"
      ],
      cityCurrentSel: 0,
      cityShowItem: [],
      city: [
        "不限",
        "合肥",
        "安庆",
        "滁州",
        "芜湖",
        "铜陵",
        "马鞍山",
        "宣城",
        "黄山"
      ]
    };
  },
  mounted() {
    this.zzlxShowItem = this.zzlx;
    this.effDateShowItem = this.effDate.slice(0, 5);
    this.provinceShowItem = this.province.slice(0, 5);
    this.cityShowItem = this.city.slice(0, 5);
  },
  methods: {
    toggleShow(target, allItem) {
      if (this[target].length == allItem.length) {
        this[target] = allItem.slice(0, 5);
      } else {
        this[target] = allItem;
      }
    },
    selectItem(target, index) {
      console.log(index);
      this[`${target}CurrentSel`] = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.market-search {
  .market-search-item {
    position: relative;
    &:not(:last-child) {
      border-bottom: 1px solid #f5f5f5;
    }
    .market-search-l {
      position: absolute;
      width: 120px;
      top: 0;
      bottom: 0;
      padding-top: 15px;
      padding-left: 25px;
      background-color: #e5f3ff;
    }
    .market-search-r {
      padding: 4px 0 4px 25px;
      margin-left: 120px;
      width: calc(100% - 120px);
    }
    .market-search-r-item {
      margin-right: 80px;
      line-height: 40px;
    }
    .market-search-r-item__label {
      display: inline-block;
      width: 125px;
      color: #222;
      cursor: pointer;
      &:first-child {
        //   width: 100px;
      }
      &:hover {
        color: #128bed;
      }
    }
    .market-search-r-item__label--active {
      color: #128bed;
    }
    .toggle-btn {
      position: absolute;
      width: 60px;
      height: 24px;
      right: 20px;
      top: 13px;
      padding: 0;
      border: 1px solid #999;
      border-radius: 4px;
      color: #666;
    }
  }
}
</style>
