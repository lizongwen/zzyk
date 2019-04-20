<template>
  <a-modal
    class="register"
    :width="490"
    :visible="visible"
    :confirmLoading="confirmLoading"
    :maskClosable="false"
    :footer="null"
    @cancel="handleCancel"
  >
    <div class="register-content">
      <img class="register-logo" src="../img/logo.png" alt="logo">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item>
          <a-input
            size="large"
            type="text"
            placeholder="手机号"
            v-decorator="[
          'userphone',
          {rules: [{ required: true, message: '手机号不能为空' }]}
        ]"
          />
        </a-form-item>
        <a-form-item>
          <a-input
            size="large"
            type="password"
            placeholder="至少6位密码，区分大小写"
            v-decorator="[
          'password',
          {rules: [{ required: true, message: '密码不能为空' }]}
        ]"
          />
        </a-form-item>
        <a-form-item>
          <a-input
            size="large"
            type="password"
            placeholder="确认密码"
            v-decorator="[
          'surepassword',
          {rules: [{ required: true, message: '确认密码不能为空' }]}
        ]"
          />
        </a-form-item>
        <a-form-item>
          <a-input
            size="large"
            type="text"
            placeholder="验证码"
            v-decorator="[
          'captcha',
          {rules: [{ required: true, message: '请输入验证码' }]}
        ]"
          >
            <a href="javascript:;" slot="addonAfter">获取短信验证码</a>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button size="large" type="primary" block html-type="submit">注册</a-button>
        </a-form-item>
      </a-form>
    </div>
  </a-modal>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      confirmLoading: false,
      checkNick: false,
      form: this.$form.createForm(this)
    };
  },
  methods: {
    showView() {
      this.visible = true;
    },
    handleCancel(e) {
      this.visible = false;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>
<style lang="scss">
.register {
  .ant-modal-close-x {
    font-size: 28px;
  }
}
</style>

<style lang="scss" scoped>
.register {
  .register-content {
    margin: 19px 51px;
    color: red;
    .register-logo {
      display: block;
      margin: 0 auto 54px;
    }
  }
}
</style>


