# Day08 作业布置

## 一. 如何动态的添加路由对象以及这样做的意义是什么？

- 通过创建出来的路由实例上的 addRoutes方法添加

- ```js
  router.addRoute("<name>",{
    path: "",
    name: "",
    component: ()=>import("./...")
  })
  ```

意义:

- 当我们做关于后台管理系统相关的项目时 ,不同的人就会有不同的权限 那么不同的人对应能访问的页面能做的操作也就不同 
- 这个时候 前端路由就不能写死 ,一般情况下 路由会通过后端返回对应不同的人对应不同的数据 这个时候 就需要前端进行一个动态路由的添加 对应不同的权限 不同的页面显示



## 二. 什么是路由守卫？路由守卫有什么作用？

路由守卫:

- 主要用于通过跳转或取消的方式守卫导航
- 可以在进入路由之前进行某些判断 比如token是否存在 做一些对应的行为
- beforeRouteLeave
- beforEach
- beforeRouteUpdate
- beforeEnter 路由配置中
- beforeRouteEnter
- 全局的beforeResolve守卫
- afterEach
- beforeRouteEnter中的next回调函数





## 三. 什么是状态管理？如何理解“状态管理”？

状态管理:

- 开发中 我们需要保存着各种各样的数据 当数据变得十分庞大时 组件间传递数据就变得不是很友好 于是 就出现了状态管理模式- vuex
- 每一个vuex对应的核心就是store(仓库) store是一个基本的容器 保存着应用中包含的大部分的状态(state)
- vuex中保存的数据是响应式的 当组件从store中读取状态的时候 如果数据发生变化 则相应的组件也会重新渲染
- 改变state唯一的方式 是通过提交(commit)mutation的方式
- mutation中只能有同步处理
- 对应的异步处理需要actions  通过组件中dispatch的操作
- 这样就形成了一个生态圈 



## 四. Vuex的基本使用步骤是什么？

通过createStore创建一个store实例

```js
import {createStore} from "vuex"
import home from "./home.js"
const store = createStore({
  state(){
    return {
      name: "wmm",
      age: 18,
      height: "1.88"
    }
  },
  mutations: {
    increment(state,payload = 1) {
      state.age+= payload
    }
  },
  actions: {
    getInfo() {
      ...
    }
  },
   modules: {
      home
   }
})
  
export default store
// 2 在app中通过插件安装
//  main.js
  import store from "./store"
  createApp(App).use(store).mount("#root")


// 3 在组件中使用
// home.vue
<template>
   {{name}}
</template>
<script setup>
 import { useStore } from "vuex"
  const store = useStore()
  const name = store.state.name
  
</script>
```







## 五. 什么是单一状态树？Vuex如何通过单一状态树管理诸多状态的？(modules)

单一状态树:

- vuex中使用单一状态树

- 通过一个对象就包含了全部的应用层级的状态

- 然后通过模块的形式 区分不同模块中的状态的定义

- ```js
  import {createStore} from "vuex"
  import home from "./home.js"
  import about from "./about.js"
  const store = createStore({
    modules: {
        home,
      	about
     },
    state(){
      return {
       ...
      }
    },
    mutations: {
    ...
    },
    actions: {
     ...
    },
     
  })
    
  ```

## 六. Vuex有哪些核心概念，整理这些核心概念分别的作用是什么？

5个核心概念:

- state函数 返回一个包含定义状态的对象
- mutations 定义改变state的方法(同步) 组件中通过commit调用
- actions定义这异步请求的函数 组件中通过 dispatch方法调用
- getters 定义这一些对state中的数据封装后的值 相当于组件中的computed 
- modules 因为vuex是一个单一状态树 所以对应的根状态的下一个层级就是在modules中定义 方便之后的状态的管理和维护





## 七. Vuex是否可以用来管理组件的普通状态和代码逻辑？(思考)



我认为可以 但是没必要

- vuex中一般用于一些公用的状态管理 组件中属于自己的状态可以进行自己的维护 没有必要全都放在vuex中管理



















































