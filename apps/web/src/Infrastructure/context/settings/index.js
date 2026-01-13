import { createSlice } from '@reduxjs/toolkit';
import { settingInitialState } from './initinalState';
export const SettingsSlice = createSlice({
    name: 'settings',
    initialState: settingInitialState,
    reducers: {
        onUpdateSettings: (state, action) => {
            Object.assign(state, action.payload);
        },
        onResetSettings: () => {
            return settingInitialState;
        },
    },
});
export const SettingsReducer = SettingsSlice.reducer;
export const { onResetSettings, onUpdateSettings, } = SettingsSlice.actions;
