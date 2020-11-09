<template>
  <div class="login">
    <vue-particles
      class="particles"
      color="#6495ED"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#6495ED"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.6"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    />
    <div class="some-space">
      <el-form ref="loginForm" :rules="loginRules" :model="login" class="form">
        <h2>大数据可视化平台</h2>
        <el-form-item prop="username">
          <el-input v-model="login.username" prefix-icon="el-icon-user" placeholder="请输入用户名" class="rest-input" />
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="login.password" prefix-icon="el-icon-lock" placeholder="请输入密码" class="rest-input" />
        </el-form-item>
        <el-button class="loginbtn" @click="loginIn">立即登录</el-button>
      </el-form>
    </div>
    <background-image />
  </div>
</template>

<script>
import BackgroundImage from '../components/BackgroundImage'
export default {
  name: 'Login',
  components: { BackgroundImage },
  data() {
    return {
      login: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    loginIn() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
// 重置elementui
::v-deep .el-input__inner {
  margin-top: 5px;
  background-color: #fff0;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #d3d7f7;
  color: #fff;
  font-size: 16px;
}
</style>

<style lang="scss" scoped>
.particles {
  position: relative;
  z-index: 1001;
}
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.some-space {
  color: white;
  font-weight: 100;
  letter-spacing: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1001;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);

  -ms-animation: cloud 2s 3s ease-in infinite alternate;
  -moz-animation: cloud 2s 3s ease-in infinite alternate;
  -webkit-animation: cloud 2s 3s ease-in infinite alternate;
  -o-animation: cloud 2s 3s ease-in infinite alternate;
  -webkit-animation: cloud 2s 3s ease-in infinite alternate;
  animation: cloud 2s 3s ease-in infinite alternate;
}
.form {
  width: 500px;
  margin: 0 auto;
  padding: 35px 30px 25px;
  background: rgba(36, 36, 85, 0.5);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}
.loginbtn {
  margin: 20px 0;
  width: 100%;
  background-color: #fff0;
  color: #d3d7f7;
  font-size: 16px;
  &:hover {
    color: #fff;
    background: #0090ff;
    border-color: #0090ff;
  }
}
@-ms-keyframes cloud {
  0% {
    -ms-transform: translate(-50%, -50%);
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    -ms-transform: translate(-50%, -40%);
  }
}
@-moz-keyframes cloud {
  0% {
    -moz-transform: translate(-50%, -50%);
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    -moz-transform: translate(-50%, -40%);
  }
}
@-o-keyframes cloud {
  0% {
    -o-transform: translate(-50%, -50%);
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    -o-transform: translate(-50%, -40%);
  }
}
@-webkit-keyframes cloud {
  0% {
    -webkit-transform: translate(-50%, -50%);
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(-50%, -40%);
  }
}
@keyframes cloud {
  0% {
    transform: translate(-50%, -50%);
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -40%);
  }
}
</style>
