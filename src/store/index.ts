import { createStore } from "vuex";

import auth from "./modules/auth";
import plan from "./modules/plan";
import list from "./modules/list";
import recipes from "./modules/recipes";

export const store = createStore({
  modules: {
    auth,
    plan,
    list,
    recipes,
  },
});
