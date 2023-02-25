<script setup>
// import { useRoute } from 'vue-router'
import Tabbar from './components/tabbar.vue'
// const route = useRoute()
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <!-- <tabbar v-if="!route.meta.hiddenTabbar"></tabbar> -->
    <tabbar></tabbar>
  </div>
</template>

<style scoped></style>
