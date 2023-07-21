<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box/>
    <home-categories />
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar :start-date="'09.19'" :end-date="'09.20'"/>
    </div>
    <home-content/>

<!--    <button @click="moreBtnClick">加载更多</button>-->
  </div>
</template>

<script setup>

import HomeNavBar from './cpns/home-nav-bar.vue';
import HomeSearchBox from "./cpns/home-search-box.vue";
import HomeCategories from "./cpns/home-categories.vue";
import HomeContent from "./cpns/home-content.vue";
import SearchBar from '@/components/search-bar/search-bar.vue';
import {useRouter} from "vue-router";
import useHomeStore from "@/stores/moudules/home";
import {storeToRefs} from "pinia";
import {onMounted, onUnmounted,watch,ref} from "vue";
import useScroll from "@/hooks/useScroll";
import { computed } from '@vue/reactivity';

const router = useRouter();

// 发送网络请求
const homeStore = useHomeStore();
// 地区
homeStore.fetchHotSuggestData();
// 分类
homeStore.fetchCategoriesData();
// 热门精选
homeStore.fetchHouselistData()

// 默认加载更多
/*const moreBtnClick = () => {
  console.log("加载更多的数据");
  homeStore.fetchHouselistData();
}*/
// 监听window窗口的滚动
// 1.当我们离开页面的时候，移除这个监听事件
// 2.当页面加载的时候，添加一个滚动到底部的事件

/*const scrollListenerHandler = ()=>{
  const clientHeight = document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - 50;
  if (clientHeight + scrollTop >= scrollHeight){
    // 代表滚动到底部 需要加载新一页的数据
    // alert("滚动到底部了");
    homeStore.fetchHouselistData();
  }
}

// 页面加载时候绑定scrollListenerHandler函数
onMounted(()=>{
  window.addEventListener("scroll",scrollListenerHandler);
});

// 页面离开的时候移除scrollListenerHandler函数
onUnmounted(()=>{
  window.removeEventListener("scroll",scrollListenerHandler);
})*/
const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouselistData().then(() => {
      isReachBottom.value = false
    })
  }
})

// 搜索框显示的控制
// const isShowSearchBar = ref(false)
// watch(scrollTop, (newTop) => {
//   isShowSearchBar.value = newTop > 100
// })
// 定义的可响应式数据, 依赖另外一个可响应式的数据, 那么可以使用计算函数(computed)
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})


</script>





<style lang="less" scoped>

  .home {
    padding-bottom: 60px;
  }

  .banner {
    img {
      width: 100%;
    }
  }

  .search-bar {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    padding: 16px 16px 10px;
    background-color: #fff;
  }
</style>
