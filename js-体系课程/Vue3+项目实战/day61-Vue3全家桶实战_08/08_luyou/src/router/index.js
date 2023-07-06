import {createRouter,createWebHashHistory} from "vue-router";
import About from "../components/About.vue";
import Home from "../components/Home.vue";


const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {path: "",redirect: '/home'},
        {path: "/home",component: Home},
        {path: "/about",component: About},
    ]
})

export default router;