import { store } from '../store';
import { CLOSE_TOAST, OPEN_TOAST } from './reduxConstants';

export const show_toast = (payload: {
	message: string;

	duration?: number;
}) => {
	store.dispatch({
		type: OPEN_TOAST,
		payload,
	});
};
export const close_toast = () => ({
	type: CLOSE_TOAST,
});
