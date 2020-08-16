import Vue from "vue";

import VueRouter from "vue-router";

import Home from "../views/Home.vue";

import Recipe from "../views/Recipe.vue";

import Recipes from "../views/Recipes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/recipe/:id",
    name: "Recipe",
    component: Recipe
  },
  {
    path: "/recipes",
    name: "Recipes",
    component: Recipes
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
