import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import LoginView from '../views/LogInView.vue'
// @ts-ignore
import AdminProductsView from '../views/AdminProductsView.vue'

// @ts-ignore
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutUs.vue')
    },{
        path: '/login',
        name: 'login',
        component: LoginView
    },{
          path: '/platillo/:id',
          name: 'PlatoCompleted',
          component: () => import(/* webpackChunkName: "about" */ '../views/PlateCompleted.vue'),
          props: true
      },{
          path: '/admin',
          name : 'admin',
          component : () => import('../views/AdminView.vue')
      },{
            path: '/admin/products',
            name : 'AdminProductsView',
            component : AdminProductsView
      },{
            path: '/admin/products/new',
            name : 'AdminProductsNew',
            component : () => import('../views/AdminProductsNew.vue')
      },{
        path: "/admin/users/",
        name: "AdminUsersView",
        component: () => import("../views/AdminUserView.vue"),
      },{
        path: "/polities",
          name :"Polities",
            component: () => import("../views/Polities.vue")
      }

  ]
})

export default router
