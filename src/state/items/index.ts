import { convertItemsArrayToItemsPropertiesArray, convertItemsArrayToItemsTableArray } from 'src/mappers';
import { Models } from 'src/models';
import { ActionTypes } from 'src/ops/actions';
import { updateSelectedItemTabs } from './mappers';

export type State = {
    itemsTable: Models.ItemsTableArray;
    itemsProperties: Models.ItemsPropertiesArray;
    selectedItemIndex: number;
    selectedItemsTabs: Models.SelectedItemTabs;
    activeTab: Models.ItemTabValue | null;
};

const initialState: State = {
    itemsTable: [],
    itemsProperties: [],
    selectedItemIndex: null,
    selectedItemsTabs: {},
    activeTab: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ITEMS:
            const itemsTable = convertItemsArrayToItemsTableArray(payload);
            const itemsProperties = convertItemsArrayToItemsPropertiesArray(payload);

            return { ...state, itemsTable, itemsProperties }
        case ActionTypes.SELECT_ITEM:
            const selectedItemIndex = payload;
            const currentGuid = state.itemsTable[selectedItemIndex].guid;

            const selectedItemsTabs = updateSelectedItemTabs(
                state.selectedItemsTabs,
                currentGuid,
            )

            return { ...state, selectedItemIndex, selectedItemsTabs, activeTab: selectedItemsTabs[currentGuid] }
        case ActionTypes.UPDATE_ITEM_TAB:
            if (!state.itemsTable[state.selectedItemIndex]) {
                return { ...state }
            };

            return { ...state, selectedItemsTabs: { ...state.selectedItemsTabs, [state.itemsTable[state.selectedItemIndex].guid]: payload }, activeTab: payload }
        default:
            return state;
    }
};
