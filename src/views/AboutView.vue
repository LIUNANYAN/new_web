<template>
    <div>
        <h1>About View</h1>
    </div>

    <div class="about">
        <h2>This is an about page</h2>
    </div>

    <HelloWorld/>
    <Header/>
</template>

<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import Header from '../components/header.vue'
</script>

<style scoped>
@media (min-width: 1024px) {
    .about {
        /* min-height: 100vh; */
        display: flex;
        /* align-items: center; */
    }
}

h2 {
    color: red
}
</style>