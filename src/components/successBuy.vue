<template>
<div class="bg">
        <img src="../assets/success.jpg" alt="">
   
    <div class="zhifu">
            <p>总价：￥{{datas.price*datas.count}}</p><br>
            
            <button @click="Pay(datas)">确认支付</button>
    </div>
</div>
</template>

<style lang="scss" scoped>
button{
    color: white;
    border-style: none;
    background-color: #ff3434;
    margin-left: 150px;
    width: 100px;
    height: 100px;
}
p{
    text-align: center;
    color: orange;
    font-size: 60px;
}
.bg{
    display: flex;
    align-items: center;
}
    .zhifu{
        width: 400px;
        height: 350px;
        background-color: rgb(236, 236, 236);
    }
    img{
        width: 300px;
        height: 400px;
    }
</style>

<script>
export default {
    data(){
        return{
            // 创建一个空对象
            datas:''
        }
    },
    mounted(){
        // 赋值(此时需要以datas来调用)
        this.datas = this.$route.query
    },

    methods:{
    // 支付 
    // Pay(datas){
    //    alert("支付成功")
    //    this.$router.push(
    //       // 传递对象给个人中心
    //       { name: "myson", query: datas }
    //     );
    //   },
    // },

    Pay(e){
        alert("购买成功")
        this.$store.commit('sendpay',e);
        this.$router.push(
          // 传递对象给个人中心
          { name: "myson"}
        );
      },

    },
   
}
</script>