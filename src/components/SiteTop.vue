<template>
  <div class="site-top">
    <div class="site-top-nav">
      <div class="site-top-left">
        <img class="gg-icon" src="../img/gg.png">热门资讯：资质云库V1.0版本正式上线，资质运营，从未如此性感！
      </div>
      <div class="site-top-right">
        <div v-if="!loginFlag" class="site-entry">
          <a href="javascript:;" @click="showLogin">登录</a>
          <a href="javascript:;" @click="showRegister">注册</a>
        </div>
        <div v-else></div>
      </div>
    </div>
    <login ref="login" @showRegister="showRegister"/>
    <register ref="register"/>
  </div>
</template>

<script>
import Login from "@/components/Login";
import Register from "@/components/Register";
export default {
  name: "siteTop",
  data() {
    return {
      loginFlag: false
    };
  },
  methods: {
    showLogin() {
      this.$refs.login.showView();
    },
    showRegister() {
      this.$refs.register.showView();
    }
  },
  components: {
    Login,
    Register
  }
};
</script>
<style lang="scss">
.site-top {
  .rt {
    color: red;
  }
}
</style>

<style lang="scss" scoped>
.site-top {
  background-color: #ebebeb;
}
.site-top-nav {
  width: 1200px;
  height: 40px;
  margin: 0 auto;
  overflow: hidden;
}
.site-top-left {
  float: left;
  line-height: 40px;
  font-size: 12px;
  .gg-icon {
    vertical-align: -1px;
    margin-right: 12px;
  }
}
.site-top-right {
  float: right;
  line-height: 40px;
}
.site-entry {
  a {
    position: relative;
    color: rgba(0, 0, 0, 0.65);
    &:not(:first-child) {
      padding-left: 21px;
      &::before {
        content: "";
        top: 3px;
        left: 10px;
        position: absolute;
        width: 1px;
        height: 14px;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
    &:hover {
      color: #333;
    }
  }
}
</style>

