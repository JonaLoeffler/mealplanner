import { MutationTree, GetterTree } from "vuex";
import recipes from "../../../data/recipes";
import { Cookbook, Recipe } from "../../../lib/types";

interface State {
  recipes: Cookbook;
  selected: Recipe | null;
}

interface Mutations extends MutationTree<State> {
  select(state: State, recipe: Recipe | null): void;
}

interface Getters extends GetterTree<State, unknown> {
  all: (state: State) => Cookbook;
  selected: (state: State) => Recipe | null;
}

const state: State = {
  recipes: recipes,
  selected: null,
};

const mutations: Mutations = {
  select(state, recipe: Recipe | null) {
    state.selected = recipe;
  },
};

const getters: Getters = {
  all: (state) => state.recipes,
  selected: (state) => state.selected,
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
