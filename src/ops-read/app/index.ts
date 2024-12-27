import { createSelector } from 'reselect';
import state from '../common';

const self = createSelector(state, data => data.app);
const isLoaded = createSelector(self, data => data.isLoaded);

export default {
    self,
    isLoaded,
};
