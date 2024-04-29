import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFormContext } from 'react-hook-form';
import _ from 'lodash';

import theme from 'src/utils/theme';
import TextField from 'src/common/TextField';
import { useAppDispatch } from 'src/store';
import { signup_user } from 'src/actions/persistedAllUsersData';
import { login_user } from 'src/actions/persistedUserData';
import { FORM_ELEMENTS } from '../constants';

const styles = StyleSheet.create({
	top_text: {
		color: theme.colors.white,
		fontFamily: theme.fonts.montserrat_black,
		fontSize: 24,
		textAlign: 'center',
	},
	continue_button: {
		backgroundColor: theme.colors.button_green,
		alignItems: 'center',
		justifyContent: 'center',
		height: 56,
		borderRadius: 8,
		alignSelf: 'stretch',
	},
	continue_text: {
		color: theme.colors.white,
		fontSize: 20,
		fontFamily: theme.fonts.montserrat_extra_bold,
	},
	container: {
		flex: 1,
		justifyContent: 'space-between',
		paddingHorizontal: 20,
	},
	top_section: {
		rowGap: 25,
	},
	continue_button_outer: {
		paddingBottom: 4,
		backgroundColor: theme.colors.button_green_dark,
		borderRadius: 8,
	},
	message: {
		color: theme.colors.brand_color_text_light,
		textAlign: 'center',
		fontWeight: '500',
		fontSize: 15,
	},
	outer: {
		paddingBottom: 24,
		flex: 1,
	},
});

const Username = () => {
	const { trigger, handleSubmit } = useFormContext();
	const navigation = useNavigation<any>();
	const dispatch = useAppDispatch();

	const on_submit = (data: any) => {
		dispatch(signup_user(data));
		dispatch(login_user(data));
		navigation.popToTop();
		navigation.pop();
	};

	const on_username_submit = async () => {
		const is_valid = await trigger(FORM_ELEMENTS.username);
		if (is_valid) {
			handleSubmit(on_submit)();
		}
	};
	return (
		<View style={styles.outer}>
			<KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === 'ios' ? 130 : 0} style={styles.container}>
				<View style={styles.top_section}>
					<Text style={styles.top_text}>Choose a username</Text>
					<Text style={styles.message}>This is what your friends and other players will see when you play</Text>
					<View>
						<TextField
							name={FORM_ELEMENTS.username}
							rules={{
								required: true,
								maxLength: 25,
								signup: true,
							}}
							leftIconText='b'
							placeholder='Username'
							lengthCheck={true}
							maxLength={25}
							label='Username'
						/>
					</View>
				</View>
				<View style={styles.continue_button_outer}>
					<Pressable style={styles.continue_button} onPress={on_username_submit}>
						<Text style={styles.continue_text}>Create Account</Text>
					</Pressable>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
};

export default Username;
