import { ActionTypes } from 'src/ops/actions';

const initialState = {
    isLoaded: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_LOADED:
            return { ...state, isLoaded: true};
        default:
            return state;
    }
};
