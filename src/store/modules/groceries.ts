import { MutationTree, GetterTree, ActionTree, ActionContext } from "vuex";
import axios from "axios";
import { Ingredient } from "../../../lib/types";
import { List } from "../../integrations/microsoft/types";
import { AuthenticationResult } from "@azure/msal-browser";

interface State {
  groceries: Ingredient[];
}

interface Mutations extends MutationTree<State> {
  set(state: State, item: Ingredient[]): void;
}

interface Getters extends GetterTree<State, unknown> {
  all: (state: State) => Ingredient[];
}

interface Actions extends ActionTree<State, unknown> {
  sendToTodoList: (context: ActionContext<State, unknown>) => void;
}

const state: State = {
  groceries: [],
};

const mutations: Mutations = {
  set(state: State, items: Ingredient[]): void {
    state.groceries = items;
  },
};

const getters: Getters = {
  all: (state: State) => state.groceries,
};

const actions: Actions = {
  async sendToTodoList({
    state,
    dispatch,
    rootGetters,
  }: ActionContext<State, unknown>): Promise<void> {
    console.log("sending to MS Todo");

    const list: List = rootGetters["list/selected"];

    const auth: AuthenticationResult = await dispatch("auth/token", null, {
      root: true,
    });

    const request = {
      requests: state.groceries.map((item: Ingredient, index: number) => ({
        id: index,
        method: "POST",
        url: `/me/todo/lists/${list.id}/tasks`,
        headers: { "Content-Type": "application/json" },
        body: { title: `${item.amount.toFixed(1)} ${item.unit} ${item.name}` },
      })),
    };

    const response = await axios.post(
      "https://graph.microsoft.com/v1.0/$batch",
      request,
      {
        headers: { Authorization: `Bearer ${auth.accessToken}` },
      }
    );

    console.log(response);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
