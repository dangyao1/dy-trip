<template>
  <div class="home">
    <navbar></navbar>
    <div class="banner">
      <img src="@/assets/imgs/home/banner.webp" alt="">
    </div>
   <home-search></home-search>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/navbar.vue';
import HomeSearch from './components/home-search.vue'
</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
}

</style>
