import { configureStore } from '@reduxjs/toolkit';
import { AppContextReducer } from './app';
import { SettingsReducer } from './settings';

export const StoreConfigs = configureStore({
	reducer: {
		app: AppContextReducer,
		settings: SettingsReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
});