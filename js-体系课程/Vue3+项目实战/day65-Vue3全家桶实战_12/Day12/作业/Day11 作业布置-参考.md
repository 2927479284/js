# Day11 作业布置

## 一. 完成上课所有的代码练习







## 二. 如何去修改UI组件库的样式？有哪些方式，各有什么优劣

* 方式一:用插槽,插入自己的元素,然后在自己的作用域中直接修改这个元素

  ```
  .tab-bar {
      // 修改第三方UI组件库的样式
      // 方式一: 用插槽插入自己的元素,-->在自己的作用域中直接修改这个元素
      img {
        height: 30px;
      }
    }
  ```

  

* 方式二: 全局定义一个变量,覆盖它默认变量的值

  * 缺点:全局修改,  任何地方只要用到该变量都会被修改掉

    ```
    :root {
      --primary-color: #ff9854;
      --line-color:#f1f1f1;
    
      /* 全局修改: 任何地方只要用到-van-tabbar-item-icon-size都会被修改掉 */
      /* --van-tabbar-item-icon-size: 30px !important; */
      /* 搜索框搜索icon */
      --van-search-left-icon-color:var(--primary-color) !important
    
    }
    ```

    

* 方式三: 局部定义一个变量,覆盖它默认变量的值

  * 优点:局部修改,只对自己以及自己的子元素会生效

    

* 方式四: 直接找到对应的子组件选择器,进行修改

  * 通过:deep(.class) 找到子组件的类,让子组件的类也可以生效, 穿透到子组件
  * :deep(子组件的元素的选择器)进行修改

```
.tab-bar {
    // 修改第三方UI组件库的样式
    // 方式三:局部定义一个变量,覆盖他默认变量的值
    // --van-tabbar-item-icon-size: 30px !important;

    // 方式四.
    :deep(.van-tabbar-item__icon) {
      font-size: 30px;
    }
  }
```



## 三. 一个页面的数据请求和管理有哪些方式？各有什么特点

* 方式一：保存在页面中

  * 缺点:

    * 1.如果网络请求太多, 那么页面组件中就包含大量的对于网络请求和数据的处理逻辑

    * 2.如果页面封装了很多的子组件, 子组件需要这些数据, 我们必须一步步将数据传递过去(props)

* 方式二：保存在store中

  * city.vue一个页面---对应stores/modules/city.js一个cityStore--- 对应services/modules/city.js 对于city的所有网络请求   , 这种分层架构结构清晰,  分工明确,效率高





## 四. 隐藏底部TabBar有什么方式？

* 方法一:通过v-if和useRoute(拿到当前活跃的路由对象)
  * 第一步: 路由配置,自定义属性hideTabBar

```
{
      path: "/city",
      component: () => import("@/views/city/city.vue"),
      meta: {
        hideTabBer: true
      }
    }
```

* * 第二步: 通过useRoute拿到当前活跃的路由对象route, 通过当前路由对象的hideTabBar来控制TabBar的显示和隐藏

```
<template>
  <div>
    <router-view></router-view>
    <!-- 当city页面,tabbar隐藏-->
    <tab-bar v-if="!route.meta.hideTabBer"></tab-bar>
  </div>
</template>
<script setup>
  import { useRoute } from "vue-router";
  import tabBar from "./components/tab-bar/tab-bar.vue"
  // 当city页面,tabbar隐藏
  const route = useRoute();
</script>
```



* 方法二: 让city达到整个视口高度,把tab-bar给盖起来

```
.top-page {
  position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;

  overflow-y: auto;
}

```



































