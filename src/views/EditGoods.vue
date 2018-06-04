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
      <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <symbol id="icon-add" viewBox="0 0 31 32">
            <title>add</title>
            <path class="path1" d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"></path>
          </symbol>
          <symbol id="icon-ok" viewBox="0 0 32 32">
            <title>ok</title>
            <path class="path1" d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
          </symbol>
          <symbol id="icon-edit" viewBox="0 0 32 32">
            <title>edit</title>
            <path class="path1" d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"></path>
          </symbol>
          <symbol id="icon-del" viewBox="0 0 32 32">
            <title>delete</title>
            <path class="path1" d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"></path>
            <path class="path2" d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
            <path class="path3" d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
            <path class="path4" d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
          </symbol>
          <symbol id="icon-clock" viewBox="0 0 32 32">
            <title>clock</title>
            <path class="path1" d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
          </symbol>
          <symbol id="icon-question" viewBox="0 0 32 32">
            <title>question</title>
            <path class="path1" d="M16 2.56c7.411 0 13.44 6.029 13.44 13.44s-6.029 13.44-13.44 13.44c-7.411 0-13.44-6.029-13.44-13.44s6.029-13.44 13.44-13.44zM16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16c8.822 0 16-7.178 16-16s-7.178-16-16-16z"></path>
            <path class="path2" d="M16 22.080c-1.059 0-1.92 0.861-1.92 1.92s0.861 1.92 1.92 1.92c1.059 0 1.92-0.861 1.92-1.92s-0.861-1.92-1.92-1.92z"></path>
            <path class="path3" d="M12.16 12.48c0.706 0 1.28-0.574 1.28-1.28 0-1.412 1.148-2.56 2.56-2.56s2.56 1.148 2.56 2.56c0 1.412-1.148 2.56-2.56 2.56-0.706 0-1.28 0.574-1.28 1.28v3.84c0 0.706 0.574 1.28 1.28 1.28s1.28-0.574 1.28-1.28v-2.723c2.224-0.575 3.84-2.616 3.84-4.957 0-2.823-2.297-5.12-5.12-5.12s-5.12 2.297-5.12 5.12c0 0.706 0.574 1.28 1.28 1.28z"></path>
          </symbol>
        </defs>
      </svg>
      <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1"
           xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <symbol id="icon-add" viewBox="0 0 32 32">
            <title>add2</title>
            <path class="path1"
                  d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z"></path>
          </symbol>
          <symbol id="icon-ok" viewBox="0 0 32 32">
            <title>ok</title>
            <path class="path1"
                  d="M31.020 0.438c-0.512-0.363-1.135-0.507-1.757-0.406s-1.166 0.435-1.529 0.937l-17.965 24.679-5.753-5.67c-0.445-0.438-1.035-0.679-1.664-0.679s-1.219 0.241-1.664 0.679c-0.917 0.904-0.917 2.375 0 3.279l7.712 7.6c0.438 0.432 1.045 0.681 1.665 0.681l0.195-0.008c0.688-0.057 1.314-0.406 1.717-0.959l19.582-26.9c0.754-1.038 0.512-2.488-0.538-3.233z"></path>
          </symbol>
          <symbol id="icon-edit" viewBox="0 0 32 32">
            <title>edit</title>
            <path class="path1"
                  d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"></path>
          </symbol>
          <symbol id="icon-del" viewBox="0 0 32 32">
            <title>delete</title>
            <path class="path1"
                  d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"></path>
            <path class="path2"
                  d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
            <path class="path3"
                  d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
            <path class="path4"
                  d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
          </symbol>
          <symbol id="icon-clock" viewBox="0 0 32 32">
            <title>clock</title>
            <path class="path1" fill="#605f5f"
                  d="M16 29c-7.168 0-13-5.831-13-13s5.832-13 13-13c7.168 0 13 5.832 13 13s-5.832 13-13 13zM16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16c8.822 0 16-7.178 16-16s-7.178-16-16-16z"></path>
            <path class="path2" fill="#605f5f"
                  d="M23.958 21.837l-6.958-6.489v-6.282c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5v6.934c0 0.414 0.174 0.814 0.477 1.098l7.435 6.934c0.279 0.259 0.642 0.402 1.023 0.402 0.415 0 0.814-0.174 1.096-0.477 0.564-0.605 0.532-1.555-0.073-2.12z"></path>
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
            <i class="navbar-link"></i><span class="navbar-link" v-if="nickName"><i>恭喜您成为本商城的商家，欢迎您！</i>{{nickName}}</span>
            <a href="javascript:void(0)" class="navbar-link" @click="loginModalFlag=true" v-if="!nickName">你好，请登录</a>
            <a href="javascript:void(0)" class="navbar-link" @click="logOut" v-else>退出</a>
            <a href="javascript:void(0)" class="navbar-link" @click="regModalFlag=true" v-if="!nickName">注册</a>
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
                  <input type="text" tabindex="1" name="loginname" v-model="adminName" class="regi_login_input regi_login_input_left" placeholder="商家账号" data-type="loginname">
                </li>
                <li class="regi_form_input noMargin">
                  <i class="icon IconPwd"></i>
                  <input type="password" tabindex="2"  name="password" v-model="adminPwd" class="regi_login_input regi_login_input_left login-input-no input_text" placeholder="密码" @keyup.enter="login"><!--当点击回车键的时候能自动登录-->
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
                  <input type="text" tabindex="1" name="loginname" v-model="adminRegName" class="regi_login_input regi_login_input_left" placeholder="商家账号">
                </li>
                <li class="regi_form_input">
                  <i class="icon IconPwd"></i>
                  <input type="password" tabindex="2"  name="password" v-model="adminRegPwd" class="regi_login_input regi_login_input_left login-input-no input_text" placeholder="密码"><!--当点击回车键的时候能自动登录-->
                </li>
                <li class="regi_form_input">
                  <i class="icon IconPwd"></i>
                  <input type="password" tabindex="3" name="loginname" v-model="adminComPwd" class="regi_login_input regi_login_input_left" placeholder="确认密码">
                </li>
                <li class="regi_form_input">
                  <i class="icon IconPhone"></i>
                  <input type="text" tabindex="4" name="loginname" v-model="adminPhone" class="regi_login_input regi_login_input_left" placeholder="手机号">
                </li>
                <li class="regi_form_input">
                  <i class="icon IconEmail"></i>
                  <input type="text" tabindex="5" name="loginname" v-model="adminEmail" class="regi_login_input regi_login_input_left" placeholder="邮箱">
                </li>
              </ul>
            </div>
            <div class="login-wrap">
              <a href="javascript:;" class="btn-login" @click="reg">立即创建</a>
              <a href="javascript:;" class="reg" @click="toLogin">已有账号？马上登陆</a>
            </div>
          </div>
        </div>
      </div>

      <div class="md-overlay" v-if="loginModalFlag" @click="loginModalFlag=false" ></div>
      <div class="md-overlay" v-if="regModalFlag" @click="regModalFlag=false" ></div>
    </header>
    <nav-bread>
      <span>商品管理</span>
    </nav-bread>
    <div class="container">
      <div class="filter-nav">
        <div class="edit-btn">
          <a href="javascript:;" class="del" @click="delProdsConfirm">
            批量下架
          </a>
          <a href="javascript:;" class="add" @click="addProduct">
            上新商品
          </a>
        </div>
      </div>
      <div class="cart">
        <div class="page-title-normal">
          <h2 class="page-title-h2"><span>所有商品</span></h2>
        </div>
        <div class="item-list-wrap">
          <div class="cart-item">
            <div class="cart-item-head">
              <ul>
                <li>商品</li>
                <li>ID</li>
                <li>单价</li>
                <li>库存量</li>
                <li>操作</li>
              </ul>
            </div>
            <ul class="cart-item-list">
              <li v-for="item in goodsList">
                <div class="cart-tab-1">
                  <div class="cart-item-check">
                    <a href="javascipt:;" class="checkbox-btn item-check-btn" v-bind:class="{'check':item.checked == '1'}" @click="editProduct(item)">
                      <svg class="icon icon-ok">
                        <use xlink:href="#icon-ok"></use>
                      </svg>
                    </a>
                  </div>
                  <div class="cart-item-pic">
                    <img v-lazy="'/static/' + item.productImage" :alt="item.productName">
                  </div>
                  <div class="cart-item-title">
                    <div class="item-name">{{item.productName}}</div>
                  </div>
                </div>
                <div class="cart-tab-2">
                  <div class="item-price-total">{{item.productId}}</div>
                </div>
                <div class="cart-tab-3">
                  <div class="item-price">{{item.salePrice | currency('￥')}}</div>
                </div>
                <div class="cart-tab-4">
                  <div class="item-quantity">
                    <div class="select-self select-self-open">
                      <div class="select-self-area">
                        <span class="select-ipt">{{item.productNum}}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cart-tab-5">
                  <div class="pror-item-opration">
                    <a href="javascript:;" class="btn-handle" @click="updateProduct(item)">修改</a>
                    <a href="javascript:;" class="btn-handle" @click="delProdConfirm(item)">下架</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="cart-foot-wrap">
          <div class="cart-foot-inner">
            <div class="cart-foot-l">
              <div class="item-all-check">
               <!-- <a href="javascipt:;">
                           <span class="checkbox-btn item-check-btn">
                              <svg class="icon icon-ok"><use xlink:href="#icon-ok"/></svg>
                           </span>
                  <span>全选</span>
                </a>-->
              </div>
            </div>
            <div class="page-bar">
              <ul>
                <li v-if="page>1"><a v-on:click="page--,pageClick()" href="#">上一页</a></li>
                <li v-if="page==1"><a class="banclick">上一页</a></li>
                <li v-for="index in indexs"  v-bind:class="{ 'active': page == index}">
                  <a href="#" v-on:click="btnClick(index)">{{ index }}</a>
                </li>
                <li v-if="page!=all"><a v-on:click="page++,pageClick()" href="#">下一页</a></li>
                <li v-if="page == all"><a class="banclick">下一页</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <modal v-bind:mdShow="mdShow" v-on:close="closeModal">
      <p slot="message">
        请先登录，否则无法新增商品！
      </p>
      <div slot="btnGroup">
        <a class="btn btn--m" href="javascript:void(0);" @click="mdShow = false">关闭</a>
      </div>
    </modal>
    <modal v-bind:mdShow="mdProduct" @close="closeModal">
      <p slot="title">{{pupTitle}}</p>
      <div slot="message">
        <div>
          <input class="input" type="text" tabindex="1" placeholder="商品名称" v-model="productName">
        </div>
        <div>
          <input class="input" type="text" tabindex="2" placeholder="商品ID" v-model="productId">
        </div>
        <div>
          <input class="input" type="text" tabindex="3" placeholder="商品价格" v-model="salePrice">
        </div>
        <div>
          <input class="input" type="text" tabindex="5" placeholder="添加入库量" v-model="productNum">
        </div>
        <div class="add-new-prod">
          <i>
            <svg class="icon icon-add"><use xlink:href="#icon-add"></use></svg>
          </i>
          <!--type='file'实现文件上传；accept表示上传文件类型，image表示图片，*表示所有支持的格式-->
          <input type="file"  accept="image/*" id="goodsPic"  name="goodsPic" class="uploadInput" @change="uploadFunc('goodsPic','previewPic')"/>
          <p>商品图片</p>
        </div>
        <img id="previewPic"  class="pic" src="http://placehold.it/220x220/E0E0E0/ccc.png"  alt="图片" />
        <div class="distance">
          <span  class="choose">选择商品类别：</span>
          <select class="select-type" v-model="productType">
            <option value ="全部商品">全部商品</option>
            <option value ="家用电器">家用电器</option>
            <option value="钟表">钟表</option>
            <option value="服装">服装</option>
            <option value="娱乐">娱乐</option>
            <option value="食品">食品</option>
            <option value="家具">家具</option>
            <option value="鞋">鞋</option>
          </select>
        </div>
      </div>
      <div slot="btnGroup" class="save">
        <a class="btn btn--m" href="javascript:;" @click="addProducts">添加商品</a>
      </div>
    </modal>

    <modal v-bind:mdShow="mdUpdate" @close="closeModal">
      <p slot="title">{{pupTitle}}</p>
      <div slot="message">
        <div>
          <input class="input" type="text" tabindex="1" placeholder="商品名称" v-model="productName">
        </div>
        <div>
          <input class="input" type="text" tabindex="2" placeholder="商品ID" v-model="productId">
        </div>
        <div>
          <input class="input" type="text" tabindex="3" placeholder="商品价格" v-model="salePrice">
        </div>
        <div>
          <input class="input" type="text" tabindex="5" placeholder="添加入库量" v-model="productNum">
        </div>
        <div class="add-new-prod">
          <i>
            <svg class="icon icon-add"><use xlink:href="#icon-add"></use></svg>
          </i>
          <!--type='file'实现文件上传；accept表示上传文件类型，image表示图片，*表示所有支持的格式-->
          <input type="file"  accept="image/*" id="goodsPics"  name="goodsPic" class="uploadInput" @change="uploadFunc('goodsPics','previewPics')"/>
          <p>商品图片</p>
        </div>
        <img id="previewPics"  class="pic" src="http://placehold.it/220x220/E0E0E0/ccc.png"  alt="图片" />
        <div class="distance">
          <span  class="choose">选择商品类别：</span>
          <select class="select-type" v-model="productType">
            <option value ="全部商品">全部商品</option>
            <option value ="家用电器">家用电器</option>
            <option value="钟表">钟表</option>
            <option value="服装">服装</option>
            <option value="娱乐">娱乐</option>
            <option value="食品">食品</option>
            <option value="家具">家具</option>
            <option value="鞋">鞋</option>
          </select>
        </div>
      </div>
      <div slot="btnGroup" class="save">
        <a class="btn btn--m" href="javascript:;" @click="upDateProd(productId)">修改商品</a>
      </div>
    </modal>

    <modal v-bind:mdShow="delProduct" @close="closeModal">
      <p slot="message">您确认要下架此商品么？</p>
      <div slot="btnGroup">
        <a class="btn btn--m" href="javascript:;" @click="delProd">下架</a>
        <a class="btn btn--m btn--red" href="javascript:;" @click="delProduct = false">取消</a>
      </div>
    </modal>
    <modal v-bind:mdShow="delProducts" @close="closeModal">
      <p slot="message">您确认要批量下架这些商品么？</p>
      <div slot="btnGroup">
        <a class="btn btn--m" href="javascript:;" @click="delProds">批量下架</a>
        <a class="btn btn--m btn--red" href="javascript:;" @click="delProducts = false">取消</a>
      </div>
    </modal>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
  import './../assets/css/base.css'
  import './../assets/css/goods-list.css'
  import './../assets/css/page.css'
  import './../assets/css/checkout.css'
  import './../assets/css/nav-header.css'
  import NavBread from './../components/NavBread.vue'
  import NavFooter from './../components/NavFooter.vue'
  import Modal from './../components/Modal.vue'
  import axios from 'axios'
  export default{
    data(){
      return{
        loginModalFlag: false,
        regModalFlag: false,
        errorTip: false,
        regWrong: false,
        nickName: '',
        adminName: '',
        adminPwd: '',
        adminRegName: '',
        adminRegPwd: '',
        adminComPwd: '',
        adminPhone: '',
        adminEmail: '',
        page: 1,
        all:7,
        goodsList: [],
        pageSize: 8,
        priceChecked: 'all',
        typeChecked: '',
        sortFlag: true,
        search: '',
        productName: '',
        productId: '',
        productImage: '',
        salePrice: '',
        productType: '',
        productNum: '',
        checked: 0,
        mdProduct: false,
        mdShow: false,
        delProduct: false,
        delProducts: false,
        mdUpdate: false,
        pupTitle: '',
        delItem: {},
        delItems: {},
        oldProductId: ''
      }
    },
    mounted(){
      this.getGoodsList();
      this.checkLogin();
    },
    computed: {
      indexs: function(){
        var left = 1;
        var right = this.all;
        var ar = [];
        if(this.all>= 5){
          if(this.page > 3 && this.page < this.all-2){
            left = this.page - 2
            right = this.page + 2
          }else{
            if(this.page<=3){
              left = 1
              right = 5
            }else{
              right = this.all
              left = this.all -4
            }
          }
        }
        while (left <= right){
          ar.push(left)
          left ++
          //console.log(ar);
        }
        return ar
      }

    },
    components: {
      NavBread,
      NavFooter,
      Modal
    },
    methods: {
      checkLogin(){
        axios.get('/admins/checkLogin').then((response) => {
          let res = response.data;
          //console.log(res);
          if(res.status == '0'){
            this.nickName = res.result;
            this.loginModalFlag = false;
          }else{
          }
        });
      },
      login(){
        if(!this.adminName || !this.adminPwd){
          //console.log("userName" + this.userName);
          this.errorTip = "账号或者密码不能为空";
          return;
        }
        axios.post("/admins/login",{
          adminName:this.adminName,
          adminPwd:this.adminPwd
        }).then((response) => {
          let res = response.data
          //console.log(res);
          if(res.status == '0'){
            this.errorTip = false;
            this.loginModalFlag = false;
            this.nickName = res.result.adminName;
          }else if(res.status == '2'){
            this.errorTip = res.result;
          }
        });
      },
      logOut(){
        axios.post("/admins/logOut").then((response) => {
          let res = response.data;
          //console.log(res);
          if(res.status == '0'){
            this.nickName = '';
          }
        });
      },
      reg(){
        if(!this.adminRegName || !this.adminRegPwd || !this.adminComPwd){
          this.regWrong = "账号或者密码不能为空";
          return;
        }
        if(this.adminRegPwd != this.adminComPwd){
          this.regWrong = "两次输入的密码不相同";
          return;
        }

        if(this.adminRegPwd.length <6){
          this.regWrong = '密码的长度必须大于等于6位';
          return;
        }
        var phone = this.adminPhone;
        if(!(/^1\d{10}$/.test(phone))){
          this.regWrong = '手机号码格式错误';
          return;
        }
        var email = this.adminEmail;
        if(!(/^[a-zA-Z0-9][\w.-]*@[a-zA-Z0-9][\w-]*\.(?:com|cn)$/.test(email))){
          this.regWrong = '邮箱格式不正确';
          return;
        }
        axios.post('/admins/reg',{
          adminRegName: this.adminRegName,
          adminRegPwd: this.adminRegPwd,
          adminComPwd: this.adminComPwd,
          adminPhone: this.adminPhone,
          adminEmail: this.adminEmail,
        }).then((response) => {
          let res= response.data;
          if(res.status == '0'){
            console.log("注册成功");
            this.adminName = this.adminRegName;
            this.adminPwd = this.adminRegPwd;
            this.regModalFlag = false;

          }else if(res.status == '1'){
            this.regWrong = res.msg;
          }
        });
      },
      toLogin(){
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
        this.errorTip = false;
        this.regWrong = false;
      },
      getGoodsList(){
        var param = {
          page: this.page,
          pageSize: this.pageSize,
          sort: this.sortFlag?1:-1,
          priceLevel: this.priceChecked,
          proType: this.typeChecked,
          searchValue: this.search,//搜索值
        }
        axios.get('/goods/list',{
          params: param
        }).then((response) => {
          let res= response.data;
          //console.log(res);
          this.goodsList = res.result.list;
          //console.log(this.goodsList);
        });
      },
      btnClick(data){//页码点击事件
        //console.log(data);
        if(data != this.page){
          this.page = data;
          this.getGoodsList();
        }
      },
      pageClick(){
        this.getGoodsList();
        //console.log('现在在第'+this.page+'页');
      },
      closeModal(){
        this.mdProduct = false;
        this.mdShow = false;
        this.delProduct = false;
        this.delProducts = false;
        this.mdProduct = false;
        this.mdUpdate = false;
      },
      addProduct(){
        if(!this.nickName){
          this.mdShow = true;
        }else{
          this.pupTitle = '新增商品';
          this.productId = '';
          this.productName = '';
          this.productImage = '';
          this.productNum = '';
          this.productType = '';
          this.salePrice = '';
          this.mdProduct = true;
        }
      },
      addProducts(){
        let obj = {
          productId: this.productId,
          productName: this.productName,
          productImage: document.getElementById("previewPic").src.split('/')[4],
          productNum: this.productNum,
          productType: [{
            typeId: '',
            typeName: this.productType
          }],
          salePrice: this.salePrice,
          checked: this.checked
        }
        console.log(document.getElementById("previewPic").src);
        axios.post('/admins/addProd',{
          goods: obj
        }).then((response) => {
          let res = response.data;
          if(res.status == '0'){
            this.getGoodsList();
            this.mdProduct = false;
            let img = document.getElementById('previewPic');
            img.src = 'http://placehold.it/200x113/E0E0E0/ccc.png'
          }
        });
      },
      uploadFunc(elId,imgId){
        var file = document.getElementById(elId).files[0];//获取File对象；这里是单张上传照片，[0]代表第一章图片。如果多张，就是一个var file = e.target.files;
        //console.dir(document.getElementById('goodsPic'));//console.dir()可以显示一个对象所有的属性和方法。
        //console.log(document.getElementById('goodsPic').files);
        var formData = new FormData();
        formData.append('goodsPic',file);//新建FormData对象时用formData.append()的方法将数据加载到实例对象中；
        var config = {
          headers: {'Content-Type': 'multipart/form-data'} //form表单想要传递文件需要加入multipart/form-data
        }
        axios.post('/admins/upload',formData,config).then((response) => {
          let res = response.data;
          let path = res.result.split('\\')[2];
          var img = document.getElementById(imgId);
          this.productImage = path;
          img.src = `/static/${path}`
        });
      },
      delProdConfirm(item){
        this.delItem = item;
        this.delProduct = true;
      },
      delProd(){
        axios.post('/admins/productDel',{
          productId:this.delItem.productId
        }).then((response) => {
          let res = response.data;
          //console.log(res);
          if(res.status == '0'){
            this.delProduct = false;
            let delCount = this.delItem.productNum;
            this.getGoodsList()
          }else{
            this.delProduct = false;
          }
        });
      },
      editProduct(item){
        item.checked = item.checked == '1'?'0':'1';
        this.delItems = item.checked;
        this.productId = item.productId
      },
      delProdsConfirm(){
        this.delProducts = true;
      },
      delProds(){
        let delList = this.goodsList.filter((item) => {
          return item.checked === '1';
        });
        delList = delList.map((item) => (
          item.productId
        ));
        //console.log(delList);
        axios.post('/admins/productsDel',{
          delProductId: delList
        }).then((response) => {
          let res = response.data;
          //console.log(res);
          if(res.status = '0'){
            console.log('批量删除成功');
            this.getGoodsList();
            this.delProducts = false;
          }
        });
      },
      updateProduct(item){
        this.updItem = item;
        //console.log(this.updItem);
        if(this.updItem.productId){
          this.pupTitle = '修改商品信息';
          this.productId = this.updItem.productId;
          this.productName = this.updItem.productName;
          this.productImage = this.updItem.productImage;
          this.productNum = this.updItem.productNum;
          this.productType = this.updItem.productType[0].typeName;
          this.salePrice = this.updItem.salePrice;
          this.oldProductId = this.updItem.productId
          this.mdUpdate = true;
        }
      },
      upDateProd(productId){
        let obj = {
          productId: this.productId,
          productName: this.productName,
          productImage: this.productImage,
          productNum: this.productNum,
          productType: [{
            typeId: '',
            typeName: this.productType
          }],
          salePrice: this.salePrice,
          checked: this.checked,
          oldProductId: this.oldProductId
        }
        axios.post('/admins/updateProduct',{
          goods: obj
        }).then((response) => {
          let res = response.data;
          if(res.status == '0'){
            console.log('修改成功');
            console.log(res.result);
            this.mdUpdate = false;
            this.getGoodsList();
          }
        });
      }
    }
  }
</script>
<style>
  .navbar-link:hover {
    color:red;
  }
  .page-bar{
    margin: 18px 0 0 750px;
  }
  .btn-handle{
    border: 1px solid #f0f0f0;
    background: #f0f0f0;
    display: inline-block;
    width: 38px;
    height: 25px;
    line-height: 25px;
    margin-top: 4px;
    border-radius: 5px;
    font-size: 15px;
    color: #605f5f;
  }
  .btn-handle:hover{
    background: #c1c2e6e8;
  }
  .add-new-prod{
    display: inline-block;
    position: relative;
    border:1px solid red;
    width:40%;
    margin-left:-62px;
    border-radius:6px;
    box-shadow: inset 0 3px 5px -4px rgba(0,0,0,.4), inset -1px 0 3px -2px rgba(0,0,0,.1);
    border: 1px solid #ccc;
    margin-bottom:10px;
    color:#757575;
    font-size:14px;
  }
  .add-new-prod .icon-add{
    margin:5px 0;
    width: 50px;
    height: 50px;
    fill: #605F5F;
  }
  .uploadInput {
    position:absolute;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
  .pic {
    width: 200px;
    height: 113px;
    float:right;
  }
  .distance{
    margin-top:25px;
  }
</style>
