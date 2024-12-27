import { all, put } from 'redux-saga/effects';
import actions from 'src/ops/actions';
import API from 'src/services/api';

export function* watchAppInit(_) {
    try {
        yield put(actions.app.setLoaded({}));
    } catch (err) {
        console.log(err);
    }
}
