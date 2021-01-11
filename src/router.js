import { createRouter, createWebHistory } from "@ionic/vue-router"

const routes = [
    {
        path: "/",
        redirect: "/tabs/tab1"
    },
    {
        name: "Login",
        path: "/login",
        component: () => import("./views/Auth/Login.vue")
    },
    {
        name: "About",
        path: "/about",
        component: () => import("./views/Misc/About.vue")
    },
    {
        path: "/tabs/",
        component: () => import("@/views/Tabs.vue"),
        children: [
            {
                path: "",
                redirect: "/tabs/tab1"
            },
            {
                path: "tab1",
                component: () => import("@/views/Tab1.vue")
            },
            {
                path: "tab2",
                component: () => import("@/views/Tab2.vue")
            },
            {
                path: "tab3",
                component: () => import("@/views/Tab3.vue")
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
