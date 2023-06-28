<template>
    <AppHeader></AppHeader>
    <app-content></app-content>
    <app-content-list></app-content-list>
    <app-footer></app-footer>
</template>

<script>
    import AppHeader  from "@/01_组件的嵌套使用/components/AppHeader.vue";
    import AppContent from "@/01_组件的嵌套使用/components/AppContent.vue";
    import AppContentList from "@/01_组件的嵌套使用/components/AppContentList.vue";
    import AppFooter from "@/01_组件的嵌套使用/components/AppFooter.vue";
export default {
    components:{
        AppHeader,
        AppContent,
        AppContentList,
        AppFooter
    }
}
</script>

<style>

</style>
