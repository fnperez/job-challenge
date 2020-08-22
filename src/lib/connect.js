import { connect as connectRedux } from 'react-redux';
import ActionsCreator from '@actions/actions-creator';

export function connect(mapStateToProps) {
	return connectRedux(mapStateToProps, ActionsCreator, null, { forwardRef: true });
}