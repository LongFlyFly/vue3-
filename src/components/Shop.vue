<template>
    <div class="background">     
    <ul>
      <li><router-link to="/girl">女装 / 内衣 / 奢品</router-link></li>
      <li><router-link to="/foot">女鞋 / 男鞋 / 书包</router-link></li>
      <li><router-link to="/decoration">美妆 / 装饰 / 洗护</router-link></li>
      <li><router-link to="/boy">男装 / 运动 / 百货</router-link></li>
      <li><router-link to="/dian">家装 / 电器 / 车品</router-link></li>
      <li><router-link to="/abulans">医药 / 保健 / 进口</router-link></li>
    </ul>
    <!-- 显示 -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
    .background{
        background-color: rgb(231, 231, 231);
        height: 50px;
        width: 100%;
    }
    ul{
         display: flex;
         justify-content: space-between;

    }
    li{
        list-style: none;
        float: left;
    }
    a{
        line-height: 50px;
        text-decoration: none;
        color: black;
        justify-content: space-between;
    }
    a:hover{
        color: orange;
        text-decoration: underline;
    }
</style>