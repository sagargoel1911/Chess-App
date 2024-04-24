import { SIGNUP_USER } from './reduxConstants';

export const signup_user = (data: any) => ({
	type: SIGNUP_USER,
	data,
});
