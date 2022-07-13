<template>
  <nav>
    <div class="left">
        <div v-if="isLogin">
            <router-link to="/home">欢迎你，{{username}}</router-link>&#8195;&#8195;
            <button @click="loginOut">注销</button>&#8195;&#8195;
        </div>

        <div v-else>
            <router-link to="/login">登录</router-link>
            <router-link to="/regist">免费注册</router-link>
        </div>
      </div>
    
<div class="right">
      <router-link to="/">主页</router-link> 
      <router-link to="/buy">购物车</router-link>
      <router-link to="/shop">商品分类</router-link>
      <router-link to="/collect">收藏夹</router-link>
      <router-link to="/my">个人中心</router-link>
      <router-link to="/about">联系客服</router-link>
  </div>
  </nav>
<router-view/>
</template>

<script>

export default {
   computed:{
     isLogin(){
       return this.$store.state.userInfo.isLogin
     },
     username(){
        return this.$store.state.userInfo.username
     }
   },
  methods:{
    loginOut(){
      this.$store.commit("loginOut")
      window.sessionStorage.removeItem('userInfo')
      this.$router.push('/login')
    }
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

nav {
  padding: 8px;
  background-color: rgba(202, 133, 252, 0.4);
  display: flex;
  justify-content: space-between;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-align: center;
    text-decoration: none;
    &.router-link-exact-active {
      color: #ff0000;
    }
  }
  *{
    margin-left: 30px;
  }
}
</style>
