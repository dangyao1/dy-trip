<template>
  <div class="tabbar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetsUrl(item.image)" />
            <img v-else :src="getAssetsUrl(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
    <!-- <template v-for="(item, index) in tabbarData" :key="index">
      <div
        class="tabbar-item"
        :class="{ active: currentIndex === index }"
        @click="itemClick(index, item)"
      >
        <img v-if="currentIndex !== index" :src="getAssetsUrl(item.image)" alt="" />
        <img v-else :src="getAssetsUrl(item.imageActive)" alt="" />
        <span class="text">{{ item.text }}</span>
      </div>
    </template> -->
  </div>
</template>

<script setup>
import tabbarData from '@/data/tabbar'
import { getAssetsUrl } from '@/utils/load-assets'
import { ref, onMounted } from 'vue'

const currentIndex = ref(0)

onMounted(() => {
  const navbarActived = window.location.hash
  // console.log(navbarActived)
  if (navbarActived.includes('#/home')) {
    currentIndex.value = 0
  } else if(navbarActived.includes('#/favor')) {
    currentIndex.value = 1
  } else if(navbarActived.includes('#/order')) {
    currentIndex.value = 2
  } else {
    currentIndex.value = 3
  }
})


</script>

<style lang="less" scoped>
.tabbar {
  img {
    height: 26px;
  }
}
</style>
