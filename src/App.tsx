import { connect } from 'react-redux';
import { ActionTypes } from "src/ops/actions";
import { AppState } from 'src/state';
import View from 'src/appView';
import store from "src/store";

const mapStateToProps = (state: AppState) => ({
});

const mapDispatchToProps = (dispatch) => ({
    initApp: () => dispatch(
        store.dispatch({
            type: ActionTypes.APP_INIT,
            payload: null
        })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
