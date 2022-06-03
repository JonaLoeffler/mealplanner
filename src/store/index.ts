import { createStore } from "vuex";

import auth from "./modules/auth";
import plan from "./modules/plan";
import list from "./modules/list";
import recipes from "./modules/recipes";
import groceries from "./modules/groceries";

export const store = createStore({
  modules: {
    auth,
    plan,
    list,
    recipes,
    groceries,
  },
});
