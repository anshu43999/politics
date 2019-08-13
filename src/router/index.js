import Vue from "vue";
import Router from "vue-router"
import Index  from "../pages/index"
import Login from "../pages/login"

Vue.use(Router)

let router = new Router({
    routes : [
        { 
            path : "/",
            name : "首页",
            component : Index,
            meta : {title :  "首页"}
        },
        {
            path : "/login",
            name : "登录",
            component : Login,
            meta : { title : "登录"}
        }
    ]
})


router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});


export default router