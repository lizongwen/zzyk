<template>
  <a-modal
    class="login"
    :width="490"
    :visible="visible"
    :confirmLoading="confirmLoading"
    :maskClosable="false"
    :footer="null"
    @cancel="handleCancel"
  >
    <div class="login-content">
      <img class="login-logo" src="../img/logo.png" alt="logo">

      <a-form class="form" :form="form" @submit="handleSubmit">
        <a-form-item>
          <a-input
            size="large"
            type="text"
            placeholder="请输入手机号"
            v-decorator="[
          'userphone',
          {rules: [{ required: true, message: '手机号不能为空!' }]}
        ]"
          />
        </a-form-item>
        <a-form-item>
          <a-input
            size="large"
            type="password"
            placeholder="请输入密码"
            v-decorator="[
          'password',
          {rules: [{ required: true, message: '密码不能为空!' }]}
        ]"
          />
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
          >下次自动登陆</a-checkbox>
          <a class="forget-password fr" @click="forgetPwd" href="javascript:;">忘记密码?</a>
          <a-button size="large" type="primary" block html-type="submit">登录</a-button>
          <a class="register" href="javascript:;" @click="showRegister">免费注册>></a>
        </a-form-item>
        <div class="login-error" v-show="error"><a-icon type="minus-circle" /><span class="error-text">{{error}}</span></div>
      </a-form>
    </div>
  </a-modal>
</template>

<script>
export default {
  data() {
    return {
      error: "",
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
    },
    forgetPwd() {
      alert("忘记密码");
    },
    showRegister() {
      this.handleCancel();

      this.$emit("showRegister");
    }
  }
};
</script>
<style lang="scss">
.login {
  .ant-modal-close-x {
    font-size: 28px;
  }
}
</style>

<style lang="scss" scoped>
.login {
  .login-content {
    margin: 19px 51px;
    .login-logo {
      display: block;
      margin: 0 auto 54px;
    }
    .forget-password {
      color: #128bed;
      cursor: pointer;
    }
    .register {
      color: #128bed;
    }
    .form {
      position: relative;
      .login-error {
        position: absolute;
		top: -23px;
		font-weight: bold;
		color: #f04134;
		.error-text{
			margin-left:8px;
		}
      }
    }
  }
}
</style>

