import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Plan from "@/views/Plan.vue";
import Recipe from "@/views/Recipe.vue";
import Recipes from "@/views/Recipes.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Plan",
    component: Plan,
  },
  {
    path: "/recipe",
    name: "Recipe",
    component: Recipe,
  },
  {
    path: "/recipes",
    name: "Recipes",
    component: Recipes,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
