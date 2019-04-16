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
  </div>
</template>

<script>
import SiteTop from "@/components/SiteTop";
import Navbar from "@/components/Navbar";
import HomeSearch from "@/components/HomeSearch";

export default {
  name: "home",
  components: {
    SiteTop,
	Navbar,
	HomeSearch
  },
  mounted() {},
  data() {
    return {
      bannerMmarkH: null
    };
  },
  methods: {
    imgload() {
      this.bannerMmarkH = this.$refs.bannerWrap.offsetHeight + "px";
    }
  }
};
</script>
<style lang="scss" scoped>
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
		top:18%;
		position: absolute;
		width: 80%;
		left:50%;
		margin-left: -40%;

	}
	.banner-text{
		font-size: 58px;
		color:#fff;
		margin-bottom: 20px;
		@media screen and (max-width: 1366px) {
			font-size: 41px;
		}
	}
  }
}
</style>

