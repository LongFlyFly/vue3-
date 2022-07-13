<template>
    <div class="myself">
        <h2>个人信息</h2>
        <table border="1px" align="center">
            <tr>
                <td>姓名</td>
                <td>密码</td>
                <!-- <td>操作</td> -->
            </tr>
            <tr>
                <td>{{username}}</td>
                <td>{{userpassword}}</td>
                <!-- <td><a href="javascript:void(0)">修改</a></td> -->
            </tr>
        </table>
    </div>
</template>

<style lang="scss" scoped>
    .myself{
        text-align: center;
    }
    table{
        // table居中
        margin: auto;
    }
</style>

<script>
import { ref ,computed} from 'vue'
import {useStore} from 'vuex'

export default {
    setup(){
        const userstroe = useStore()
       

        const username = computed(()=>{
           return userstroe.state.userInfo.username
        })
        const userpassword = computed(()=>{
           return userstroe.state.userInfo.password
        })
        return{
            username,
            userpassword
        }
    }

}
</script>