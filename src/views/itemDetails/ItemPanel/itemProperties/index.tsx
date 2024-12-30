import { connect } from 'react-redux';
import { AppState } from 'src/state';
import ItemProperties from './view';
import data from 'src/ops-read';

const mapStateToProps = (state: AppState) => ({
    itemsTable: data.items.itemsTable(state),
    selectedItemIndex: data.items.selectedItemIndex(state)
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemProperties);
