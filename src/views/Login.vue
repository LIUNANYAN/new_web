<template>
    <div class="backPage">
        <div class="bkg2">
            <div class="leftContainer">

            </div>
            <div class="rightContainer">
                <div class="headImg">
                    <img src="/src/assets/img/tou.png"/>
                </div>
                <el-form :model="form" label-width="120px" class="loginForm">
                    <el-form-item label="用户名" >
                        <el-input v-model="form.name" placeholder="user"/>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.code" placeholder="code"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onLogin" class="loginButton">登录</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onRegister" class="registerButton">注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>


<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  code: '',
});

const onLogin = () => {
  console.log('submit!')
}

const onRegister = () =>{
    console.log('register!')
}
</script>

<style scoped>
.backPage {
    /* background-color: rgb(255, 208, 0); */
    width: 100%;
    height: 100%;
    background-image: url("/src/assets/img/bag2.jpg");
    background-repeat: no-repeat;
    position: absolute;
    padding: 0px;
}

.bkg2 {
    width: 80%;
    height: 80%;
    margin-left: 10%;
    margin-top: 5%;

    background-color: aqua;
    border: 1px #333;
    border-radius: 10px;

    /* 圆角的大小可以自己调 */
}

.leftContainer {
    width: 50%;
    height: 100%;
    background-color: rgb(31, 37, 35);
    border-left: 1px #333;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    float: left;

    background-image: url(/src/assets/img/bag4.jpg);
}

.rightContainer {
    width: 50%;
    height: 100%;
    background-color: beige;
    border-right: 1px #333;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    float: left;
}

.headImg{ 
    width:80px; 
    height:80px; 
    border-radius:50%; 
    overflow: hidden;
    border: 3px solid #ccc;
    margin-left: 40%;
    margin-top: 20%;
}

.loginForm{
    margin-top: 10%;
    margin-right: 15%;
}

.loginButton
{
    width: 100%;
}

.registerButton
{
    width: 100%;
}
</style>

