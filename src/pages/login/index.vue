<template>
  <div class="site-login-content">
    <div class="login-container">
      <div class="login-form-content">
        <div class="login-title">
          <a class="logo-link" href="https://www.xxxxxxxxxx.com" target="_blank" title="景正科技">
            <img class="logo" :src="logoUrl" alt="景正科技">
          </a>
          <span>用户登录</span>
        </div>
        <el-form class="login-form" :model="loginForm" :rules="loginRules" ref="loginForm">
          <el-form-item prop="user_name">
            <el-input placeholder="用户名" v-model="loginForm.user_name"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="密码" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="btnLoading" class="login-btn" type="primary" @click="handleSubmitClick">登 录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import logoUrl from '@/assets/logo-fang.jpg';
import { mapActions } from 'vuex';
import { handleShowMessage } from '@/utils/common';

export default {
  name: 'Login',
  data() {
    return {
      logoUrl,
      loginForm: {
        user_name: '',
        password: ''
      },
      loginRules: {
        user_name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      },
      btnLoading: false,
    }
  },
  methods: {
    ...mapActions({
      'login': 'user/login',
    }),
    handleSubmitClick() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.handleUserLogin(this.loginForm);
        } else {
          return false;
        }
      })
    },
    // 登录 api 接口调用
    handleUserLogin(params) {
      this.btnLoading = true;
      this.login(params).then(data => {
        if(data.code === 20000) {
          handleShowMessage(data.msg);
          this.$router.push('/');
        }
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        this.btnLoading = false;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.site-login-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #d2d2d2;
  .login-container {
    width: 450px;
    height: 360px;
    margin: 0 auto;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-form-content {
    width: 60%;
    height: 70%;
  }
  .login-title {
    height: 50px;
    line-height: 50px;
    font-size: 22px;
    margin-bottom: 1rem;
    text-align: center;
    font-weight: bold;
    .logo-link {
      float: left;
    }
    .logo {
      height: 50px;
    }
  }
  .login-form {
    margin: 0 auto;
  }
  .login-btn {
    width: 100%;
  }
}
</style>