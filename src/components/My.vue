<template>
    <div>
       <div class="title">
            <h2>我的淘宝</h2>
       </div>

        <div class="left">
            <el-row class="tac">
                <el-col :span="24">
                    <h5 class="mb-4">全部功能</h5>
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                >
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon><location /></el-icon>
                            <span>我的</span>
                        </template>
                    <el-menu-item-group title="我的">
                        <el-menu-item index="1-1">我的购物车</el-menu-item>
                        <el-menu-item index="1-2">我的订单</el-menu-item>
                        <el-menu-item index="1-3">我的足迹</el-menu-item>
                        <el-menu-item index="1-4">我的足迹</el-menu-item>
                    </el-menu-item-group>
                    
                    </el-sub-menu>

                    <el-menu-item index="2">
                        <el-icon><icon-menu /></el-icon>
                        <span>经典收藏</span>
                    </el-menu-item>

                    <el-menu-item index="3">
                        <el-icon><document /></el-icon>
                        <span>评价管理</span>
                    </el-menu-item>

                    <el-menu-item index="4">
                        <el-icon><setting /></el-icon>
                        <router-link to="/myself"><span>个人设置</span></router-link>
                    </el-menu-item>
                </el-menu>
                </el-col>
            </el-row>   
        </div>

        <div class="center">
              <img src="../assets/logo.png">
            <div class="xinxi">
                <p>您好，尊敬的{{username}}用户</p>
            </div>
            <div class="do">
                <router-link to="/address">收货地址</router-link>
                <router-link to="/waitPay">待付款</router-link>
                <router-link to="/myson">待发货</router-link>
                <router-link to="/waitReves">待收货</router-link>
                <router-link to="/waitSay">待评价</router-link>
                <router-link to="/backPay">退款</router-link>
                <router-view></router-view>
            </div>
        </div>

        <div class="right">
             <el-calendar v-model="value" />
        </div>

    </div>
</template>

<script>

import { ref ,computed} from 'vue'
import {useStore} from 'vuex'

const value = ref(new Date())

export default{
    setup(){
        const handleOpen = (key, keyPath) => {
        console.log(key, keyPath)
        }
        const handleClose = (key, keyPath) => {
        console.log(key, keyPath)
        }
        // 创建实例
        const userstroe = useStore()
        const username = computed(()=>{
           return userstroe.state.userInfo.username
        })
         return{
            handleOpen,
            handleClose,
            username
         }

    } 
}

</script>
<style lang="scss" scoped>
a{
    text-decoration: none;
    color: black;
}
.xinxi{
    position: absolute;
    margin-left: 130px;
    margin-top: 60px;
    background-color: rgba(203, 203, 203,0.7);
    width: 650px;
    height: 50px;
    z-index: -4;
}
.do{
    position: absolute;
    margin-left: 130px;
    margin-top: 120px;
    background-color: rgba(239, 239, 239, 0.7);
    width: 625px;
    height: 50px;
    z-index: 3;
}
.xinxi p{
    line-height: 50px;
    margin-left: 100px;
}


.do a{
    line-height: 50px;
    padding: 28px;
    text-decoration: none;
    color: black;
}
.do a:hover{
    color: orange;
}
img{
    position: absolute;
    width: 150px;
    height: 150px;
    margin-left: 100px;
    margin-top: 10px;
}
    .title{
        position: absolute;
        width: 100%;
        height: 50px;
        background-color: rgb(255, 69, 56);
    }
    h2{
        line-height: 50px;
        margin-left: 100px;
        color: white;
    }
    .left{
        position: absolute;
        margin-top: 50px;
    }
    .right{
        margin-left: 755px;
        width: 500px;
    }

</style>