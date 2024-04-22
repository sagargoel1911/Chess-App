import _ from 'lodash';

import { CLOSE_TOAST, OPEN_TOAST } from '../actions/reduxConstants';

const initial_toast_details = {
	is_open: false,
	message: '',
	duration: 2000,
};

const initial_state = {
	toast_details: _.cloneDeep(initial_toast_details),
};

const app = (state = _.cloneDeep(initial_state), action: any) => {
	const { type, data } = action;

	switch (type) {
		case OPEN_TOAST: {
			return { ...state, toast_details: { ...state.toast_details, ...action.payload, is_open: true } };
		}
		case CLOSE_TOAST: {
			return { ...state, toast_details: _.cloneDeep(initial_toast_details) };
		}
		default:
			return state;
	}
};

export default app;
