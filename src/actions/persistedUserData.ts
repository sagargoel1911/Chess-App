import { LOGIN_USER, LOGOUT_USER, UPDATE_RESULT } from './reduxConstants';

export const login_user = (data: any) => ({
	type: LOGIN_USER,
	data,
});

export const logout_user = () => ({
	type: LOGOUT_USER,
});

export const update_result = (data: any) => ({
	type: UPDATE_RESULT,
	data,
});
