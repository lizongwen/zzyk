<template>
  <div class="site-baseview" ref="siteBase">
    <site-top></site-top>
    <navbar></navbar>
    <router-view/>
    <div class="footer-line">
      <ad-banner :adshow="adshow" :positionType="positionType"></ad-banner>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteTop from "@/components/SiteTop";
import Navbar from "@/components/Navbar";
import AdBanner from "@/components/AdBanner";
import SiteFooter from "@/components/SiteFooter";
import { handleScrollHeader } from "@/utils/util";
export default {
  data() {
    return {
      positionType: "fixed",
      htmlHeight: 0,
      PageContentHeight: 0,
      adshow: false
    };
  },
  computed: {
    finalPx() {
      return this.PageContentHeight - this.htmlHeight - 345;
    }
  },
  mounted() {
    window.onload = () => {
      window.scrollTo(0, 0);
      this.PageContentHeight = this.$refs.siteBase.clientHeight;
      this.htmlHeight = document.body.clientHeight;
      handleScrollHeader(resp => {
        if (resp.currentTop > 300) {
          this.adshow = true;
        } else {
          this.adshow = false;
        }
        if (resp.currentTop > this.finalPx) {
          this.positionType = "absolute";
        }
        if (resp.currentTop < this.finalPx) {
          this.positionType = "fixed";
        }
      });
      window.addEventListener(
        "resize",
        event => {
          clearTimeout(timer);
          let timer = setTimeout(() => {
            this.htmlHeight = document.body.clientHeight;
          }, 10);
        },
        false
      );
    };
  },
  components: {
    SiteTop,
    Navbar,
    AdBanner,
    SiteFooter
  }
};
</script>

<style lang="scss" scoped>
.site-baseview {
  .footer-line {
    position: absolute;
    width: 100%;
    height: 1px;
  }
}
</style>
