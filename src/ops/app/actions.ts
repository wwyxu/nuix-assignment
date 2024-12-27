export const APP_INIT: 'APP_INIT' = 'APP_INIT';
export const SET_LOADED: 'SET_LOADED' = 'SET_LOADED';

export const appInit = payload => ({
    type: APP_INIT,
    payload,
});

export const setLoaded = payload => ({
    type: SET_LOADED,
    payload
});

export default {
    appInit,
    setLoaded,
};
