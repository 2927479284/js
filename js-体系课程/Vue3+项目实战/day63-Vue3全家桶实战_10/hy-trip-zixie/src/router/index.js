import {createRouter,createWebHashHistory} from "vue-router"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: ()=>import("@/views/home/home.vue"),
            meta:{
                // 路由自带数据
                hideTabBar: true
            }
        },
        {
            path: "/favor",
            component: ()=>import("@/views/favor/favor.vue")
        },
        {
            path: "/message",
            component: ()=>import("@/views/message/message.vue")
        },
        {
            path: "/order",
            component: ()=>import("@/views/order/order.vue")
        },
        {
            path: "/city",
            component: ()=>import("@/views/city/city.vue"),
            meta:{
                // 路由自带数据
            }
        },
        {
            path: "/search",
            component: ()=>import("@/views/search/search.vue"),
            meta:{
                // 路由自带数据
                hideTabBar: true
            }
        },
        {
            path: "/detail/:id",
            component: ()=>import("@/views/detail/detail.vue"),
            meta:{
                // 路由自带数据

            }
        }
    ]
})

export default router;