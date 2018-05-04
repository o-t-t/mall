<template>
  <div class="nav-breadcrumb-wrap">
    <div class="container">
      <slot name="form"></slot>
      <nav class="nav-breadcrumb">
        <a href="/">主页</a>
        <slot></slot>
      </nav>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>


<style>

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 10px;
  }

  .nav-breadcrumb-wrap {
    background: #f0f0f0;
  }


  /** 面包屑 **/
  .nav-breadcrumb {
    padding: 10px 0;
    line-height: 25px;
    font-size: 14px;
  }

  .nav-breadcrumb a {
    position: relative;
    margin-right: 16px;
    color: #999;
  }

  .nav-breadcrumb a:after {
    position: absolute;
    top: 3px;
    right: -12px;
    content: "/";
    line-height: 1.2;
  }

  .nav-breadcrumb a:hover {
    color: #d1434a;
  }

  .nav-breadcrumb span {
    color: #d1434a;
  }
  .kuan input{
    width:280px;
    height:38px;
   /* background:url(../img/kuan_01.jpg) no-repeat;*/
    border:1px solid transparent;;
    margin-top:4px;
    color:#989898;
  }
  .an input{
    width:100px;
    height:38px;
   /* background:url(../img/an_02.jpg) no-repeat;*/
    border:none;
  }
  .search{
    float:right;
    height:45px;
    margin:0 100px 0 0;
  }
</style>
