import { MutationTree, GetterTree, ActionTree, ActionContext } from "vuex";
import axios from "axios";
import { AuthenticationResult } from "@azure/msal-browser";
import { List, ListIndexResponse } from "../../integrations/microsoft/types";

const localStorageKey = "selectedList";

interface State {
  lists: List[];
  selected?: List;
}

interface Mutations extends MutationTree<State> {
  select: (state: State, list: List) => void;
}

interface Getters extends GetterTree<State, unknown> {
  all: (state: State) => List[];
  selected: (state: State) => List | undefined;

  truncatedDisplayName: (state: State) => string;
}

interface Actions extends ActionTree<State, unknown> {
  fetch: (context: ActionContext<State, unknown>) => void;
}

const state: State = {
  lists: [],
  selected: JSON.parse(localStorage.getItem(localStorageKey) ?? "null"),
};

const mutations: Mutations = {
  select: (state: State, list: List) => {
    state.selected = list;

    localStorage.setItem("selectedList", JSON.stringify(list));
  },
};

const actions: Actions = {
  async fetch({ state, dispatch }): Promise<void> {
    const response: AuthenticationResult = await dispatch("auth/token", null, {
      root: true,
    });

    const result = await axios.get<ListIndexResponse>(
      "https://graph.microsoft.com/v1.0/me/todo/lists",
      { headers: { Authorization: `Bearer ${response.accessToken}` } }
    );

    state.lists = result.data.value;
  },
};

const getters: Getters = {
  all: (state: State) => state.lists,
  selected: (state: State) => state.selected,

  truncatedDisplayName: (state: State) => {
    if (!state.selected) return "";

    if (state.selected.displayName.length < 23)
      return state.selected.displayName;

    return state.selected.displayName.substring(0, 20) + "...";
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
