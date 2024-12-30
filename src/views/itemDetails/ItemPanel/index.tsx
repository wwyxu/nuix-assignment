import { connect } from 'react-redux';
import { AppState } from 'src/state';
import ItemPanel from './view';
import data from 'src/ops-read';

const mapStateToProps = (state: AppState) => ({
    itemsTable: data.items.itemsTable(state),
    selectedItemsTabs: data.items.selectedItemsTabs(state),
    selectedItemIndex: data.items.selectedItemIndex(state),
    activeTab: data.items.activeTab(state)
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemPanel);
