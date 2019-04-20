<template>
  <transition>
    <div class="ad-banner" v-show="adshow" :style="{position:positionType}" v-if="isShow">
      <div class="ad-banner-inner">
        <img class="ad-img" src="../img/ad-img.png" alt="推广图">
        <img class="ad-img1" src="../img/ad-img1.png" alt="广告语图">
        <img @click="goPage('zx')" class="ad-img2" src="../img/ad-zx-btn.png" alt="立即咨询按钮">
        <img @click="closeAdbanner" class="ad-img3" src="../img/ad-close.png" alt="关闭按钮">
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["adshow", "positionType"],
  data() {
    return {
		isShow:true
	};
  },
  mounted(){
  },
  methods: {
    closeAdbanner() {
		this.isShow=false;
    },
    goPage(name) {
      alert("立即咨询");
    }
  }
};
</script>
<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-leave,
.v-enter-to {
  opacity: 1;
}
</style>
<style lang="scss" scoped>
.ad-banner {
  width: 100%;
  background: rgba(23, 23, 28, 0.6);
  bottom: 0;
  .ad-banner-inner {
    width: 1200px;
    height: 200px;
    margin: 0 auto;
    position: relative;
    .ad-img {
      position: absolute;
      z-index: 1;
      left: 31px;
      bottom: 7px;
    }
    .ad-img1 {
      position: absolute;
      left: 417px;
      bottom: 26px;
    }
    .ad-img2 {
      position: absolute;
      bottom: 30px;
      right: 100px;
      cursor: pointer;
    }
    .ad-img3 {
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }
  }
}
</style>

