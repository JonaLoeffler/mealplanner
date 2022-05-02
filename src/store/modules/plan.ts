import { MutationTree, GetterTree } from "vuex";
import { Mealplan, Day } from "../../../lib/types";
import { DateTime } from "luxon";

interface State {
  new: Mealplan;
}

interface Mutations extends MutationTree<State> {
  setStart(state: State, start: DateTime): void;
  setEnd(state: State, start: DateTime): void;
}

interface Getters extends GetterTree<State, unknown> {
  getStart: (state: State) => DateTime;
  getEnd: (state: State) => DateTime;
}

const state: State = {
  new: new Mealplan(
    DateTime.now().plus({ days: 1 }),
    DateTime.now().plus({ days: 7 }),
    [] as Day[]
  ),
};

const mutations: Mutations = {
  setStart(state: State, start: DateTime) {
    state.new.start = start.set({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    });

    if (state.new.end <= state.new.start) {
      state.new.end = state.new.start.plus({ days: 1 });
    }
  },
  setEnd(state: State, end: DateTime) {
    state.new.end = end.set({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    });

    if (state.new.end <= state.new.start) {
      state.new.end = state.new.start.plus({ days: 1 });
    }
  },
};

const getters: Getters = {
  getStart: (state: State): DateTime => state.new.start,
  getEnd: (state: State): DateTime => state.new.end,
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
