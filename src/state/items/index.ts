import { convertItemsArrayToItemsPropertiesArray, convertItemsArrayToItemsTableArray, updateSelectedItemTabs } from 'src/mappers';
import { Models } from 'src/models';
import { ActionTypes } from 'src/ops/actions';

export type State = {
    itemsTable: Models.ItemsTableArray;
    itemsProperties: Models.ItemsPropertiesArray;
    selectedItemIndex: number;
    selectedItemsTabs: Models.SelectedItemTabs;
};

const initialState: State = {
    itemsTable: [],
    itemsProperties: [],
    selectedItemIndex: null,
    selectedItemsTabs: {},
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ITEMS:
            const itemsTable = convertItemsArrayToItemsTableArray(payload);
            const itemsProperties = convertItemsArrayToItemsPropertiesArray(payload);

            return { ...state, itemsTable, itemsProperties }
        case ActionTypes.SELECT_ITEM:
            const selectedItemIndex = payload;

            const selectedItemsTabs = updateSelectedItemTabs(
                state.selectedItemsTabs,
                state.itemsTable[selectedItemIndex].guid,
            )

            return { ...state, selectedItemIndex, selectedItemsTabs }
        case ActionTypes.UPDATE_ITEM_TAB:
            if (!state.selectedItemIndex || !state.itemsTable[state.selectedItemIndex]) return { ...state };

            return { ...state, selectedItemsTabs: { ...state.selectedItemsTabs, [state.itemsTable[state.selectedItemIndex].guid]: payload } }
        default:
            return state;
    }
};
