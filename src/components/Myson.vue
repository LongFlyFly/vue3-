<template>
    <!-- <div class="aa">
       <table border="1px">
            <tr>
                <td>商品</td>
                <td>已支付</td>
                <td>状态</td>
            </tr>
             <tr v-for="(t,index) in data3" :key="index">
                <td>{{t.name}}</td>
                <td>￥{{t.price*t.count}}元</td>
                <td>商品揽收中</td>
            </tr>
       </table>
    </div> -->
    <div class="tablebox">
    <table id="tableId" border="0" cellspacing="0" cellpadding="0">
        <thead>
        <tr>
            <th>数量</th>
            <th>商品</th>
            <th>已支付</th>
            <th>状态</th>
        </tr>
        </thead>
        <tbody>
       <tr v-for="(t,index) in data3" :key="index">
                <td>{{t.count}}</td>
                <td>{{t.name}}</td>
                <td>￥{{t.price*t.count}}元</td>
                <td>商品揽收中</td>
            </tr>
        </tbody>
    </table>
</div>

</template>

<script>
export default {
      data(){
        return{
            // 创建一个空对象
            data3:[],
            a:true,
        }
       
    },
    
        computed:{
        // 接收的数组
            // this.show=!this.show
            data3(){
                return this.$store.state.pay
            }
        },

    // mounted(){
    //     this.a=!this.a
    //     // 赋值(此时需要以datas来调用)
    //     this.data3 = this.$route.query
    // },
}
</script>

<style lang="scss" scoped>
    // .aa {
    //     text-align: center;
    // }
    // table{
    //     // table居中
    //     margin: auto;
    // }
    table, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
    border-collapse: collapse;
    border-spacing: 0;
    border: 0;
    color: #fff;
}

.tablebox table {
    border-collapse: separate;
    border-spacing: 1px
}

.tablebox {
    width: 100%;
    height: auto;
    overflow: hidden;
    margin: 10px auto;
}

.tablebox table {
    width: 100%;
}

.tablebox table th, .tablebox table td {
    font-size: 12px;
    text-align: center;
    line-height: 16px;
    background: #3754a2;
    padding: 12px;
}

.tablebox table th {
    height: 30px;
    line-height: 30px;
    background: #6271bd;
    font-size: 14px;
    font-weight: normal;
}

.tablebox table td img {
    display: inline-block;
    vertical-align: middle;
}

.tablebox.table_md table td, .tablebox.table_md table th {
    line-height: 18px;
}

</style>