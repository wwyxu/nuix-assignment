import { connect } from 'react-redux';
import ops from 'src/ops/actions';
import { AppState } from 'src/state';
import Intents from './appView';

const mapStateToProps = (state: AppState) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Intents);
