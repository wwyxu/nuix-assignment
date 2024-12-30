import { connect } from 'react-redux';
import { AppState } from 'src/state';
import ItemImage from './view';
import data from 'src/ops-read';

const mapStateToProps = (state: AppState) => ({
    itemsProperties: data.items.itemsProperties(state),
    itemsTable: data.items.itemsTable(state),
    selectedItemsTabs: data.items.selectedItemsTabs(state),
    selectedItemIndex: data.items.selectedItemIndex(state)
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemImage);
