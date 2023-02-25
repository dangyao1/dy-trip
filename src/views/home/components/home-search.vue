<template>
  <div class="location">
    <div class="city" @click="cityClick">郑州</div>
    <div class="position" @click="positionClick">
      <span class="text">我的位置</span>
      <i class="icon-location"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

// 位置/城市
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log('获取位置成功', res)
    },
    (error) => {
      console.log(error)
    },
    {
      enableHighAccuracy: true,
      timeout: 3000,
      maximumAge: 0
    }
  )
}

const router = useRouter()
const cityClick = () => {
  router.push('/city')
}
</script>

<style lang="less" scoped>
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;
  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }
  .position {
    display: flex;
    align-items: center;
    width: 74px;
    .text {
      font-size: 12px;
      color: #666;
    }
    .icon-location {
      margin-left: 5px;
      display: inline-block;
      width: 18px;
      height: 18px;
      background: center / contain no-repeat url(@/assets/imgs/home/icon_location.png);
    }
  }
}
</style>
