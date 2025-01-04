import { connect } from 'react-redux';
import { AppState } from 'src/state';
import ItemPanel from './view';
import data from 'src/ops-read';

const mapStateToProps = (state: AppState) => ({
    activeTab: data.items.activeTab(state)
});

export default connect(mapStateToProps)(ItemPanel);
