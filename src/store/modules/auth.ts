import { MutationTree, GetterTree, ActionTree, ActionContext } from "vuex";
import {
  client,
  config,
  loginRequest,
  tokenRequest,
  ScopeRequest,
} from "../../integrations/microsoft/msal";
import {
  AccountInfo,
  InteractionRequiredAuthError,
  AuthenticationResult,
} from "@azure/msal-browser";

interface State {
  user?: AccountInfo;
}

type Mutations = MutationTree<State>;

interface Getters extends GetterTree<State, unknown> {
  user: (state: State) => AccountInfo | undefined;
  initials: (state: State) => string;
}

interface Actions extends ActionTree<State, unknown> {
  initialize: (context: ActionContext<State, unknown>) => void;
  login: (context: ActionContext<State, unknown>) => void;
  logout: (context: ActionContext<State, unknown>) => void;
  token: (
    context: ActionContext<State, unknown>,
    request: ScopeRequest
  ) => Promise<void | undefined | AuthenticationResult>;
}

const state: State = {
  user: undefined,
};

const mutations: Mutations = {};

const actions: Actions = {
  async initialize({ state }) {
    state.user = client.getAllAccounts()[0];
  },
  async login({ state }) {
    const response = await client.loginPopup(loginRequest);

    if (response.account) {
      state.user = response.account;
    }
  },
  async logout({ state }) {
    if (state.user) {
      await client.logoutPopup({
        account: client.getAccountByUsername(state.user.username),
        postLogoutRedirectUri: config.auth.redirectUri,
        mainWindowRedirectUri: config.auth.redirectUri,
      });
    }

    state.user = undefined;
  },
  async token({ state }): Promise<AuthenticationResult | void | undefined> {
    tokenRequest.account = state.user;

    return client.acquireTokenSilent(tokenRequest).catch((error) => {
      console.warn(
        "silent token acquisition fails. acquiring token using popup"
      );

      if (error instanceof InteractionRequiredAuthError) {
        // fallback to interaction when silent call fails
        return client
          .acquireTokenPopup(tokenRequest)
          .then((tokenResponse) => {
            return tokenResponse;
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        console.warn(error);
      }
    });
  },
};

const getters: Getters = {
  user: (state: State) => state.user,
  initials: (state: State) => {
    if (!state.user) return "👤";

    if (!state.user.name) return state.user.username.substr(0, 2);

    return state.user.name
      .split(" ")
      .slice(0, 2)
      .map((part) => part.substr(0, 1))
      .join("");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
