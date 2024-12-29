import { Api, Models } from 'src/models';
import { ActionTypes } from 'src/ops/actions';

export type State = {
    items: Api.Item[];
    selectedItem: string;
    selectedItemsTabs: Models.selectedItemTabs;
};

const initialState: State = {
    items: [],
    selectedItem: null,
    selectedItemsTabs: {},
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ITEMS:
            return { ...state, items: payload }
        default:
            return state;
    }
};
