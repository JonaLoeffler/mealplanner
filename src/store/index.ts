import { createStore } from "vuex";

import plan from "./modules/plan";
import recipes from "./modules/recipes";

export const store = createStore({
  modules: {
    plan,
    recipes,
  },
});
