<script setup>
import HelloWorld from '../components/HelloWorld.vue'
</script>
<template>
    <h1>Home View</h1>
    <header>
    <div>
      <!-- <HelloWorld/> -->
      <div class="goto">
        <RouterLink to="/">Home</RouterLink>
      </div>

      <div class="goto">
        <RouterLink to="/about">About</RouterLink>
      </div>

      <div class="goto">
        <RouterLink to="/friend">Friend</RouterLink>
      </div>

      <div class="goto">
        <RouterLink to="/element">Element</RouterLink>
      </div>

      <div class="goto">
        <RouterLink to="/web">MyWeb</RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.goto {
  float: left;
  margin: 0px 10px 0px 0px;
}

header{
  margin: 0;
  display:flex;
}

body{
  margin:0;
  display: flex;
}

</style>