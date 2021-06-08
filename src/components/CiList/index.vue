<template>
  <div class="cinema_body">
    <ul>
      <li>
        <div>
          <span>中影Le影城</span>
          <span class="q"><span class="price">13</span> 元起</span>
        </div>
        <div class="address">
          <span>龙岗区吉华街道三联社区三联商业广场3层</span>
          <span>103.8km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院(澳东世纪店)</span>
          <span class="q"><span class="price">22.9</span> 元起</span>
        </div>
        <div class="address">
          <span>龙华区龙华新区龙观东路与清龙路交汇处保利天街3楼保利国际影城</span>
          <span>93.8km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>中影海岸影城（葵涌店</span>
          <span class="q"><span class="price">13</span> 元起</span>
        </div>
        <div class="address">
          <span>龙岗区葵涌街道葵新北路东侧农贸综合市场2﹟3楼</span>
          <span>131.4km</span>
        </div> 
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
          <div>改签</div>
          <div>退</div>
        </div>
      </li>
      <li>
        <div>
          <span>完美世界影城（深圳沙井店）</span>
          <span class="q"><span class="price">14</span> 元起</span>
        </div>
        <div class="address">
          <span>宝安区（原17.5影城）沙井街道新沙路与中心路交汇处华润万家4楼A</span>
          <span>72.5km</span>
        </div>
        <div class="card">
          <div>折扣卡</div>
          <div>小吃</div>
          <div>改签</div>
        </div>
      </li>
      <li>
        <div>
          <span>非凡数字影城</span>
          <span class="q"><span class="price">14</span> 元起</span>
        </div>
        <div class="address">
          <span>宝安区石岩街道塘头大道39号一楼（邮政银行旁）</span>
          <span>83.9km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
          <div>退</div>
        </div>
      </li>
      <li>
        <div>
          <span>SFC上影影城（观澜店）</span>
          <span class="q"><span class="price">14</span> 元起</span>
        </div>
        <div class="address">
          <span>龙华区观澜大道117号福城天虹购物中心F227</span>
          <span>92.9km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
          <div>杜比全景声厅</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CiList"
};
</script>

<style scoped>
#content .cinema_body {
  flex: 1;
  overflow: auto;
}
.cinema_body ul {
  padding: 20px;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.cinema_body div {
  margin-bottom: 10px;
}
.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 13px;
  color: #666;
}
.cinema_body .address span:nth-of-type(2) {
  float: right;
}
.cinema_body .card {
  display: flex;
}
.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
.cinema_body .card div.or {
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
</style>
