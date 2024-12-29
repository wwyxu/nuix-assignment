import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { rootSaga } from 'src/ops/ops';
import appReducer from 'src/state/app';
import itemsReducer from 'src/state/items';

const rootReducer = combineReducers({
    app: appReducer,
    items: itemsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const createAppStore = () => {
    const store = createStore(
        rootReducer, (
        composeWithDevTools(
            applyMiddleware(
                thunk,
                sagaMiddleware,
            ),
        )
    )
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default createAppStore();
