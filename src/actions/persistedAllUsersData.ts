import { SIGNUP_USER, UPDATE_USER_DATA } from './reduxConstants';

export const signup_user = (data: any) => ({
	type: SIGNUP_USER,
	data,
});

export const update_user_data = (data: any) => ({
	type: UPDATE_USER_DATA,
	data,
});
