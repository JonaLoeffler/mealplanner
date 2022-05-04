import { MutationTree, GetterTree, ActionTree, ActionContext } from "vuex";
import { Mealplan, Day } from "../../../lib/types";
import { DateTime } from "luxon";

interface State {
  new: Mealplan;
}

interface Mutations extends MutationTree<State> {
  setStart(state: State, start: DateTime): void;
  setEnd(state: State, start: DateTime): void;
  syncDays(state: State, dates: DateTime[]): void;
}

interface Getters extends GetterTree<State, unknown> {
  getStart: (state: State) => DateTime;
  getEnd: (state: State) => DateTime;
  getDays: (state: State) => Day[];
  days: (state: State) => number;
  dates: (state: State, getters: Getters) => DateTime[];
}

interface Actions extends ActionTree<State, unknown> {
  initialize: (context: ActionContext<State, unknown>) => void;
  setStart: (context: ActionContext<State, unknown>, start: DateTime) => void;
  setEnd: (context: ActionContext<State, unknown>, end: DateTime) => void;
}

const state: State = {
  new: new Mealplan(
    DateTime.now().plus({ days: 1 }),
    DateTime.now().plus({ days: 7 }),
    [] as Day[]
  ),
};

const mutations: Mutations = {
  setStart(state: State, start: DateTime): void {
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
  setEnd(state: State, end: DateTime): void {
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
  syncDays(state: State, dates: DateTime[]): void {
    // remove days not in the new dates
    const old = state.new.days.filter((day: Day) =>
      dates.map((d) => d.toISODate()).includes(day.date.toISODate())
    );

    // add new dates to the days list
    const next = dates.filter(
      (date: DateTime) =>
        !state.new.days
          .map((d) => d.date.toISODate())
          .includes(date.toISODate())
    );

    // sort by date
    state.new.days = old
      .concat(next.map((d) => new Day(d)))
      .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
  },
};

const actions: Actions = {
  initialize({ commit, getters }) {
    commit("syncDays", getters.dates);
  },
  setStart({ commit, getters }, start: DateTime) {
    commit("setStart", start);
    commit("syncDays", getters.dates);
  },
  setEnd({ commit, getters }, end: DateTime) {
    commit("setEnd", end);
    commit("syncDays", getters.dates);
  },
};

const getters: Getters = {
  getStart: (state: State): DateTime => state.new.start,
  getEnd: (state: State): DateTime => state.new.end,
  getDays: (state: State): Day[] => state.new.days,
  dates: (state: State, getters: Getters): DateTime[] =>
    [...Array(getters.days).keys()].map((i: number) =>
      state.new.start.plus({ days: i })
    ),
  days: (state: State): number =>
    Math.floor(state.new.end.diff(state.new.start, "days").days) + 1,
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
