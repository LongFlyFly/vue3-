<template>
  <div>
    <ul class="wrapper">
      <div class="nav">
        全选<input type="checkbox" v-model="allCheck" @change="checkAll" />
      </div>
      <br />
      <li>
        <span>商品选择</span>
        <span>商品图片</span>
        <span>商品信息</span>
        <span>单价</span>
        <span>数量</span>
        <span>总价</span>
        <span>操作</span>
      </li>

      <li v-for="(item, index) in list" :key="index">
        <span
          ><input
            type="checkbox"
            v-model="item.isChecked"
            @change="selectProductItem(list)"
        /></span>
        <span><img :src="item.pic" style="width: 100px; height: 100px" /></span>
        <span>{{ item.name }}</span>
        <span
          ><span>￥</span><span>{{ item.price }}</span></span
        >

        <span>
          <button
            type="button"
            @click="item.count <= 0 ? item.count : item.count--"
          >
            -
          </button>
          <input type="text" id="" v-model="item.count" />
          <button type="button" @click="item.count++">+</button>
        </span>
        <span
          ><span>￥</span
          ><span id="sum">{{ item.price * item.count }}</span></span
        >
        <span>
          <a href="javascript:void(0);" @click="sendCollect(item)">移入收藏</a
          ><br />
          <a href="javascript:void(0);" @click="handRemove(item)">删除</a>
        </span>
      </li>
      <!-- <Buy2 :message="sumPrice" /> -->
      <div class="foot" >
        <div>
          <b>商品共计</b>
          <span>￥</span>
          <span class="sum">{{ sumPrice }}</span>
        </div>
        <button type="button" @click="money">结算</button>
      </div>

    </ul>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import mitts from "@/js/mitt.js";
import { markRaw } from "vue";
import { ElMessageBox } from "element-plus";
import { Delete } from "@element-plus/icons-vue";
import Buy2 from './Buy2.vue'

export default {
  data() {
    return {
      sumPrice: 0,
      // isChecked:false,
      allCheck: false,
      
    };
    
  },
  // components:{
  //       Buy2
  //   },
  watch: {
    list: {
      handler(nvalue, ovalue) {
        this.sumPrice = 0;
        nvalue.forEach((item) => {
          if (item.isChecked) {
            this.sumPrice += item.price * item.count;
          }
        });
      },
      deep: true,
      immediate: true,
    },
  },



  computed: {
    // 接收的数组
    list() {
      return this.$store.state.buy;
    },
  },

  methods: {
    // 发送到收藏
    sendCollect(e) {
      this.$store.commit("send", e);
      console.log(e);
    },

    //删除
    handRemove(item) {
      this.list.splice(this.list.indexOf(item), 1);
    },

    //全选
    checkAll() {
      console.log(this.list);
      // 点击全选，则所有的都选上
      if (this.allCheck) {
        this.list.forEach((item) => {
          item.isChecked = true;
        });
      } else {
        // 反之，都不选上
        this.list.forEach((item) => {
          item.isChecked = false;
        });
      }
    },

    //反选
    selectProductItem(item) {
      // 过滤出选择框
      let num = item.filter((item) => {
        return item.isChecked;
      }).length;
      // 如果选择了所有的，则上面的店铺勾选
      if (num == item.length) {
        console.log(item.length);
        this.allCheck = true;
      } else {
        // 反之，不勾选
        this.allCheck = false;
      }
    },

    money() {
      console.log(this.sumPrice);
		// console.log(item);
      ElMessageBox.confirm("是否确认购买？", {
        type: "warning",
        // icon: markRaw(Delete),
      }).then(()=>{
		this.$router.push(
          // 传递对象
          { name: "success", query: this.sumPrice }
        );
	  })
        
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  list-style: none;
}
.wrapper {
  text-align: center;
  border: 1px solid;
}

li {
  border-bottom: burlywood dotted 1px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav > button,
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

li > span {
  font-size: 12px;
  text-align: center;
  width: 150px;
}

span > img {
  height: 90px;
}

input {
  text-align: center;
  width: 30px;
}

.foot {
  display: flex;
  justify-content: space-around;
}

.foot span {
  color: #ff4500;
  font-weight: 900;
}
a {
  text-decoration: none;
  color: black;
  font-size: 14px;
}
a:hover {
  color: orange;
  text-decoration: underline;
}
</style>