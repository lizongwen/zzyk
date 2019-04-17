<template>
  <div class="home-con-title">
    <div class="title__line"></div>
    <div class="title__name">
      <div>{{titleName}}</div>
      <div class="en">{{titleEnName}}</div>
    </div>
    <div class="title__line"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeConTitle',
  props: ['title'],
  data() {
    return {

    }
  },
  computed: {
    titleName() {
      return this.title.split(',')[0]
    },
    titleEnName() {
      return this.title.split(',')[1]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-con-title {
  overflow: hidden;
  width: 352px;
  margin: 0 auto 15px auto;
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
    .en {
      font-size: 12px;
    }
  }
}
</style>

