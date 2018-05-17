<template>
  <div class="hello">
    <nav-header></nav-header>
    <nav-bread>
      <span>商品列表</span>
      <div slot="form" class="search kuan an">
        <span><input class="btn" name="" value="搜索" type="button" @click="search_mode()"/></span>
        <input class="text" v-model="search" placeholder="请输入商品关键字" @keyup.enter="search_mode()" ref="sea"/><!--这里通过ref=”sea”实现搜索框内容和本地文件的双向绑定-->
      </div>
    </nav-bread>
    <div class="accessory-result-page">
      <div class="container">
        <div class="nav-category">
          <ul class="nav-type">
            <li v-for="(item,index) in goodsType">
              <a href="javascript:void(0)" v-bind:class="{'type-click':typeChecked == index}" @click="typeClick(index)">{{item.type}}</a>
            </li>
          </ul>
        </div>

        <div class="filter-nav">
          <span class="sortby">排序:</span>
          <a href="javascript:void(0)" class="default cur" v-bind:class="{'sort-up': sortFlag}" @click="defaultSort">默认</a>
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
                      <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
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
    <!--遮罩层;点击遮罩层就关闭移动端的价格数据-->
    <div class="md-overlay" v-show="overLayFlag" @click.stop="closePop"></div>
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
        typeChecked: '',
        sortFlag: true,
        page: 1,
        pageSize: 8,
        /* busy:true,
         loading:false,*/
        all: 7,
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
          },
          {
            startPrice: '6000.00',
            endPrice: "10000.00"
          },
          {
            startPrice: '10000.00',
            endPrice: "15000.00"
          }
        ],
        filterBy: false, //当没有点击筛选时，移动端价格数据是不显示的
        overLayFlag: false, //设置遮罩层
        //goodsType: ["小白鞋","手机","服装","背包","手表","耳机"]
        goodsType: [
          {
            type: "全部商品"
          },
          {
            type: "家用电器"
          },
          {
            type: "钟表"
          },
          {
            type: "服装"
          },
          {
            type: "娱乐"
          },
          {
            type:"食品"
          },
          {
            type: "家具"
          },
          {
            type: "鞋"
          }
        ],
        /*search: '',
        products: [
          {
            name: "奥康 小白鞋运动板鞋白黑35码"
          },
          {
            name: "斯纳菲 男女童小白鞋"
          },
          {
            name: "森马 运动小白鞋 白黑 37码"
          },
          {
            name: "小白鞋学生 白粉色 37码"
          },
          {
            name: "原宿百搭学生小白鞋 白色 38"
          },
          {
            name: "背包大容量学院风"
          },
          {
            name: "简约学院风气质背包 宝蓝色"
          },
          {
            name: "莱夫多功能双肩背包"
          },
          {
            name: "尼龙布背包 神秘深蓝"
          },
          {
            name: "时尚休闲女士背包 黑色"
          },
          {
            name: "双肩背包旅行黑色"
          },
          {
            name: "套装组合子母背包 咖啡图腾熊"
          },
          {
            name: "休闲韩版背包卡其色"
          },
          {
            name: "大童男孩春款两件套 服装"
          },
          {
            name: "儿童服装男童运动三件套 服装"
          },
          {
            name: "健身跑步休闲运动上衣 服装"
          },
          {
            name: "男女童长袖幼儿园园服 服装"
          },
          {
            name: "排汗弹力跑步快干衣 服装"
          },
          {
            name: "时尚服装 喇叭裤"
          },
          {
            name: "小脚哈伦裤九分 韩版服装"
          },
          {
            name: "休闲裤修身 服装"
          },
          {
            name: "休闲运动上衣 服装"
          },
          {
            name: "大众指针男表 手表"
          },
          {
            name: "防水时尚潮流男表 手表"
          },
          {
            name: "经典三盘商务男表石英表手表"
          },
          {
            name: "男表精钢捷克钻镀金 手表"
          },
          {
            name: "男表约时尚大表盘手表"
          },
          {
            name: "手表夜光防水男表"
          },
          {
            name: "华为 Mate 4GB+64GB 香槟金手机"
          },
          {
            name: "华为手机 nova2 4GB+64GB 黑"
          },
          {
            name: "三星手机 Galaxy S9+"
          },
          {
            name: "小米手机 Mix2 6GB+64GB 游戏机"
          },
          {
            name: "小米手机Max2 4GB+128GB 白"
          },
          {
            name: "漫步者 入耳式耳机"
          },
          {
            name: "索尼 无线蓝牙耳机"
          },
          {
            name: "无线降噪游戏耳机"
          },

        ]*/
        search: '',
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
      },

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
          sort: this.sortFlag?1:-1,
          priceLevel: this.priceChecked,
          proType: this.typeChecked,
          searchValue: this.search//搜索值
        }
        //this.loading = true;


        axios.get("/goods/list",{
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
      setPriceFilter(index){   //设置价格过滤器看看哪里被选中，就跳到哪里
        //console.log(index);
        this.page = 1;
        this.priceChecked = index;
        this.getGoodsList();
      },
      typeClick(index){
        //console.log(index);
        this.page = 1;
        this.typeChecked = index;
        this.getGoodsList();
      },
       search_mode(){
        this.search = this.$refs.sea.value;//把绑定值赋予全局变量search
        if (this.search) {
          //console.log(this.search);
          this.getGoodsList();
        }
      },
      addCart(productId){
         axios.post("/goods/addCart",{
           productId:productId
         }).then((res) => {
           var res = res.data;
           //console.log(productId);
           if(res.status == 0){
             alert("加入成功");
           }else{
             alert("Error msg" + res.msg );
           }
         });
      },
      showFilterPop(){
        this.filterBy = true;
        this.overLayFlag = true
      },
      closePop(){
        this.filterBy = false;
        this.overLayFlag = false
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
