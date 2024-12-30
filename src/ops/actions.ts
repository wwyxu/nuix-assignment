import app, {
    APP_INIT,
    SET_LOADED,
} from './app/actions';

import items, {
    SET_ITEMS,
    SELECT_ITEM,
    UPDATE_ITEM_TAB
} from './items/actions';

export const ActionTypes = {
    APP_INIT,
    SET_LOADED,

    SET_ITEMS,
    SELECT_ITEM,
    UPDATE_ITEM_TAB
};

export default {
    app,
    items
};
