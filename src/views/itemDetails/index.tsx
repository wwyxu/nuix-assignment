import { connect } from 'react-redux';
import { AppState } from 'src/state';
import ItemsDetails from './view';
import data from 'src/ops-read';

const mapStateToProps = (state: AppState) => ({
    itemsTable: data.items.itemsTable(state),
    selectedItemIndex: data.items.selectedItemIndex(state)
});

export default connect(mapStateToProps)(ItemsDetails);
