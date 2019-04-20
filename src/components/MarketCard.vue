<template>
  <div class="market-card">
    <div class="market-card-head">{{markData.dept}}</div>
    <div class="market-card-body">
      <div class="market-price">
        价格：
        <span class="priceNum">{{markData.price}}</span>
      </div>
      <div class="market-content">
        内容：
        <span>{{markData.content}}</span>
      </div>
      <div class="market-area">
        地区：
        <span>{{markData.area}}</span>
      </div>
      <div class="market-date">
        发布时间：
        <span>{{markData.date}}</span>
      </div>
    </div>
    <div class="market-card-foot">
      <button type="button" class="market-card-foot_btn">立即沟通</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["markData"]
};
</script>

<style lang="scss" scoped>
.market-card {
  border-radius: 4px;
  background-color: #fff;
  width: 285px;
  margin: 0 20px 20px 0;
  overflow: hidden;
  .market-card-head {
    padding: 13px 20px;
    border-top: 6px solid #128bed;
    font-size: 18px;
    font-weight: bold;
  }
  .market-card-body {
    padding-left: 20px;
  }
  .market-card-foot {
    padding: 15px;
  }
  .market-card-foot_btn {
    display: block;
    margin: 5px auto 0;
    width: 128px;
    height: 36px;
    background: #128bed;
    color: #fff;
  }
  .market-price {
    margin-bottom: 10px;
    .priceNum {
      font-size: 24px;
      color: #ff6f00;
    }
  }
  .market-content,
  .market-area,
  .market-date {
    line-height: 22px;
  }
}
</style>
