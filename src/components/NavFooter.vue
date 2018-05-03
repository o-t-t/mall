<template>
  <footer class="footer">
    <div class="footer__wrap">
      <div class="footer__secondary">
        <div class="footer__inner">
          <div class="footer__secondary__nav">
            <span>Copyright©2013-2017 天天TT.com版权所有</span>
            <a href="javascript:;">
              消费者维权热线：40040040
            </a>
            <a href="javascript:;">
              经营证照
            </a>
            <a href="javascript:;">
              天天旗下旗舰店
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
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
  .footer {
    background-color: #f5f7fc;
    color: #333;
    position: relative;
  }

  .footer__wrap {
    max-width: 1280px;
    margin: 0 auto;
  }

  .footer__secondary {
    border-top: 1px solid rgba(51, 51, 51, 0.15);
  }

  .footer__secondary .footer__inner {
    height: 100px;
  }

  .footer__inner {
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
  }

  .footer__secondary__nav {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 249px;
  }

  .footer__secondary__nav a,
  .footer__secondary__nav span {
    color: #ada9a5;
    margin-left: 3.3125em;
  }

  .footer__secondary__nav a:first-child,
  .footer__secondary__nav span:first-child {
    margin-left: 0;
  }
</style>
