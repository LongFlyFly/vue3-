<template>
  <div class="bg">
    <a href="javascript:history.go(-1);"><img src="../assets/返回5.png" /></a>
    <div class="imgs">
      <img :src="datas.pic" alt="" />
    </div>
    <div class="detail">
      <h2>{{ datas.name }}</h2>
      <br />
      <p>详细介绍：<br />{{ datas.detail }}</p>
      <br />
      <div class="price">
        <p>价格：￥{{ datas.price }}</p>
      </div>
      <br />
      <div class="num">
        <span>
          <button
            type="button"
            @click="datas.count <= 0 ? datas.count : datas.count--"
          >
            -
          </button>
          <input type="text" id="" v-model="datas.count" />
          <button type="button" @click="datas.count++">+</button> </span
        ><br />
        <div class="sumPrice">
          <p>总价：￥{{ datas.price * datas.count }}</p>
        </div>
      </div>
    </div>
    <br />
    <!-- 选择按钮 -->
    <div class="buy">
      <button @click="money(datas)">立即购买</button> |
      <button @click="sendBuy(datas)">购物车</button> |
      <button @click="sendCollect2(datas)">收藏夹</button>
    </div>
  </div>
</template> 

<style lang="scss" scoped>
.buy button {
  border-style: none;
  color: white;
  border-radius: 5px;
  padding: 5px;
  background-color: rgb(255, 73, 73);
  box-shadow: 3px 3px 4px rgb(231, 231, 231);
}
.buy {
  margin-left: 470px;
  margin-top: -100px;
  text-align: center;
}
.sumPrice p {
  flex: 1;
  display: flex;
  text-align: right;
  align-items: center;
  justify-content: center;
  color: red;
  font-size: 30px;
  line-height: 50px;
}
.num {
  text-align: center;
}
.num input {
  height: 30px;
  width: 50px;
}
.num button {
  width: 30px;
  height: 30px;
}
.price p {
  flex: 1;
  display: flex;
  text-align: right;
  align-items: center;
  justify-content: center;
  color: rgb(255, 174, 0);
  font-size: 30px;
  line-height: 50px;
}
.price {
  width: 100%;
  height: 50px;
  background-color: rgb(220, 220, 220);
}
h2 {
  text-align: center;
}
.detail {
  margin-top: 10px;
  float: right;
  padding: 10px;
  width: 280px;
  height: 300px;
  background-color: rgb(234, 255, 248);
  border-radius: 5px;
  // 设置投影
  box-shadow: 3px 3px 4px rgb(231, 231, 231);
}
.imgs img {
  height: 400px;
  width: 300px;
  padding: 10px;
  object-fit: cover;
}
.bg {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: absolute;
  width: 60%;
  height: 500px;
  background-color: rgb(238, 238, 238);
  top: 60px;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 5px;
  // 设置投影
  box-shadow: 3px 3px 4px rgb(231, 231, 231);
  border-bottom: rgba(255, 255, 0, 0.5) 10px solid;
}
</style>

<script>
import { markRaw } from "vue";
import { ElMessageBox } from "element-plus";
import { Delete } from "@element-plus/icons-vue";
export default {
  data() {
    return {
      // 创建一个空对象
      datas: "",
    };
  },
  mounted() {
    // 赋值(此时需要以datas来调用)
    this.datas = this.$route.params;
    console.log(this.datas);
  },
  methods: {
    // 加入购物车
    sendBuy(e) {
      this.$store.commit("sendbuy", e);
      console.log("------"+JSON.stringify(e));
    },
    // 加入收藏
    sendCollect2(e) {
      this.$store.commit("send", e);
      console.log(e);
    },

    // 购买
    money(datas) {
      console.log(datas);
      ElMessageBox.confirm("是否确认购买？", {
        type: "warning",
        // icon: markRaw(Delete),
      }).then(() => {
        this.$router.push(
          // 传递对象
          { name: "success", query: datas }
        );
      });
    },
  },
};
</script>