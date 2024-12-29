import { connect } from 'react-redux';
import { AppState } from 'src/state';
import ItemTable from './view';

const mapStateToProps = (state: AppState) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemTable);
