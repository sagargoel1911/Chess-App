import _ from 'lodash';

import { SIGNUP_USER, UPDATE_USER_DATA } from 'src/actions/reduxConstants';

const initial_state = {
	user_list: [],
};

const persistedAllUsersData = (state = _.cloneDeep(initial_state), action: any) => {
	const { type, data } = action;

	switch (type) {
		case SIGNUP_USER: {
			return { ...state, user_list: [...state.user_list, { ...data, game_history: [] }] };
		}
		case UPDATE_USER_DATA: {
			const index = _.findIndex(state.user_list, (user) => user.username === data.username);
			const new_user_list = state.user_list;
			new_user_list[index] = { ...new_user_list[index], game_history: [data.game, ...new_user_list[index].game_history] };
			return { ...state, user_list: new_user_list };
		}
		default:
			return state;
	}
};

export default persistedAllUsersData;
