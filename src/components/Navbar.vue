<template>
  <div class="navbar">
    <div class="navbar-content">
      <div class="site-logo">
        <img src="../img/logo.jpg" alt="logo">
      </div>
      <div class="site-wish">全国首家资质运营服务平台</div>
      <ul class="site-nav">
        <li class="site-nav__li">
          <router-link to="/home">首页</router-link>
        </li>
        <li class="site-nav__li">
          <router-link to="/market">交易市场</router-link>
        </li>
        <li class="site-nav__li">
          <a href="javascript:;">资质运营服务</a>
        </li>
        <li class="site-nav__li">
          <a href="javascript:;">建筑资质云平台</a>
        </li>
        <li class="site-nav__li">
          <a href="javascript:;">资质计算器</a>
        </li>
        <li class="site-nav__li">
          <a href="javascript:;">资质导航</a>
        </li>
        <li class="site-nav__li">
          <a href="javascript:;">关于我们</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  height: 88px;
  background-color: #fff;
}
.navbar-content {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.site-logo {
  float: left;
  margin-top: 17px;
}
.site-wish {
  float: left;
  margin: 34px 0 0 29px;
  font-family: STKaiti;
  font-size: 16px;
}
.site-nav {
  float: right;
  width: 720px;
  height: 100%;
  overflow: hidden;
}
.site-nav__li {
  float: left;
  height: 100%;
  padding-top: 33px;
  font-size: 18px;
  &:not(:last-child) {
    margin-right: 24px;
  }
  a {
    color: #222;
  }
  .router-link-active {
    color: #1091ff;
  }
}
</style>

