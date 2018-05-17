<script src="../../../../project/shop-lesson/server/routes/user.js"></script>
<template>
    <div>
      <header class="header">
        <svg class="goods-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <symbol id="icon-arrow-short" viewBox="0 0 25 32">
              <title>arrow-short</title>
              <path d="M24.487 18.922l-1.948-1.948-8.904 8.904v-25.878h-2.783v25.878l-8.904-8.904-1.948 1.948 12.243 12.243z"></path>
            </symbol>
            <symbol id="icon-status-ok" viewBox="0 0 32 32">
              <title>status-ok</title>
              <path d="M22.361 10.903l-9.71 9.063-2.998-2.998c-0.208-0.209-0.546-0.209-0.754 0s-0.208 0.546 0 0.754l3.363 3.363c0.104 0.104 0.241 0.156 0.377 0.156 0.131 0 0.261-0.048 0.364-0.143l10.087-9.414c0.215-0.201 0.227-0.539 0.026-0.754s-0.539-0.226-0.754-0.026z"></path>
              <path d="M16 30.933c-8.234 0-14.933-6.699-14.933-14.933s6.699-14.933 14.933-14.933c8.234 0 14.933 6.699 14.933 14.933s-6.699 14.933-14.933 14.933zM16 0c-8.822 0-16 7.178-16 16 0 8.823 7.178 16 16 16s16-7.177 16-16c0-8.822-7.178-16-16-16z"></path>
            </symbol>
            <symbol id="icon-cart" viewBox="0 0 38 32">
              <title>cart</title>
              <path d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z"></path>
              <path d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z"></path>
              <path d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
              <path d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
            </symbol>
          </defs>
        </svg>

      <div class="navbar">
        <div class="navbar-left-container">
          <span class="nav-brand">天天商城</span>
        </div>
        <div class="navbar-right-container">
          <div class="navbar-menu-container">
            <!--<a href="/" class="navbar-link">我的账户</a>-->
            <i class="navbar-link"></i><span class="navbar-link" v-if="nickName"><i>欢迎！</i>{{nickName}}</span>
            <a href="javascript:void(0)" class="navbar-link" @click="loginModalFlag=true" v-if="!nickName">你好，请登录</a>
            <a href="javascript:void(0)" class="navbar-link" @click="logOut" v-else>退出</a>
            <a href="javascript:void(0)" class="navbar-link" @click="regModalFlag=true" v-if="!nickName">免费注册</a>

            <!--<a href="javascript:void(0)" class="navbar-link">登出</a>-->
            <div class="navbar-cart-container">
              <span class="navbar-cart-count"></span>
              <a class="navbar-link" href="/#/cart">
                <svg class="navbar-cart-logo">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cart"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

        <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':loginModalFlag}">
          <div class="md-modal-inner">
            <div class="md-top">
              <div class="md-title">登录</div>
              <button class="md-close" @click="loginModalFlag=false">Close</button>
            </div>

            <div class="md-content">
              <div class="confirm-tips">
                <div class="error-wrap">
                  <span class="error error-show" v-show="errorTip">{{errorTip}}</span>
                </div>
                <ul>
                  <li class="regi_form_input">
                    <i class="icon IconPeople"></i>
                    <!--tabindex当浏览者使用TAB键在网页控件中移动时，将首先移动到具有最小tabIndex属性值的控件上，最后在具有最大tabIndex属性值的控件上结束移动。-->
                    <input type="text" tabindex="1" name="loginname" v-model="userName" class="regi_login_input regi_login_input_left" placeholder="用户名" data-type="loginname">
                  </li>
                  <li class="regi_form_input noMargin">
                    <i class="icon IconPwd"></i>
                    <input type="password" tabindex="2"  name="password" v-model="userPwd" class="regi_login_input regi_login_input_left login-input-no input_text" placeholder="密码" @keyup.enter="login"><!--当点击回车键的时候能自动登录-->
                  </li>
                </ul>
              </div>
              <div class="login-wrap">
                <a href="javascript:;" class="btn-login" @click="login">登  录</a>
                <a href="javascript:;" class="reg" @click="toReg">还没有账号？马上注册</a>
              </div>
            </div>
          </div>
        </div>

        <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':regModalFlag}">
          <div class="md-modal-inner">
            <div class="md-top">
              <div class="md-title">注册</div>
              <button class="md-close" @click="regModalFlag=false">Close</button>
            </div>

            <div class="md-content">
              <div class="confirm-tips">
                <div class="error-wrap">
                  <span class="error error-show" v-show="regWrong">{{regWrong}}</span>
                </div>

                <ul>
                  <li class="regi_form_input">
                    <i class="icon IconPeople"></i>
                    <input type="text" tabindex="1" name="loginname" v-model="userRegName" class="regi_login_input regi_login_input_left" placeholder="用户名">
                  </li>
                  <li class="regi_form_input">
                    <i class="icon IconPwd"></i>
                    <input type="password" tabindex="2"  name="password" v-model="userRegPwd" class="regi_login_input regi_login_input_left login-input-no input_text" placeholder="密码"><!--当点击回车键的时候能自动登录-->
                  </li>
                  <li class="regi_form_input">
                    <i class="icon IconPwd"></i>
                    <input type="password" tabindex="3" name="loginname" v-model="userComPwd" class="regi_login_input regi_login_input_left" placeholder="确认密码">
                  </li>
                  <li class="regi_form_input">
                    <i class="icon IconPhone"></i>
                    <input type="text" tabindex="4" name="loginname" v-model="userPhone" class="regi_login_input regi_login_input_left" placeholder="手机号">
                  </li>
                  <li class="regi_form_input">
                    <i class="icon IconEmail"></i>
                    <input type="text" tabindex="5" name="loginname" v-model="userEmail" class="regi_login_input regi_login_input_left" placeholder="邮箱">
                  </li>
                  <li class="regi_form_input">
                    <i class="icon IconQuestion"></i>
                    <input type="text" tabindex="6" name="loginname" v-model="userQuestion" class="regi_login_input regi_login_input_left" placeholder="提示问题">
                  </li>
                  <li class="regi_form_input">
                    <i class="icon IconAnswer"></i>
                    <input type="text" tabindex="7" name="loginname" v-model="userAnswer" class="regi_login_input regi_login_input_left" placeholder="提示答案" @keyup.enter="reg">
                  </li>
                </ul>
              </div>
              <div class="login-wrap">
                <a href="javascript:;" class="btn-login" @click="reg">立即创建</a>
                <a href="javascript:;" class="reg" @click="tologin">已有账号？马上登陆</a>
              </div>
            </div>
          </div>
        </div>

      <div class="md-overlay" v-if="loginModalFlag" @click="loginModalFlag=false" ></div>
        <div class="md-overlay" v-if="regModalFlag" @click="regModalFlag=false" ></div>
    </header>
  </div>
</template>


<script>
  import './../assets/css/login.css'

  import axios from 'axios'
  export default {
    data() {
      return {
        userName: 'admin',
        userPwd: '123456',
        errorTip: false, //当用户名密码输入错误的时候显示，默认false不显示
        loginModalFlag: false, //当点击登录的时候遮罩层显示，未点击不显示
        nickName: '',  //当登录的时候显示用户名
        userRegName: '',
        userRegPwd: '',
        userComPwd: '',
        userPhone: '',
        userEmail: '',
        userQuestion: '',
        userAnswer: '',
        regWrong: false,
        regModalFlag: false
      }
    },
    mounted(){
      this.checkLogin();
    },
    methods: {
      checkLogin(){
        axios.get('/users/checkLogin').then((response) => {
          console.log('=--------')
          let res = response.data;
          if(res.status == '0'){
            this.nickName = res.result;
            this.loginModalFlag = false;
          }else{

          }
        });
      },
      login(){
        if(!this.userName || !this.userPwd){
          //console.log("userName" + this.userName);
          this.errorTip = "账号或者密码不能为空";
          return;
        }
        axios.post("/users/login",{
          userName:this.userName,
          userPwd:this.userPwd
        }).then((response) => {
          let res = response.data
          //console.log(res.result);
          if(res.status == '0'){
            this.errorTip = false;
            this.loginModalFlag = false;
            this.nickName = res.result.userName;
          }else if(res.status == '2'){
            this.errorTip = res.result;
          }
        });
      },
      logOut(){
        axios.post("/users/logout").then((response) => {
          let res = response.data;
          if(res.status == '0'){
            this.nickName = '';
          }
        });
      },
      tologin(){
        this.loginModalFlag = true;
        this.regModalFlag = false;
        this.userName = '';
        this.userPwd = '';
        this.errorTip = false;
        this.regWrong = false;
      },
      toReg(){
        this.loginModalFlag = false;
        this.regModalFlag = true;
        this.userRegName = '';
        this.userRegPwd = '';
        this.userComPwd = '';
        this.userPhone = '';
        this.userEmail = '';
        this.userQuestion = '';
        this.userAnswer = '';
        this.errorTip = false;
        this.regWrong = false;
      },
      reg(){
        if(!this.userRegName || !this.userRegPwd || !this.userComPwd){
          this.regWrong = "账号或者密码不能为空";
          return;
        }
        if(this.userRegPwd != this.userComPwd){
          this.regWrong = "两次输入的密码不相同";
          return;
        }

        if(this.userRegPwd.length <6){
          this.regWrong = '密码的长度必须大于等于6位';
          return;
        }
        var phone = this.userPhone;
        if(!(/^1\d{10}$/.test(phone))){
          this.regWrong = '手机号码格式错误';
          return;
        }
        var email = this.userEmail;
        if(!(/^[a-zA-Z0-9][\w.-]*@[a-zA-Z0-9][\w-]*\.(?:com|cn)$/.test(email))){
          this.regWrong = '邮箱格式不正确';
          return;
        }
        axios.post('/users/reg',{
          userRegName: this.userRegName,
          userRegPwd: this.userRegPwd,
          userComPwd: this.userComPwd,
          userPhone: this.userPhone,
          userEmail: this.userEmail,
          userQuestion: this.userQuestion,
          userAnswer: this.userAnswer
        }).then((response) => {
          let res= response.data;
          if(res.status == '0'){
            console.log("注册成功");
            this.userName = this.userRegName;
            this.userPwd = this.userRegPwd;
            this.regModalFlag = false;

          }else if(res.status == '1'){
            this.regWrong = res.msg;
          }
        });
      }
    }
  }
</script>


<style>
  .header {
    width: 100%;
    background-color: white;
    font-family: "moderat",sans-serif;
    font-size: 16px;
  }

  .goods-svg {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    height: 70px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 5px 20px 10px 20px;
  }
  .navbar-left-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: -20px;
  }
  .nav-brand{
    font-family: "Microsoft YaHei";
    font-size:50px;
    color:#e21315;
    margin-left:30px;
  }
  .header a, .footer a {
    color: #666;
    text-decoration: none;
  }
  .navbar-brand-logo {
    /*width: 120px;*/
    margin-top: 10px;
  }
  a {
    -webkit-transition: color .3s ease-out;
    transition: color .3s ease-out;
  }
  .navbar-right-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .navbar-menu-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 10px;
  }
  .navbar-link {
    padding-left: 15px;
  }
  .navbar-link:hover {
    color:red;
  }
  .navbar-cart-container {
    position: relative;
  }
  .navbar-cart-count {
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -9px;
    right: -11px;
    width: 20px;
    border-radius: 10px;
    color: white;
    background-color: #eb767d;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
  .navbar-cart-logo {
    width: 25px;
    height: 25px;
    transform: scaleX(-1);
  }


</style>
