<template>
    <el-row class="headRow">
        <el-col class="headCol" :span="24">
            <el-menu class="headMenu" mode="horizontal" :router="true">
                <el-menu-item index="/Home">首页</el-menu-item>
                <el-sub-menu index="">
                    <template #title>分类</template>
                    <el-menu-item v-for="(item, index) in classListObj" :key="index">{{ item.name }}
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item index="/about">关于</el-menu-item>
                <el-menu-item>
                    <el-input v-model="input2" class="search" placeholder="Search something" :prefix-icon="Search" />
                </el-menu-item>
                <el-menu-item v-if="isLogin" class="login" index="/Login">
                    登录
                </el-menu-item>
                <el-menu-item v-if="isLogin" class="register" index="/register">
                    注册
                </el-menu-item>
                <el-menu-item v-else class="publish">
                    <el-button type="primary" @click="onWriteArticle">写文章</el-button>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const classListObj = ref([
    {
        name: "item1",
    },
    {
        name: "item2",
    }]);

import {Search } from '@element-plus/icons-vue'
const input2 = ref('')

const isLogin = ref(false)

const onWriteArticle = ()=>{
    console.log('write article');
    router.push({path:'/write2'})
}

</script>


<style lang="scss" scoped>
.search{
    margin-top: 10px;
}
.login{
    margin-left: 50%;
}
.publish{
    margin-top: 10px;
    margin-left: 50%;

}

.headCol .el-menu,
.headCol .el-sub-menu
 {
	background: transparent;
	border-bottom: none!important;
}

.el-menu--horizontal,
.el-menu-item,
.el-menu-item.is-active,
::v-deep .el-menu--horizontal>.el-sub-menu .el-sub-menu__title {
	border-bottom: none;
}
 
// 一级菜单颜色
.el-menu-item,
::v-deep .el-sub-menu .el-sub-menu__title {
	color: #fffcfc;
}
 
// 有二级菜单的标题及子菜单菜单字体颜色
.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-sub-menu__title {
	color: #3608dd !important;
}
 
// 二级菜单hover状态下字体颜色
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
	color: rgb(0, 4, 255)  !important;
}


</style>

<style lang="scss">
.el-sub-menu__title.el-tooltip__trigger.el-tooltip__trigger:hover {
    color: rgb(0, 4, 255);
}
</style>
