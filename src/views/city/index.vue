<template>
  <div class="city top-nav">
    <van-search
      shape="round"
      @cancel="cancelClick"
      show-action
      v-model="searchValue"
      placeholder="城市/区域/位置"
    />

    <van-tabs v-model:active="tabActive" color="#ff9854" line-height="2">
      <template v-for="(value, key) in allCity" :key="key">
        <van-tab :title="value.title"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
// import { getCityAll } from '@/services'
import useCityStore from '@/store/modules/city';

const searchValue = ref('')

// 点击取消
const router = useRouter()
const cancelClick = () => {
  router.back()
}

// tab页切换
const tabActive = ref(0)

// 城市数据网络请求
const allCity = ref(null)
const cityStore = useCityStore()
cityStore.fetchAllCityAction()
allCity.value = toRefs(cityStore.allCity)
 
// getCityAll().then((res) => {
//   // console.log(res)
//   allCity.value = res.data
// })
</script>

<style lang="less" scoped></style>
