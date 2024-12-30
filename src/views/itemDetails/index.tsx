import { connect } from 'react-redux';
import { AppState } from 'src/state';
import ItemsDetails from './view';
import { ActionTypes } from "src/ops/actions";
import data from 'src/ops-read';
import store from "src/store";

const mapStateToProps = (state: AppState) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsDetails);
