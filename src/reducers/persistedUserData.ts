import _ from 'lodash';

import { LOGIN_USER, LOGOUT_USER } from '../actions/reduxConstants';

export const PERSIST_REDUX_PATHS = {
	username: 'username',
	password: 'password',
	game_history: 'game_history',
	email: 'email',
};

const initial_state = {
	[PERSIST_REDUX_PATHS.username]: null,
	[PERSIST_REDUX_PATHS.password]: null,
	[PERSIST_REDUX_PATHS.game_history]: [],
	[PERSIST_REDUX_PATHS.email]: null,
};

const persistedUserData = (state = _.cloneDeep(initial_state), action: any) => {
	const { type, data } = action;

	switch (type) {
		case LOGIN_USER: {
			if (!data[PERSIST_REDUX_PATHS.game_history]) return { ...data, [PERSIST_REDUX_PATHS.game_history]: [] };
			return data;
		}
		case LOGOUT_USER: {
			return _.cloneDeep(initial_state);
		}
		default:
			return state;
	}
};

export default persistedUserData;
