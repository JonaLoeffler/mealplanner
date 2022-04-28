import { createStore, MutationTree, GetterTree } from "vuex";
import recipes from "../../data/recipes";
import { Cookbook, Recipe } from "../../lib/types";

export interface State {
  recipes: Cookbook;
  selected: Recipe | null;
}

export interface Mutations extends MutationTree<State> {
  setSelected(state: State, recipe: Recipe | null): void;
}

export interface Getters extends GetterTree<State, unknown> {
  recipes: (state: State) => Cookbook;
  selected: (state: State) => Recipe | null;
}

const state: State = {
  recipes: recipes,
  selected: null,
};

const mutations: Mutations = {
  setSelected(state, recipe: Recipe | null) {
    state.selected = recipe;
  },
};

const getters: Getters = {
  recipes: (state) => state.recipes,
  selected: (state) => state.selected,
};

export const store = createStore<State>({
  state,
  mutations,
  getters,
  actions: {},
  modules: {},
});
