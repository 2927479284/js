<template>

    <div class="city top-page">

        <div class="top">
            <!-- 搜索框 -->
            <van-search
                    v-model="searchValue"
                    show-action
                    placeholder="城市/区域/位置"
                    shape="round"
                    @cancel="cancelClick"></van-search>
            <!-- Tab的切换 -->
            <van-tabs v-model:active="tabActive" color="#ff9854">

                <template v-for="(value,key,index) in allCities" :key="key">
                    <van-tab :title="value.title" :name="key"></van-tab>
                </template>
            </van-tabs>
        </div>

        <div class="content">
            <template v-for="(value,key,index) in allCities">
                <city-group v-show="tabActive === key" :group-data="value"/>
            </template>
        </div>
    </div>
</template>


<script setup>

    import {computed, ref} from "vue";
    import {useRouter} from "vue-router";
    import useCityStore from "@/stores/moudules/city"
    import {storeToRefs} from "pinia";
    import CityGroup from './cpns/city-group.vue'

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

    const currentGroup = computed(()=>allCities.value[tabActive.value]);
    console.log(currentGroup);

</script>


<style lang="less" scoped>

.city{


    .top {
        position: relative;
        z-index: 9;
    }

    .content {
        height: calc(100vh - 98px);
        overflow-y: auto;
    }
}

</style>