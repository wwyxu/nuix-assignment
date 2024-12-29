import { Api } from "src/models";
import { ActionCreatorWithPayload } from 'src/utils/types';

export const SET_ITEMS: 'SET_ITEMS' = 'SET_ITEMS';
export const SELECT_ITEM: 'SELECT_ITEM' = 'SELECT_ITEM';

export interface SetItems {
	type: typeof SET_ITEMS;
	payload: Api.Item;
}

export const setItems: ActionCreatorWithPayload<SetItems> = payload => ({
    type: SET_ITEMS,
    payload
});

export interface SelectItem {
    type: typeof SELECT_ITEM;
    payload: number
}

export const selectItem: ActionCreatorWithPayload<SelectItem> = payload => ({
    type: SELECT_ITEM,
    payload
})

export default {
    setItems,
    selectItem
};
