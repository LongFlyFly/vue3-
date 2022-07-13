import { createStore } from 'vuex'


export default createStore({
  state: {
    userInfo:{
      username:'',
      password:'',
      isLogin:false
    },


    // 传值(helloworld->helloworld2)
    search:[],

    // 进购物车
   car:[],
    // 进收藏
   buy:[],
   
  //  进入支付
    pay:[]

  },
  getters: {

  },

  mutations: {
    


    // 注销
    loginOut(state){
      state.userInfo={ username:'',
                        password:'',
                      isLogin:false};
    },

   
    // 添加
    send(state,step){
      // 传值进入
     state.car.push(step)
    },

    // 进入支付
    sendpay(state,step){
     state.pay.push(step)
    },

    sendbuy(state,step){
      // 传值进入
     state.buy.push(step)
    },

    
  },

  actions: {
    
  },
  modules: {
    
  },
 
})
