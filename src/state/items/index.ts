import { convertItemsArrayToItemsPropertiesArray, convertItemsArrayToItemsTableArray } from 'src/mappers';
import { Models } from 'src/models';
import { ActionTypes } from 'src/ops/actions';

export type State = {
    itemsTable: Models.ItemsTableArray[];
    itemsProperties: Models.ItemsPropertiesArray[];
    selectedItem: number;
    selectedItemsTabs: Models.SelectedItemTabs;
};

const initialState: State = {
    itemsTable: [],
    itemsProperties: [],
    selectedItem: null,
    selectedItemsTabs: {},
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ITEMS:
            const itemsTable = convertItemsArrayToItemsTableArray(payload);
            const itemsProperties = convertItemsArrayToItemsPropertiesArray(payload);

            return { ...state, itemsTable, itemsProperties }
        case ActionTypes.SELECT_ITEM:

            return { ...state, selectedItem: payload}
        default:
            return state;
    }
};
