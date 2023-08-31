<template>
    <div class="bigContainer">
        <div class="HeadContainer">
            <div class="menuBack">
                <HeaderBanner />
            </div>
            <div class="backImg">
                <HeaderBkImg/>
            </div>
        </div>

        <div class="ContentContainer">
            <div class="leftContent">
                <div class="headImg">
                    <img src="/src/assets/img/tou.png" />
                </div>
                <p style="margin-left: 25%;">name: world</p>
            </div>

            <div class="centerContent">
                <el-row :gutter="30" style="display: flex;">
                    <el-col :span="24" class="content" v-for="(item, index) in articleList" :key="index">
                        <div class="contentImg">
                            <img :src="item.image" class="contentImgReal">
                        </div>
                        <div class="singleContent">
                            <header class="articleHead">
                                <h1>
                                    <a :href="'#'" style="color:black; text-decoration:none">{{ item.title }}</a>
                                </h1>
                            </header>
                            <div class="article-content">
                                <p style="text-indent:2em;">
                                    {{ item.description }}
                                </p>
                            </div>
                            <div class="viewdetail">
                                <el-button type="primary">阅读全文>></el-button>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>

            <div class="rightContent">
                <div class="hotArticle">
                    <p style="margin-left:35%">热门文章</p>
                </div>
            </div>
        </div>

        <div class="itjishu">

        </div>

        <div class="business">

        </div>

        <div class="footContainer">
            <p style="margin-left:50%;">备案号:77788843</p>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue'
import HeaderBanner from '../components/header.vue'
import HeaderBkImg from '../components/headBakImg.vue'
import { initDate } from '/src/utils/server.js'
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
        title: "青春有你",
        image:"/src/assets/img/headbg.jpg"
    },
    {
        id: 2,
        description: "王传君不仅如此，他还开始展现自己的独特魅力，他决心彻底摆脱角色束缚。我对王家卫的观点持反对态度。王家卫监制的电影《摆渡人》在2016年上映。这部电影真是人才云集，每个角色都是备受瞩目的娱乐圈名人。",
        create_time: "2023-5-11",
        browse_count: 3,
        comment_count: 100,
        like_count: 999,
        collect_count: 678,
        title: "未来的愿望",
        image:"/src/assets/img/headbg.jpg"
    }
]);

const showInitDate = (oldDate, full) => {
    return initDate(oldDate, full);
}
</script>


<style scoped>
/* head */
.HeadContainer {
    width: 100%;
    height: 400px;
}

.menuBack {
    width: 100%;
    height: 50px;
    background: rgba(40, 42, 44, 0.6);
    /* background: white; */
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 100;
}

.backImg {
    width: 100%;
    height: 400px;
}

/*  */
/* content */
.ContentContainer {
    height: 800px;
    width: 100%;
    background-color: white;
}

.leftContent,
.rightContent {
    width: 20%;
    height: 100%;
    background-color: rgb(165, 204, 220);
    float: left;
    /* margin-top: 20px; */
}

.headImg {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #ccc;
    margin-left: 25%;
    margin-top: 8%;
}

.headImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.centerContent {
    width: 60%;
    height: 100%;
    background-color: rgb(226, 220, 220);
    float: left;
    /* display:flex; */
}

.content
{
    margin-bottom: 20px;
    margin-left: 3.5%;
    margin-top: 10px;
}
.contentImg {
    width: 23%;
    height: 100%;
    float: left;
}

.contentImgReal
{
    width: 100%;
    height: 100%;
}

.singleContent {
    width: 70%;
    height: 100%;
    background-color: white;
    float: left;
}

.article {
    width: 95%;
    height: 100px;
    background-color: rgb(218, 222, 224);
    margin: auto;
    margin-bottom: 20px;

}

.articleHead
{
    margin-left:35%;
}

.viewdetail{
    margin-left: 40%;
    margin-bottom: 2%;
}

.itjishu
{
    height: 500px;
    width: 100%;
    background-color: blueviolet;
}

.business
{
    height: 500px;
    width: 100%;
    background-color: aqua;
}

/* foot */
.footContainer {
    height: 50px;
    width: 100%;
    background-color: rgb(250, 199, 183);
}
</style>


