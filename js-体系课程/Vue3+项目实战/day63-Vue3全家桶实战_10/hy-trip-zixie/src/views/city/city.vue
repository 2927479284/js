<template>

    <div class="city top-page">
        <!-- 搜索框 -->
        <van-search
                v-model="searchValue"
                show-action
                placeholder="城市/区域/位置"
                shape="round"
                @search="onSearch"
                @cancel="cancelClick"></van-search>
        <!-- Tab的切换 -->
        <van-tabs v-model:active="tabActive" color="#ff9854">

            <template v-for="(value,key,index) in allCities" :key="key">
                <van-tab :title="value.title + index"></van-tab>
            </template>
        </van-tabs>
    </div>
</template>


<script setup>

    import {ref} from "vue";
    import {useRouter} from "vue-router";
    import useCityStore from "@/stores/moudules/city"
    import {storeToRefs} from "pinia";
    let searchValue = ref("")

    const router = useRouter();
    // tab导航栏
    const tabActive = ref();
    const cancelClick = () => {
        router.back();
    }

    const cityStore = useCityStore();
    cityStore.fetchAllCitiesData();
    const {allCities}  = storeToRefs(cityStore);

</script>


<style scoped>

.city{
    position: relative;
    z-index: 9;
    height: 100vh;
    background-color: #fff;
    overflow-y: auto;
}

</style>