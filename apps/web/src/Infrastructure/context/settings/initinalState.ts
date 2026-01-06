// import { storages } from '../../utils/localStorage';
import { ISettingsState } from "./types/ISettingsState"

// const storedSettings =
// 	storages('local').getStorage<ISettingsState>('@settings:');

export const settingInitialState: ISettingsState = {
	canReset: false,
};