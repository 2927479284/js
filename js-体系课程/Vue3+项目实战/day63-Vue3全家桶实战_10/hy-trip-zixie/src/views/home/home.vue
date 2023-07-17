<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box/>
    <home-categories />



  </div>
</template>

<script setup>

import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from "./cpns/home-search-box.vue"
import HomeCategories from "./cpns/home-categories.vue"

import {useRouter} from "vue-router";
import useHomeStore from "@/stores/moudules/home";
const router = useRouter();

// 发送网络请求
const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
homeStore.fetchCategoriesData()


</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>
