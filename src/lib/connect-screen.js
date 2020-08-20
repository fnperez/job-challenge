import { connect } from 'react-redux';
import ActionsCreator from '@actions/actions-creator';

export function connectScreen(mapStateToProps) {
	return connect(mapStateToProps, ActionsCreator, null, { forwardRef: true });
}