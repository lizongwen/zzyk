<template>
  <div class="home-con-title clearfix">
    <div class="title__line"></div>
    <div class="title__name">{{titleName}}</div>
    <div class="title__line"></div>
    <div class="title__name--en">{{titleEnName}}</div>
  </div>
</template>

<script>
export default {
  name: "HomeConTitle",
  props: ["title"],
  data() {
    return {};
  },
  computed: {
    titleName() {
      return this.title.split(",")[0];
    },
    titleEnName() {
      return this.title.split(",")[1];
    }
  }
};
</script>

<style lang="scss" scoped>
.home-con-title {
  position: relative;
  width: 352px;
  margin: 0 auto 35px auto;
  .title__line {
    float: left;
    width: 100px;
    height: 1px;
    margin-top: 15px;
    background-color: #ebebeb;
    &:last-child {
      float: right;
    }
  }
  .title__name {
    float: left;
    width: 152px;
    text-align: center;
    font-size: 18px;
    color: #666;
  }
  .title__name--en {
    position: absolute;
    bottom: -15px;
	width:100%;
    font-size: 12px;
	text-align: center;
  }
}
</style>

