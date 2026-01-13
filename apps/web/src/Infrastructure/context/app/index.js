import { createSlice } from '@reduxjs/toolkit';
import { appInitialState } from './initinalState';
export const AppContextSlice = createSlice({
    name: 'app',
    initialState: appInitialState,
    reducers: {
        setAppContext: (state, action) => {
            Object.assign(state, action.payload);
        },
        clearAppContext: (state) => {
            Object.assign(state, appInitialState);
        },
    },
});
export const AppContextReducer = AppContextSlice.reducer;
export const { clearAppContext, setAppContext } = AppContextSlice.actions;
