import { computed } from "vue";
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouterOptions,
} from "vue-router";
// import { UserState } from "../state/useState";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "IndexHome",
    component: () => import("../page/index.vue"),
    meta: {
      islogin: true,
    },
    children:[
        {
            path:'/application',
            name:"applicationHome",
            component:()=>import('../page/application/application.vue')
        }
    ]
  },

  {
    path: "/login",
    name: "loginHome",
    component: () => import("../page/Login/login.vue"),
    meta: {
      islogin: true,
    },
  },
  {
    path: "/home",
    name: "homeHome",
    component: () => import("../page/home.vue"),
    children: [
     
      
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const route = UserState();
//   const token = route.getToken();
//   if (!token && !to.meta.islogin) {
//     message("error", "登录状态失效，请重新登录", true);
//     return next("/login");
//   } else {
//     next();
//   }
// });

export default router;