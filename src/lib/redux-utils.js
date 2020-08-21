import { handle } from 'redux-pack';

export const initialAsyncRequestState = { sending: false, error: null, success: false };

const reduceAsyncAction = (state, action) => handle(state, action, {
	start: prevState => ({
		...prevState, sending: true, error: null, success: false
	}),
	failure: prevState => ({
		...prevState, sending: false, error: action.payload, success: false
	}),
	success: prevState => ({
		...prevState, sending: false, error: null, success: true, ...action.payload
	})
});

export const makeAsyncActionReducer = (actionType, resetActionType = undefined) =>
	(state = initialAsyncRequestState, action) => {
		if (!resetActionType) {
			resetActionType = `RESET_${actionType}`;
		}

		const { type } = action;

		switch (type) {
			case actionType:
				return reduceAsyncAction(state, action);
			case resetActionType:
				return initialAsyncRequestState;
			default:
				return state;
		}
	};

export const handleSuccess =
	(state, action, handler) => handle(state, action, { success: handler });

export const handleFailure =
	(state, action, handler) => handle(state, action, { failure: handler });

export const createConstants = (constants) => {
	const obj = {};
	constants.forEach((arg) => { obj[arg] = arg; });
	return obj;
};