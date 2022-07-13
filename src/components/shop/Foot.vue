<template>
    <div class="footer">
        <li v-for="(item, index) in list" :key="index">
      <div class="picture">
        <img :src="item.pic" alt="" />
        <h3>{{item.name}}</h3>
        <br />
        <div class="detail">
          <a href="javascript:void(0);" @click="toDetail(item)">{{item.detail}}</a><br/>
          <a href="javascript:void(0);" style="font-size: 24px; color: red">￥{{item.price}}</a><br/>
          <div class="detail">
            <button @click="sendBuy(item)">加入购物车</button> |
            <button @click="sendCollect2(item)">加入收藏夹</button>
          </div>
        </div>
      </div>
    </li>

  </div>
</template>

<script>

import {getData} from '@/api/request.js'
export default {

  data() {
    return {
      // list,
      // widthVar,
      list:[]
    }
  },
  
  // 获取json
  mounted(){
    getData("foot").then((res)=>{
        console.log(res.data);
        this.list=res.data
    })
  },

  methods:{
    // 加入购物车
    sendBuy(e){
        this.$store.commit('sendbuy',e);
        console.log(e);
      },
    // 加入收藏
    sendCollect2(e){
       this.$store.commit('send',e);
      console.log(e);
    },

    //跳转详情页面
    toDetail(item){
      this.$router.push(
        // 传递对象
        {name:'detail',params:item}
      )
    }
    
  },
};
</script>

<style lang="scss" scoped>
button:hover{
  transform: scale(1.05,1.05);
  box-shadow: 0px 0px 6px rgb(99, 143, 255);
}
button {
    background-color: red;
    color:white;
    border: none;
    border-radius: 5px;
    // 设置投影
    box-shadow: 2px 2px 3px rgb(231, 231, 231);
    cursor: pointer;
    transition: opacity 0.2s;
    outline: none;
    line-height: 1.2;
}

li {
  margin: 20px;
  background-color: rgb(243, 243, 243);
  list-style: none;
  width: 20%;
  height: 170px;
  border-radius: 5px;
  // 设置投影
  box-shadow: 2px 2px 3px rgb(231, 231, 231);
  border-bottom: rgba(255, 255, 0, 0.5) 20px solid;
}
li:hover{
  transform: scale(1.1,1.1);
   box-shadow: 0px 0px 6px rgb(255, 99, 99);
}
.detail {
  float: right;
  width: 150px;
  height: 100px;
  // 超出后显示省略号
   overflow: hidden;
  text-overflow: ellipsis;
}
h3 {
  margin-left: 140px;
}
a {
  text-decoration: none;
  color: rgb(99, 99, 99);
  font-size: 16px;
}
a:hover {
  color: orange;
}
img {
  width: 100px;
  height: 130px;
  margin-top: 3px;
  position: absolute;
  object-fit: cover;
}
.footer {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.footer:after {
  // 插值
  content: "";
  width: var(--width);
}
</style>