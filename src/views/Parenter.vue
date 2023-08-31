<template>
    <div class="bigContainer">
        <!-- 分两栏 -->
        <!-- 菜单栏 -->
        <div class="menuContainer">
            <el-row class="container">
                <el-col :span="24">
                    <div class="headBox">
                        <el-menu :router="true" class="el-menu-demo" :default-active="activeIndex" mode="horizontal"
                            @select="handleSelect">
                            <el-menu-item index="/Home">首页</el-menu-item>
                            <el-sub-menu index="2">
                                <template #title>分类</template>
                                <el-menu-item v-for="(item, index) in classListObj" :key="index">{{ item.name }}
                                </el-menu-item>
                                <el-menu-item index="/about">关于</el-menu-item>
                            </el-sub-menu>
                            <div index="" class="pcsearchbox">
                                <i class="el-icon-search pcsearchicon"></i>
                                <div class="pcsearchinput" :class="input ? 'hasSearched' : ''">
                                    <el-input placeholder="搜索" icon="search" v-model="input" :on-icon-click="searchEnterFun"
                                        @keyup.enter.native="searchEnterFun" @change="searchChangeFun">
                                    </el-input>
                                </div>
                                <div class="userInfo">
                                    <div v-show="!haslogin" class="nologin">
                                        <a href="javascript:void(0);" @click="logoinFun(1)" style="color:black;">登录&nbsp;</a> | <a
                                            href="javascript:void(0);" @click="logoinFun(0)" style="color:black;">&nbsp;注册</a>
                                    </div>
                                </div>
                            </div>
                        </el-menu>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!-- 背景图栏 -->
        <div class="backContainer">
            <div class="backImg">
            <el-carousel height="600px">
                <el-carousel-item v-for="item in bgLocations" :key="item.id">
                    <img :src="item.imgPath" class="myImg" />
                </el-carousel-item>
            </el-carousel>
            </div>
        </div>

        <!-- 内容栏 -->
        <div class="contentContainer">
            <el-row :gutter="30" style="display: flex;">
                <el-col :span="24" class="content" v-for="(item, index) in articleList" :key="index">
                    <span class="s-round-date">
                        <span class="month" v-html="showInitDate(item.create_time, 'month') + '月'"></span>
                        <span class="day" v-html="showInitDate(item.create_time, 'date')"></span>
                    </span>
                    <header>
                        <h1>
                            <a :href="'#'" style="color:black; text-decoration:none">{{ item.title }}</a>
                        </h1>
                    </header>
                    <div class="article-content">
                        <p style="text-indent:2em;">
                            {{ item.description }}
                        </p>
                        <p style="max-height:300px;overflow:hidden;text-align:center;">
                            <img :src="item.image" alt="" class="maxW">
                        </p>
                    </div>
                    <div class="viewdetail">
                        <a class="tcolors-bg" :href="'#/DetailShare?aid=' + item.id" target="_blank">
                            阅读全文>>
                        </a>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="footContainer">

        </div>

    </div>
</template>


<script setup>
//classListObj = ref(["h1","h2"]);
 import { initDate } from '/src/utils/server.js'
import { ref } from 'vue'
const classListObj = ref([
    {
        name: "item1",
    },
    {
        name: "item2",
    }]);
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath);
}
const logoinFun = (tmp) => {
    console.log(tmp);
}

const showInitDate = (oldDate, full) => {
    return initDate(oldDate, full);
}

const haslogin = ref(false);

const bgLocations = ref([
    {
        id: 1,
        imgPath: "src/assets/img/headbg.jpg"
    },
    {
        id: 2,
        imgPath: "src/assets/img/headbg03.jpg"
    },
    {
        id: 3,
        imgPath: "src/assets/img/headbg02.jpg"
    },
    {
        id: 4,
        imgPath: "src/assets/img/headbg05.jpg"
    }
]);

const articleList = ref([
    {
        id: 1,
        description: "王传君不仅如此，他还开始展现自己的独特魅力，他决心彻底摆脱角色束缚。我对王家卫的观点持反对态度。王家卫监制的电影《摆渡人》在2016年上映。这部电影真是人才云集，每个角色都是备受瞩目的娱乐圈名人。",
        create_time: "2023-5-11",
        browse_count: 3,
        comment_count: 100,
        like_count: 999,
        collect_count: 678,
        title: "青春有你"
    },
    {
        id: 2,
        description: "王传君不仅如此，他还开始展现自己的独特魅力，他决心彻底摆脱角色束缚。我对王家卫的观点持反对态度。王家卫监制的电影《摆渡人》在2016年上映。这部电影真是人才云集，每个角色都是备受瞩目的娱乐圈名人。",
        create_time: "2023-5-11",
        browse_count: 3,
        comment_count: 100,
        like_count: 999,
        collect_count: 678,
        title: "未来的愿望"
    }
]);

</script>

<style scoped>
.menuContainer {
    width: 100%;
    height: 50px;
    background: rgba(40, 42, 44, 0.6);
    /*margin-bottom:30px;*/
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 100;
}

.backContainer{
    width:100%;
    height: 630px;
    background-color: rgb(241, 237, 237);
}

.backImg {
    width: 100%;
    height: 600px;
    background-color: rgb(241, 237, 237);
}

.contentContainer {
    width: 100%;
    height: 1000px;
    background-color: rgb(241, 237, 237);
}

.content{
    background-color:white; 
    max-width: 80%; 
    margin:auto;
    margin-bottom: 50px; 
}

.pcsearchbox {
    float: left;
    display: flex;
    margin: 12px 30px 0px 0px;
}

.userInfo {
    float: left;
    display: flex;
    margin: 5px 0px 0px 20px
}

.myImg {
    width: 100%;
    height: 100%;
}

.footContainer {
    width: 100%;
    height: 100px;
    background-color: bisque;
}
</style>