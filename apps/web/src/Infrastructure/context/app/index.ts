import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAppState } from './types/IAppState';
import { appInitialState } from './initinalState';

export const AppContextSlice = createSlice({
	name: 'app',
	initialState: appInitialState,
	reducers: {
		setAppContext: (state: IAppState, action: PayloadAction<IAppState>) => {
			Object.assign(state, action.payload);
		},
		clearAppContext: (state) => {
			Object.assign(state, appInitialState);
		},
	},
});

export const AppContextReducer = AppContextSlice.reducer;

export const { clearAppContext, setAppContext } = AppContextSlice.actions;