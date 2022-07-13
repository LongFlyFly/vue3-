import { createRouter, createWebHashHistory } from 'vue-router'
import store  from '@/store'
import HomeView from '../views/HomeView.vue'
import myson from '../components/Myson.vue'
import address from '../components/do/Address.vue'
import waitPay from '../components/do/waitPay.vue'
import waitReves from '../components/do/waitReves.vue'
import waitSay from '../components/do/waitSay.vue'
import backPay from '../components/do/backPay.vue'
import myself from '../components/do/Myself.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/buy',
    name: 'buy',
    component: () => import( '../views/BuyCars.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import( '../views/MyView.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import( '../components/Detail.vue')
  },
  {
    path: '/success',
    name: 'success',
    component: () => import( '../components/successBuy.vue')
  },
  {
    path: '/my2',
    name: 'my2',
    component: () => import( '../components/My.vue'),
    children:[
      {
      path:'/myson',
      name:'myson',
      component:myson
      },
  
      {
        path:'/address',
        name:'address',
        component:address
      },

      {
        path:'/waitPay',
        name:'waitPay',
        component:waitPay
      },

      {
        path:'/waitReves',
        name:'waitReves',
        component:waitReves
      },

      {
        path:'/waitSay',
        name:'waitSay',
        component:waitSay
      },

      {
        path:'/backPay',
        name:'backPay',
        component:backPay
      },

      {
        path:'/myself',
        name:'myself',
        component:myself
      },
  ]
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import( '../views/ShopClassify.vue'),
    children:[
      {
        path:'/boy',
        name:'boy',
        component: () => import( '../components/shop/Boy.vue'),
      },
      {
        path:'/girl',
        name:'girl',
        component: () => import( '../components/shop/Girl.vue'),
      },
      {
        path:'/abulans',
        name:'abulans',
        component: () => import( '../components/shop/Abulans.vue'),
      },
      {
        path:'/decoration',
        name:'decoration',
        component: () => import( '../components/shop/Decoration.vue'),
      },
      {
        path:'/foot',
        name:'foot',
        component: () => import( '../components/shop/Foot.vue'),
      },
      {
        path:'/dian',
        name:'dian',
        component: () => import( '../components/shop/Home.vue'),
      },
    ]
  },
  {
    path: '/collect',
    name: 'collect',
    component: () => import( '../views/CollectView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginView.vue')
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import( '../views/RegistView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from,next) => {
  // if(sessionStorage.userInfo!=""){
  //   // 把vuex中的值存储到sessionStorage中去
  //   let user = JSON.parse(sessionStorage.userInfo)//格式转换
  //   store.state.userInfo.username = user.username 
  //   store.state.userInfo.password = user.password 
  //   store.state.userInfo.isLogin = user.isLogin 
  // }
  // 登录和注册界面进行选择

  if(to.path==="/login"||to.path ==="/regist"){
    next()
    
  }else{
    if(!window.sessionStorage.getItem("userInfo")){
      // return {
      //   path:'/login',
      // }
      next({
        path:"/login"
      })
    }else{
      // 不写代表直接可以过去
      next()
    }
  }
})

export default router
