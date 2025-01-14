import { connect } from 'react-redux';
import { AppState } from 'src/state';
import ItemProperties from './view';
import data from 'src/ops-read';

const mapStateToProps = (state: AppState) => ({
    itemsProperties: data.items.itemsProperties(state),
    selectedItemIndex: data.items.selectedItemIndex(state)
});

export default connect(mapStateToProps)(ItemProperties);
