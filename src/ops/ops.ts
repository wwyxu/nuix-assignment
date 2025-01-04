import { all, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './actions';
import { watchAppInit} from './app/ops';

export function* rootSaga() {
    yield all([
        takeEvery(ActionTypes.APP_INIT, watchAppInit),
    ]);
}
