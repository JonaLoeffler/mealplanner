import { MutationTree, GetterTree, ActionTree, ActionContext } from "vuex";
import axios from "axios";
import { AuthenticationResult } from "@azure/msal-browser";
import { tokenRequest } from "../../integrations/microsoft/msal";

interface List {
  displayName: string;
  id: string;
  isOwner: boolean;
  isShared: true;
  wellknownListName: string;
}

interface Response {
  value: List[];
}

interface State {
  lists: List[];
}

type Mutations = MutationTree<State>;

interface Getters extends GetterTree<State, unknown> {
  all: (state: State) => List[];
}

interface Actions extends ActionTree<State, unknown> {
  fetch: (context: ActionContext<State, unknown>) => void;
}

const state: State = {
  lists: [],
};

const mutations: Mutations = {};

const actions: Actions = {
  async fetch({ state, dispatch }): Promise<void> {
    const response: AuthenticationResult = await dispatch(
      "auth/token",
      tokenRequest,
      {
        root: true,
      }
    );
    const result = await axios.get<Response>(
      "https://graph.microsoft.com/v1.0/me/todo/lists",
      { headers: { Authorization: `Bearer ${response.accessToken}` } }
    );

    console.log(result);

    state.lists = result.data.value;
  },
};

const getters: Getters = {
  all: (state: State) => state.lists,
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
