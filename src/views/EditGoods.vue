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
          <a href="javascript:;" class="add">
            添加商品
          </a>
          <a href="javascript:;" class="del">
            批量删除
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
                    <a href="javascipt:;" class="checkbox-btn item-check-btn">
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
                    <a href="javascript:;" class="btn-handle">修改</a>
                    <a href="javascript:;" class="btn-handle">删除</a>
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
                <a href="javascipt:;">
                           <span class="checkbox-btn item-check-btn">
                              <svg class="icon icon-ok"><use xlink:href="#icon-ok"/></svg>
                           </span>
                  <span>全选</span>
                </a>
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
                <li><a>共<i>{{all}}</i>页</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
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
        search: ''

      }
    },
    mounted(){
      this.getGoodsList();
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
      },

    },
    components: {
      NavBread,
      NavFooter,
      Modal
    },
    methods: {
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
          //console.log(res.result);
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
</style>
