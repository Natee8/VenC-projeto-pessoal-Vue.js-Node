// import { storages } from '../../utils/localStorage.js';
import { ISettingsState } from "./types/ISettingsState.js"

// const storedSettings =
// 	storages('local').getStorage<ISettingsState>('@settings:');

export const settingInitialState: ISettingsState = {
	canReset: false,
};
