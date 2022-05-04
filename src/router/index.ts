import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Plan from "@/views/plan/Plan.vue";
import SelectMeals from "@/views/plan/SelectMeals.vue";
import GroceryList from "@/views/plan/GroceryList.vue";
import SelectTimePeriod from "@/views/plan/SelectTimePeriod.vue";

import Home from "@/views/Home.vue";
import Recipe from "@/views/recipes/Recipe.vue";
import Recipes from "@/views/recipes/Recipes.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/plan",
    name: "Plan",
    component: Plan,
    children: [
      {
        path: "date",
        name: "Date",
        component: SelectTimePeriod,
      },
      {
        path: "meals",
        name: "Meals",
        component: SelectMeals,
      },
      {
        path: "groceries",
        name: "Groceries",
        component: GroceryList,
      },
    ],
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

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});
