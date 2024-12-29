import app, {
    APP_INIT,
    SET_LOADED,
} from './app/actions';

import items, {
    SET_ITEMS,
    SELECT_ITEM
} from './items/actions';

export const ActionTypes = {
    APP_INIT,
    SET_LOADED,

    SET_ITEMS,
    SELECT_ITEM
};

export default {
    app,
    items
};
