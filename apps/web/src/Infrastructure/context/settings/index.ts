import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { settingInitialState } from './initinalState';
import { ISettingsState } from './types/ISettingsState';

export const SettingsSlice = createSlice({
  name: 'settings',
  initialState: settingInitialState,
  reducers: {
    onUpdateSettings: (
      state,
      action: PayloadAction<Partial<ISettingsState>>
    ) => {
      Object.assign(state, action.payload);
    },

    onResetSettings: () => {
      return settingInitialState;
    },
  },
});

export const SettingsReducer = SettingsSlice.reducer;

export const {
  onResetSettings,
  onUpdateSettings,
} = SettingsSlice.actions;
