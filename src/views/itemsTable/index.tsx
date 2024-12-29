import { connect } from 'react-redux';
import { AppState } from 'src/state';
import ItemsTable from './view';
import data from 'src/ops-read';

const mapStateToProps = (state: AppState) => ({
    itemsTable: data.items.itemsTable(state),
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsTable);
