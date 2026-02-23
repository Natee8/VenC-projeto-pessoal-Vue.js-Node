import { defineStore } from "pinia";
import { settingInitialState } from "./initinalState";
import type { ISettingsState } from "./types/ISettingsState";

export const useSettingsStore = defineStore("settings", {
  state: (): ISettingsState => ({
    ...settingInitialState,
  }),

  actions: {
    onUpdateSettings(payload: Partial<ISettingsState>) {
      Object.assign(this, payload);
    },

    onResetSettings() {
      Object.assign(this, settingInitialState);
    },
  },
});
