<template>
  <div>
    <nav-header></nav-header>
    <div class="container">
      <div class="page-title-normal">
        <h2 class="page-title-h2"><span>订单提交成功，请尽快付款！</span></h2>
      </div>
      <!-- 进度条 -->
      <div class="check-step">
        <ul>
          <li class="cur"><span>确认</span> 收货地址</li>
          <li class="cur"><span>核对</span> 订单信息</li>
          <li class="cur"><span>支付</span> 方式</li>
          <li class="cur"><span>成功提交</span> 订单</li>
        </ul>
      </div>

      <div class="order-create">
        <div class="order-create-pic"><img src="/static/ok-2.png" alt=""></div>
        <div class="order-create-main">
          <h3>恭喜! <br>订单提交成功，请尽快付款！</h3>
          <p>
            <span>订单号：{{orderId}}</span>
            <span>应付金额：{{orderTotal | currency('￥')}}</span>
            <span>创建时间：{{createDate}}</span>
          </p>
          <div class="p-msg w">
            <div class="confirm-detail">
              <div class="info-title">收货信息</div>
              <p class="info-detail">姓名：{{addressList.userName}}</p>
              <p class="info-detail">联系电话：{{addressList.tel}}</p>
              <p class="info-detail" v-if="addressList.province">详细地址：{{addressList.province.provName}}{{addressList.city.cityName}},{{addressList.city.streetName}}</p></div>
          </div>
          <div class="confirm-table-title">
            <span class="name">商品信息</span>
            <div>
              <span class="subtotal">小计</span>
              <span class="num">数量</span>
              <span class="price">单价</span>
            </div>
          </div>
          <!--商品-->
          <div class="confirm-goods-table">
            <div class="cart-items" v-for="(item,i) in cartList" :key="i" v-if="item.checked === '1'">
              <div class="name">
                <div class="name-cell ellipsis">
                  <a href="javascript:;" title=""
                     target="_blank">{{item.productName}}</a></div>
              </div>
              <div class="n-b">
                <div class="subtotal ">
                  <div class="subtotal-cell"> {{(item.salePrice * item.productNum) | currency('￥')}}<br></div>
                </div>
                <div class="goods-num ">{{item.productNum}}</div>
                <div class="price "> {{item.salePrice | currency('￥')}}</div>
              </div>
            </div>
          </div>
          <div class="order-create-btn-wrap">
            <div class="btn-l-wrap">
              <a href="javascript:;" class="btn btn--m">购物车列表</a>
            </div>
            <div class="btn-r-wrap">
              <a href="javascript:;" class="btn btn--m">商品列表</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
  import NavHeader from './../components/NavHeader'
  import NavFooter from './../components/NavFooter'
  import NavBread from './../components/NavBread'
  import axios from 'axios'

  export default{
    data(){
      return{
        orderId: '',
        orderTotal: 0,
        createDate: '',
        addressList: [],
        cartList: [],
      }
    },
    components: {
      NavHeader,
      NavFooter,
      NavBread
    },
    mounted(){
      var orderId = this.$route.query.orderId;
      if(!orderId){
        return
      }
      axios.get('/users/orderDetail',{
        params: {
          orderId: orderId
        }
      }).then((response) => {
        let res = response.data;
        if(res.status == '0'){
          this.orderId = orderId;
          let result = res.result;
          this.orderTotal = result.orderTotal;
          this.createDate = result.createDate;
          this.addressList = result.addressInfo;
          console.log(this.addressList);
          this.cartList = result.goodsList;
          console.log(this.cartList);
        }
      });
    }
  }
</script>
