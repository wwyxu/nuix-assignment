import { put } from 'redux-saga/effects';
import actions from 'src/ops/actions';
import API from 'src/services/api';

export function* watchAppInit(_) {
    try {
        const response = yield API.items.get();

        yield put(actions.items.setItems(response.data));

        yield put(actions.app.setLoaded(true));
    } catch (err) {
        console.log(err);
    }
}
