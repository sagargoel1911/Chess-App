import { KeyboardAvoidingView, Pressable, StyleSheet, Text, View } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';

import theme from '../../../utils/theme';
import TextField from '../../../common/TextField';

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
});

const Content = () => {
	const methods = useForm<any>();
	const { handleSubmit } = methods;

	const on_submit = (data: any) => {
		console.log(data);
	};

	return (
		<KeyboardAvoidingView behavior='padding' style={styles.container}>
			<FormProvider {...methods}>
				<TextField name='username_email' rules={{ required: true }} leftIconText='b' placeholder='Username or Email' />

				<TextField name='password' rules={{ required: true }} leftIconText='d' placeholder='Password' eyeOption={true} />
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
