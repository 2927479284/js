# Day07 作业布置

## 一. 完成上课所有的代码练习







## 二. 完成阶段案例实战练习，并且理解代码抽取、封装思想







## 三. 什么是前端路由？前端路由的发展历程是怎么样的？

前端路由: 由前端来维护映射关系,在不同的URL显示不同的组件

发展历程:

* 后端路由: 当我们页面中需要请求不同的路径内容时, 交给服务器来进行处理, 服务器渲染好整个页面, 并且将页面返回给客户端.
* 前后端分离: 后端只提供API来返回数据，前端通过Ajax获取数据，并且可以通过JavaScript将数据渲染到页面中
* 单页面富应用
  * SPA: single page web application
    * SPA最主要的特点就是在前后端分离的基础上加了一层前端路由.
  * 前端路由
    * 由前端来维护映射关系,在不同的URL显示不同的组件
    * 核心 :  改变URL，但是页面不进行整体的刷新
    * 监听URL的改变





## 四. 前端路由切换的本质是什么？hash和history有什么区别？

前端路由切换的本质:监听URL的改变,URL和内容进行映射

| hash                                                         | history                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 有 # 号                                                      | 没有 # 号                                                    |
| 能够兼容到IE8                                                | 只能兼容到IE10                                               |
| 实际的url之前使用哈希字符，这部分url不会发送到服务器，不需要在服务器层面上进行任何处理 | 每访问一个页面都需要服务器进行路由匹配生成 html 文件再发送响应给浏览器，消耗服务器大量资源 |
| 刷新不会存在 404 问题                                        | 浏览器直接访问嵌套路由时，会报 404 问题。                    |
| 不需要服务器任何配置                                         | 需要在服务器配置一个回调路由                                 |



## 五. 路由的使用步骤是什么？总结整理一下

* 安装:
  * npm install vue-router
* 使用:
  * 通过createRouter创建router对象,并且传入routes和history模式
    * routes:  配置映射关系
    * history: 指定采用的模式  hash模式  和 history模式
      * hash模式  :  `history: createWebHashHistory()`
      *  history模式:    `history: createWebHistory()`
  * app.use(router)    使用app注册路由对象 
  * 使用路径:
    * router-view: 占位
    * router-link  进行路由的切换
      * 编程式导航
      * to 属性, 跳转到哪一个路由





## 六. 如何给路由跳转的组件传递数据

* 动态路由

  * path: `/user/:id`

  * 获取动态路由的值的方式

    * 在template中，直接通过 $route.params获取值

    * 在created中，通过 this.$route.params获取值

    * 在setup中，我们要使用 vue-router库给我们提供的一个hook useRoute

      * 该Hook会返回一个Route对象，对象中保存着当前路由相关的值

    * 补充:onBeforeRouteUpdate

      ```
      在当前路由改变，但是该组件被复用时调用
      举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
      由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      ```

      ```
         //Composition API
         // 获取route跳转id
          onBeforeRouteUpdate((to, from) => {
            console.log("to:", to.params.id);
            console.log("from:", from.params.id);
          });
      ```

      

* query:

  * 通过query的方式来传递参数

    ```
    import { useRouter } from "vue-router";
    const router = useRouter();
    //  去about页面
    function goAboutClick() {
      // 跳转到about页面
      // router.push("/about");
      router.push({
        path: "/about",
        // 传递参数
        query: {
          name: "李四",
          height: 188,
        },
      });
    }
    ```

    

  * 在界面中通过 $route.query 来获取参数

```
<template>
  <div class="about">
    <h2>about--</h2>
    <h2>传递过来的参数:{{ $route.query }}</h2>
    <button @click="goBack">返回</button>
  </div>
</template>
```



## 七. 如何实现路由的嵌套？

* 1.在一层路由中添加 children属性:
  * { path: "recommend", component: () => import("../views/homerecomend.vue") }
* 2.在Home组件中添加 `<router-view>`

* 3.路径跳转 `<router-link>`

```
 routes: [
    {
      path: "/",
      // 重定向,将根路径重定向到/home路径,默认跳到首页.
      redirect: "/home",
    },
    {
      name: "home",
      path: "/home",
      // 懒加载
      component: () => import(/* webpackChunkName:"home-chunk"*/"../Views/Home.vue"),
      children: [
        {
          //如果path:" ",需要写name
          path: "/home",
          // 重定向
          redirect: "/home/rank"
        },
        {
          path: "rank",//相当于/home/rank
          component: () => import("../Views/HomeRanking.vue")
        },
        {
          path: "recommend",// 相当于/home/recommend
          component: () => import("../Views/HomeRecomend.vue")
        }
      ]
    },
 ]
```













































