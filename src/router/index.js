import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import CarView from "../views/CarView.vue"
import NonFoundView from "../views/NonFoundView.vue"
import ManufactorerView from "../views/ManufactorerView.vue"
import DealerView from "../views/DealerView.vue"
import BookView from "../views/BookView.vue"

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
      component: AboutView
    },
    {
      path: '/book',
      name: 'book',
      component: BookView
    },
    {
      path: "/car/:id",
      name:"car",
      component: CarView,
      children: [
        {
          path: "dealer",
          component: DealerView
        },
        {
          path: "manufactorer",
          component: ManufactorerView
        }
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: NonFoundView
    }
  ]
})

export default router
