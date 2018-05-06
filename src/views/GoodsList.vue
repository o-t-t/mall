<template>
  <div class="hello">
    <nav-header></nav-header>
    <nav-bread>
      <span>商品列表</span>
      <div slot="form" class="search">
        <form action="" method="get">
          <span class="kuan"><input name="" value="请输入商品关键字" type="text" /></span><span class="an"><input name="" value="搜索" type="button" /></span>
        </form>
      </div>
    </nav-bread>
    <div class="accessory-result-page">
      <div class="container">
        <div class="nav-category">
          <ul class="nav-type">
            <li><a href="javascript:void(0)">小白鞋</a></li>
            <li><a href="javascript:void(0)">手表</a></li>
            <li><a href="javascript:void(0)">手机</a></li>
            <li><a href="javascript:void(0)">耳机</a></li>
            <li><a href="javascript:void(0)">服装</a></li>
            <li><a href="javascript:void(0)">背包</a></li>
          </ul>
        </div>

        <div class="filter-nav">
          <span class="sortby">排序:</span>
          <a href="javascript:void(0)" class="default cur" @click="defaultSort">默认</a>
          <a href="javascript:void(0)" class="price" v-bind:class="{'sort-up': sortFlag}" @click="sortGoods">价格 <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a href="javascript:void(0)" class="filterby" @click.stop="showFilterPop">筛选</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter" id="filter" v-bind:class="{'filterby-show':filterBy}">
            <dl class="filter-price">
              <dt>价格区间:</dt>
              <!--v-bind:class="{'cur': priceChecked == 'all'}"是动态绑定cur这个类名，如果priceChecked==all 为true的话，就用cur这个类名-->
              <dd><a href="javascript:void(0)" @click="setPriceFilter('all')" v-bind:class="{'cur': priceChecked == 'all'}">选择价格</a></dd>
              <dd v-for="(item,index) in priceFilter">
                <a href="javascript:void(0)" @click="setPriceFilter(index)" v-bind:class="{'cur': priceChecked == index}">￥{{item.startPrice}} - {{item.endPrice}}元</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="item in goodsList">
                  <div class="pic">
                    <a href="#"><img v-lazy="'/static/' + item.productImage" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.salePrice}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      <a href="javascript:;" class="btn btn--m">购买</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!--<div class="view-more-normal page-bar"
                 v-infinite-scroll="loadMore"
                 infinite-scroll-disabled="busy"
                 infinite-scroll-distance="20">-->
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
            <!--</div>-->
          </div>
        </div>
      </div>
    </div>
    <!--<page></page>-->
    <nav-footer></nav-footer>
  </div>
</template>

<script>
  import './../assets/css/base.css'
  import './../assets/css/goods-list.css'
  import './../assets/css/page.css'
  import NavHeader from './../components/NavHeader.vue'
  import NavBread from './../components/NavBread.vue'
  import NavFooter from './../components/NavFooter.vue'
  //import Page from './../components/Page.vue'
  import axios from 'axios'
  export default {
    data() {
      return {
        goodsList: [],
        priceChecked: 'all',
        sortFlag: true,
        page: 1,
        pageSize: 8,
        /* busy:true,
         loading:false,*/
        all: 5,
        priceFilter: [
          {
            startPrice: '0.00',
            endPrice: '100.00'
          },
          {
            startPrice: '100.00',
            endPrice: '500.00'
          },
          {
            startPrice: '500.00',
            endPrice: '1000.00'
          },
          {
            startPrice: '1000.00',
            endPrice: '2000.00'
          },
          {
            startPrice: '2000.00',
            endPrice: '3000.00'
          },
          {
            startPrice: '3000.00',
            endPrice: "6000.00"
          }
        ],
        filterBy: false
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
        while (left <= right){
          ar.push(left)
          left ++
          //console.log(ar);
        }
        return ar
      }
    },
    components: {
      NavHeader,
      NavBread,
      NavFooter
      // Page
    },
    methods: {
      getGoodsList(){
        var param = {
          page: this.page,
          pageSize: this.pageSize,
          sort: this.sortFlag?1:-1
        }
        //this.loading = true;
        axios.get("/goods",{
          params:param
        }).then((result) => {
          console.log(result.data.result);
          var res = result.data;
          this.goodsList = res.result.list;
          /*this.loading = false;
          if(res.status == '0'){
            if(flag){
              this.goodsList = this.goodsList.concat(res.result.list);
              if(res.result.count <8){
                this.busy = true;
              }else{
                this.busy = false;
              }
            }else{
              this.goodsList = res.result.list;
              this.busy = false;
            }
          }*/
        });
      },
      defaultSort(){
        this.sortFlag = true;
        this.page = 1;
        this.getGoodsList();
      },
      sortGoods(){
        this.sortFlag = !this.sortFlag;
        this.page = 1;
        this.getGoodsList();
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
      setPriceFilter(index){
        console.log(index);
        this.priceChecked = index;
      },
      showFilterPop(){
        this.filterBy = true;
      }
      /*loadMore(){
        this.busy = true;
        setTimeout(() => {
          this.page++;
          this.getGoodsList(true);
        },500);
      }*/
    }
  }
</script>
