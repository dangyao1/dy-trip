<template>
  <div class="tabbar">
    <!-- <div class="tabbar-item">
      <img src="@/assets/imgs/tabbar/tab_home.png" alt="">
      <span class="text">首页</span>
    </div>
    <div class="tabbar-item">
      <img src="@/assets/imgs/tabbar/tab_favor.png" alt="">
      <span class="text">
        收藏
      </span>
    </div>
    <div class="tabbar-item">
      <img src="@/assets/imgs/tabbar/tab_order.png" alt="">
      <span class="text">订单</span>
    </div>
    <div class="tabbar-item">
      <img src="@/assets/imgs/tabbar/tab_message.png" alt="">
      <span class="text">消息</span>
    </div> -->

    <template v-for="(item, index) in tabbarData" :key="index">
      <div
        class="tabbar-item"
        :class="{ active: currentIndex === index }"
        @click="itemClick(index, item)"
      >
        <img v-if="currentIndex !== index" :src="getAssetsUrl(item.image)" alt="" />
        <img v-else :src="getAssetsUrl(item.imageActive)" alt="" />
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import tabbarData from '@/data/tabbar'
import { getAssetsUrl } from '@/utils/load-assets'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

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

const currentIndex = ref(0)
const router = useRouter()
const itemClick = (index, item) => {
  currentIndex.value = index
  router.push(item.path)
}
</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;
  .tabbar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.active {
      color: var(--primary-color);
    }
    .text {
      font-size: 12px;
      margin-top: 2px;
    }
    img {
      width: 36px;
    }
  }
}
</style>
