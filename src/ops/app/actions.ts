import { ActionCreator, ActionCreatorWithPayload } from 'src/utils/types';

export const APP_INIT: 'APP_INIT' = 'APP_INIT';
export const SET_LOADED: 'SET_LOADED' = 'SET_LOADED';

export interface AppInit {
	type: typeof APP_INIT;
}

export const appInit: ActionCreator<AppInit> = () => ({
    type: APP_INIT,
});

export interface SetLoaded {
	type: typeof SET_LOADED;
	payload: boolean;
}

export const setLoaded: ActionCreatorWithPayload<SetLoaded> = payload => ({
    type: SET_LOADED,
    payload
});

export default {
    appInit,
    setLoaded,
};
