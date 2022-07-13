<template>
    <div>
    <div class="foot" >
        <div>
          <b>商品共计</b>
          <span>￥</span>
          <span class="sum">{{ sumPrice }}</span>
        </div>
        <button type="button" @click="money(item)">结算</button>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
      message:{
        type:[]
      }
  },

watch:{
  message(nv,ov){
    console.log("%%%"+nv);
    // 接收新的赋值
    this.sumPrice = nv
  },
  deep:true,
	immediate:true
},
}

</script>

<style lang="scss" scoped>
    .foot button {
  height: 40px;
  width: 100px;
  border-radius: 15px;
  background-color: orangered;
  border: none;
  outline: none;
  align-self: center;
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-top: -10px;
}
.foot {
  display: flex;
  justify-content: space-around;
}

.foot span {
  color: #ff4500;
  font-weight: 900;
}
</style>