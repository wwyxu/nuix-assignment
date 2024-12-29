import { connect } from 'react-redux';
import { AppState } from 'src/state';
import ItemsTable from './view';
import { ActionTypes } from "src/ops/actions";
import data from 'src/ops-read';
import store from "src/store";

const mapStateToProps = (state: AppState) => ({
    itemsTable: data.items.itemsTable(state),
});

const mapDispatchToProps = (dispatch) => ({
    selectItem: (itemIndex: number) => {
        dispatch(
        store.dispatch({
            type: ActionTypes.SELECT_ITEM,
            payload: itemIndex
        })
    )},
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsTable);
