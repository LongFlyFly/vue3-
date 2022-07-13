<template>
  <div>
    <!-- logo和搜索框 -->
   <div class="searchWrap">
      <div class="w">
        <img src="../assets/logo.png" alt="">
        <div class="search-box clearfix">
          <input class="searchInput" type="text" id="searchInput" placeholder="请输入商品名称" v-model="search"/>
          <button class="search-btn"  @click="searchResult(item)">搜索</button>
        </div>
      </div>
    </div>  
<!-- 轮番 -->

  <div class="swiper">
   <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in list" :key="item">
     <img :src="item.img" alt="">
    </el-carousel-item>
   </el-carousel>
</div>
<!-- 侧边导航栏 -->
  <div class="background">     
    <h2>分类</h2>
    <ul>
      <li><router-link to="">女装 / 内衣 / 奢品</router-link></li>
      <li><router-link to="">女鞋 / 男鞋 / 书包</router-link></li>
      <li><router-link to="">美妆 / 装饰 / 洗护</router-link></li>
      <li><router-link to="">男装 / 运动 / 百货</router-link></li>
      <li><router-link to="">家装 / 电器 / 车品</router-link></li>
      <li><router-link to="">医药 / 保健 / 进口</router-link></li>
    </ul>
  </div>
<!-- 广告 -->
  <div class="advers">
       <div style="height: 30px;width:200px;">我的日历</div>
       <div style="height: 100px;width:200px;">
        <h1>07</h1>
        <h3>星期三</h3>
        <h3>2022.07.13</h3>
      </div>
  </div>

</div>
<!-- 父传子 -->
<HelloWorld2 :message="seaList"/>
</template>

<script>
import { getSearch } from '@/api/request';
// 引入
import HelloWorld2 from './HelloWorld2.vue'
export default {
 data() {
  return {
    search:"",
    list:[
      {img:require('../assets/img/banner-1.jpg')},
      {img:require('../assets/img/banner-2.jpg')},
      {img:require('../assets/img/banner-3.jpg')},
      {img:require('../assets/img/banner-4.jpg')},
    ],
    seaList:[],
  }
 },
//  搜索的方法
      methods:{
        searchResult(){
          // 获取接口的值
          getSearch("all",this.search).then((res)=>{
            console.log(res.data);
            // 把值赋给数组
            this.seaList = res.data
          })
        },
      },


//  组件的嵌套
 components:{
  HelloWorld2
 }
};
</script>



<style lang="scss" scoped>
button:hover{
  transform: scale(1.1,1.1);
  box-shadow: 0px 0px 6px rgb(99, 143, 255);
}
.advers{
  background-color: #e7d6ff;
  margin-top: -120px;
  margin-left: 1060px;
}
.background{
  background-color: #eeeeee;
  width: 260px;
  height: 310px;
  margin-top: -330px;
  margin-left: 10px;
}

li{
  text-align: center;
  list-style: none;
  margin: 20px;
}
h2{
  text-align: center;
}
a{
  text-decoration: none;
  color:black;
}
a:hover{
  color: orange;
}

.swiper{
  margin-top: 10px;
  width: 60%;
  margin-left: calc(100% / 2 - 700px / 2);/*实现水平居中*/
}
.swiper img{
  width: 100%;
  margin-left: -300px;
  height: 120%;
}
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.w{
  text-align: center;
  margin-top: 10px;
}
  img{
    left: 300px;
    top: -10px;
    height: 150px;
    width: 150px;
    position: absolute;
  }
  input{
    width: 200px;
    height: 30px;
    border: 1px solid red;
  }
  button{
    height: 30px;
    width: 50px;
    background-color: red;
    border-radius: 5px;
    border: 0px;
    color: white;
  }
</style>