import _ from 'lodash';

import { SIGNUP_USER } from 'src/actions/reduxConstants';

const initial_state = {
	user_list: [],
};

const persistedAllUsersData = (state = _.cloneDeep(initial_state), action: any) => {
	const { type, data } = action;

	switch (type) {
		case SIGNUP_USER: {
			return { ...state, user_list: [...state.user_list, { ...data, game_history: [] }] };
		}
		default:
			return state;
	}
};

export default persistedAllUsersData;
