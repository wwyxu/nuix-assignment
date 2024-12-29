import { ActionTypes } from 'src/ops/actions';

export interface State {
    isLoaded: boolean;
}

const initialState: State = {
    isLoaded: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_LOADED:
            return { ...state, isLoaded: payload};
        default:
            return state;
    }
};
