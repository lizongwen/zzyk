<template>
  <div class="site-footer">
    <div class="site-footer-wrap">
      <div class="site-footer-info">
        <div class="site-footer-l-info">
          <div class="site-footer-l-kf">
            <div class="tel">
              客服支持
              <p>000-00000000</p>
            </div>
            <div class="qq">
              在线咨询
              <p>09:00—17:50</p>
            </div>
          </div>
          <div class="site-footer-l-qrcode">
            <img src="../img/qrcode.png">
            <p>微信公众号</p>
          </div>
        </div>
        <div class="site-footer-r-info">
          <dl>
            <dt>资质服务运营</dt>
            <dd>
              <a href="javascript:;">资质办理</a>
            </dd>
            <dd>
              <a href="javascript:;">人才服务</a>
            </dd>
            <dd>
              <a href="javascript:;">资质转让</a>
            </dd>
          </dl>
          <dl>
            <dt>平台简介</dt>
            <dd>
              <a href="javascript:;">商务合作</a>
            </dd>
            <dd>
              <a href="javascript:;">联系方式</a>
            </dd>
            <dd>
              <a href="javascript:;">关于我们</a>
            </dd>
          </dl>
          <dl>
            <dt>友情链接</dt>
            <dd>
              <a href="javascript:;">安徽省住房和城乡建设厅</a>
            </dd>
            <dd>
              <a href="javascript:;">安徽省建筑市场监管和公共服务平台</a>
            </dd>
            <dd>
              <a href="javascript:;">全国建筑市场监管和公共服务平台</a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="site-copy-wrap">
      <div>免责声明</div>
      <div>Copyright 2018-2026 资质云库 皖ICP备14055920号</div>
      <div>本站是一个信息交互平台,用户所发布信息与本站无关!请勿发布违法信息！</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.site-footer {
  color: #ccc;
  .site-footer-wrap {
    height: 230px;
    background-color: #1f1f24;
    overflow: hidden;
  }
  .site-footer-info {
    width: 1200px;
    margin: 30px auto;
    overflow: hidden;
  }
  .site-footer-l-info {
    float: left;
    width: 462px;
    height: 170px;
  }

  .site-footer-l-kf {
    float: left;
    width: 50%;
    margin-top: 15px;
    .tel,
    .qq {
      min-height: 50px;
      padding-left: 92px;
      font-size: 20px;
      text-align: center;
      p {
        font-size: 18px;
      }
    }
    .tel {
      background: url("../img/tel.png") no-repeat left center;
    }
    .qq {
      margin-top: 25px;
      background: url("../img/qq.png") no-repeat left center;
    }
  }
  .site-footer-l-qrcode {
    width: 147px;
    float: left;
    margin-top: 20px;
    padding-left: 37px;
    p {
      display: block;
      text-align: center;
      margin-top: 5px;
    }
  }

  .site-footer-r-info {
    float: left;
    display: table;
    width: 738px;
    height: 133px;
    margin-top: 20px;
    padding-top: 13px;
    padding-left: 80px;
    border-left: 1px solid #fff;
    color: #fff;
    dl {
      display: table-cell;
      dt {
        line-height: 31px;
        font-size: 18px;
        font-weight: bold;
      }
      dd {
        a {
          color: #ccc;
        }
      }
    }
  }

  .site-copy-wrap {
    height: 115px;
    padding-top: 20px;
    text-align: center;
    font-size: 12px;
    line-height: 2;
    background-color: #17171c;
  }
}
</style>

