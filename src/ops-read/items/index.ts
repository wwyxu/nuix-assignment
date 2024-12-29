import { createSelector } from 'reselect';
import state from '../common';

const self = createSelector(state, data => data.items);
const itemsTable = createSelector(self, data => data.itemsTable);
const itemsProperties = createSelector(self, data => data.itemsProperties);
const selectedItem = createSelector(self, data => data.selectedItem);
const selectedItemsTabs = createSelector(self, data => data.selectedItemsTabs);

export default {
    self,
    itemsTable,
    itemsProperties,
    selectedItem,
    selectedItemsTabs
};
