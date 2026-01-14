import { IAppState } from "./types/IAppState.js";

export const appInitialState: IAppState = {
	user: undefined,
	token: undefined,
	authenticated: false,
	loading: false,
};
