import { Api } from "src/models";

export const SET_ITEMS: 'SET_ITEMS' = 'SET_ITEMS';
export const SELECT_ITEM: 'SELECT_ITEM' = 'SELECT_ITEM';

export interface SetItems {
	type: typeof SET_ITEMS;
	payload: Api.Item;
}

export const setItems = payload => ({
    type: SET_ITEMS,
    payload
});

export interface SelectItem {
    type: typeof SELECT_ITEM;
    payload: string
}

export const selectItem = payload => ({
    type: SELECT_ITEM,
    payload
})

export default {
    setItems,
    selectItem
};
