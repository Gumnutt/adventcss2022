import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/day2",
      name: "Day2",
      component: () => import("../views/Day2.vue"),
    },
    {
      path: "/day3",
      name: "Day3",
      component: () => import("../views/Day3.vue"),
    },
    {
      path: "/day4",
      name: "Day4",
      component: () => import("../views/Day4.vue"),
    },
    {
      path: "/day5",
      name: "Day5",
      component: () => import("../views/Day5.vue"),
    },
    {
      path: "/day6",
      name: "Day6",
      component: () => import("../views/Day6.vue"),
    },
    {
      path: "/day7",
      name: "Day7",
      component: () => import("../views/Day7.vue"),
    },
  ],
})

export default router
