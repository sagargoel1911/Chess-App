import { shallowEqual } from 'react-redux';
import _ from 'lodash';

import { useAppSelector } from 'src/store';

export interface ValidationProps {
	required?: boolean;
	email?: boolean;
	maxLength?: number;
	label?: string;
	signup?: boolean;
	login?: boolean;
	name?: string;
}

const apply_validations = ({ required, email, maxLength, label, signup, name }: ValidationProps) => {
	let rules: any = {
		validate: {},
	};
	const { user_list } = useAppSelector(
		(state) => ({
			user_list: state.persistedAllUsersData.user_list,
		}),
		shallowEqual,
	);

	if (required) {
		rules = {
			...rules,
			required: 'Cannot be empty.',
		};
	} else {
		rules = {
			...rules,
			required: false,
		};
	}

	if (email) {
		rules = {
			...rules,
			validate: {
				...rules.validate,
				matchPattern: (v: string) => {
					if (!v) {
						return true;
					}
					return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'This value is not a valid email address.';
				},
			},
		};
	}

	if (maxLength) {
		rules = {
			...rules,
			validate: {
				...rules.validate,
				maxLength: (v: string) => v.length <= maxLength || `${label} should have ${maxLength} characters or less.`,
			},
		};
	}

	if (signup) {
		rules = {
			...rules,
			validate: {
				...rules.validate,
				isTaken: (v: string) => _.findIndex(user_list, (user) => user[name] === v) === -1 || `${label} already taken.`,
			},
		};
	}
	return rules;
};

export default apply_validations;
