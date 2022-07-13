<template>
    <div>
       <div class="title">
            <h2>我的收藏</h2>
            <div class="search2">
                <input type="text"  v-model="search"><button>搜索</button>
            </div>
       </div>
    </div>
    <Collect2/>
</template>

<script>
import Collect2 from './Collect2.vue'

export default{
    components:{
    Collect2
    }
}

</script>
<style lang="scss" scoped>
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
    input{
        height: 30px;
    }
    button{
        height: 32px;
    }
    .search2{
        margin-top: -43px;
        margin-left: 900px;
    }
</style>