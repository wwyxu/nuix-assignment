export const APP_INIT: 'APP_INIT' = 'APP_INIT';
export const SET_LOADED: 'SET_LOADED' = 'SET_LOADED';

export interface AppInit {
	type: typeof APP_INIT;
}

export const appInit = () => ({
    type: APP_INIT,
});

export interface SetLoaded {
	type: typeof SET_LOADED;
	payload: boolean;
}

export const setLoaded = payload => ({
    type: SET_LOADED,
    payload
});

export default {
    appInit,
    setLoaded,
};
