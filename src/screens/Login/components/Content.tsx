import { KeyboardAvoidingView, Pressable, StyleSheet, Text, View } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';
import _ from 'lodash';
import { useNavigation } from '@react-navigation/native';
import { shallowEqual } from 'react-redux';

import theme from 'src/utils/theme';
import TextField from 'src/common/TextField';
import { useAppDispatch, useAppSelector } from 'src/store';
import { login_user } from 'src/actions/persistedUserData';
import { show_toast } from 'src/actions/app';
import { FORM_ELEMENTS } from './constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginHorizontal: 15,
		gap: 28,
	},
	login_button: {
		backgroundColor: theme.colors.button_green,
		alignItems: 'center',
		justifyContent: 'center',
		height: 56,
		borderRadius: 8,
		alignSelf: 'stretch',
	},
	login_text: {
		color: theme.colors.white,
		fontSize: 20,
		fontFamily: theme.fonts.montserrat_extra_bold,
	},
	reset_text: {
		textAlign: 'center',
		color: theme.colors.brand_color_text_light,
		fontSize: 16,
	},
	login_button_outer: {
		paddingBottom: 4,
		backgroundColor: theme.colors.button_green_dark,
		borderRadius: 8,
	},
	warning_container: {
		paddingVertical: 16,
		alignItems: 'center',
		backgroundColor: theme.colors.icon_loss,
		borderRadius: 8,
		position: 'absolute',
		zIndex: 10000,
		top: 0,
		alignSelf: 'center',
		paddingHorizontal: 10,
	},
	warning_text: {
		fontSize: 16,
		fontFamily: theme.fonts.montserrat_black,
		color: theme.colors.white,
	},
});

const Content = () => {
	const methods = useForm<any>({
		defaultValues: {
			[FORM_ELEMENTS.id]: '',
			[FORM_ELEMENTS.password]: '',
		},
	});
	const { handleSubmit } = methods;
	const navigation = useNavigation<any>();
	const { user_list } = useAppSelector(
		(state) => ({
			user_list: state.persistedAllUsersData.user_list,
		}),
		shallowEqual,
	);
	const dispatch = useAppDispatch();

	const on_submit = async (data: any) => {
		let index: number = _.findIndex(user_list, (user) => user.email === data.FORM_ELEMENTS.id);
		if (index === -1) {
			index = _.findIndex(user_list, (user) => user.username === data.FORM_ELEMENTS.id);
		}

		if (index === -1 || user_list[index].password !== data.FORM_ELEMENTS.password) {
			show_toast({
				message: 'Wrong Details!',
			});
			return;
		}

		dispatch(login_user(user_list[index]));
		navigation.popToTop();
	};

	return (
		<KeyboardAvoidingView behavior='padding' style={styles.container}>
			<FormProvider {...methods}>
				<TextField name={FORM_ELEMENTS.id} rules={{ required: true }} leftIconText='b' placeholder='Username or Email' />
				<TextField
					name={FORM_ELEMENTS.password}
					rules={{ required: true }}
					leftIconText='d'
					placeholder='Password'
					eyeOption={true}
				/>
			</FormProvider>
			<View>
				<Text style={styles.reset_text}>Forgot / Reset Password?</Text>
			</View>
			<View style={styles.login_button_outer}>
				<Pressable style={styles.login_button} onPress={handleSubmit(on_submit)}>
					<Text style={styles.login_text}>Log In</Text>
				</Pressable>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Content;
