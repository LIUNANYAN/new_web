<template>
    <el-carousel height="400px">
        <el-carousel-item v-for="item in bgLocations" :key="item.id">
            <img :src="item.imgPath" class="myImg" style="height: 400px; width: 100%;" />
        </el-carousel-item>
    </el-carousel>
</template>

<script setup>
import { ref } from 'vue'
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
</script >

<style scoped>

</style>