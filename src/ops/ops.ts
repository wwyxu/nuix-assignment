import { all, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './actions';
import { watchAppInit} from './app/ops';
import { watchSelectItem } from './items/ops';

export function* rootSaga() {
    yield all([
        takeEvery(ActionTypes.APP_INIT, watchAppInit),
        takeEvery(ActionTypes.SELECT_ITEM, watchSelectItem)
    ]);
}
