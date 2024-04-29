import { LOGIN_USER, LOGOUT_USER } from './reduxConstants';

export const login_user = (data: any) => ({
	type: LOGIN_USER,
	data,
});

export const logout_user = () => ({
	type: LOGOUT_USER,
});
