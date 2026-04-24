import { defineStore } from "pinia";
import { IAppState } from "./types/IAppState";
import { appInitialState } from "./initinalState";

export const useAppStore = defineStore("app", {
  state: (): IAppState => ({
    ...appInitialState,
  }),

  actions: {
    setAppContext(payload: IAppState) {
      Object.assign(this, payload);
    },

    clearAppContext() {
      Object.assign(this, appInitialState);
    },
  },
});
