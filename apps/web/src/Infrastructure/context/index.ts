import { configureStore } from '@reduxjs/toolkit';
import { AppContextReducer } from './app/index.js';
import { SettingsReducer } from './settings/index.js';

export const StoreConfigs = configureStore({
	reducer: {
		app: AppContextReducer,
		settings: SettingsReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
});
