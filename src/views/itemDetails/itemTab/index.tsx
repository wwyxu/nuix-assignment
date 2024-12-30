import { connect } from 'react-redux';
import { AppState } from 'src/state';
import ItemsTab from './view';
import { ActionTypes } from "src/ops/actions";
import data from 'src/ops-read';
import store from "src/store";
import { Models } from 'src/models';

const mapStateToProps = (state: AppState) => ({
    itemsTable: data.items.itemsTable(state),
    selectedItemsTabs: data.items.selectedItemsTabs(state),
    selectedItemIndex: data.items.selectedItemIndex(state),
    itemsProperties: data.items.itemsProperties(state),
});

const mapDispatchToProps = (dispatch) => ({
    selectTab: (selectedTab: Models.ItemTabValue) => {
        dispatch(
            store.dispatch({
                type: ActionTypes.UPDATE_ITEM_TAB,
                payload: selectedTab
            })
        )
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsTab);
