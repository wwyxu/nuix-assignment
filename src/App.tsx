import { connect } from 'react-redux';
import { ActionTypes } from "src/ops/actions";
import View from 'src/appView';
import store from "src/store";

const mapDispatchToProps = (dispatch) => ({
    initApp: () => dispatch(
        store.dispatch({
            type: ActionTypes.APP_INIT,
            payload: null
        })
    ),
});

export default connect(null, mapDispatchToProps)(View);
