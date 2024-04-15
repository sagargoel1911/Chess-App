import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import theme from '../../../utils/theme';
import { useState } from 'react';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginHorizontal: 15,
		gap: 28,
	},
	details: {
		flexDirection: 'row',
		backgroundColor: theme.colors.text_box_color,
		borderRadius: 8,
		paddingHorizontal: 20,
		gap: 18,
		height: 50,
		alignItems: 'center',
	},
	icon: {
		fontFamily: theme.fonts.chess,
		fontSize: 24,
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.colors.brand_color_text_light,
	},
	input: {
		flex: 1,
		fontSize: 16,
		fontWeight: '500',
		color: theme.colors.white,
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
	const { control, handleSubmit } = methods;
	const [show_password, set_show_password] = useState<boolean>(false);

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<KeyboardAvoidingView behavior='padding' style={styles.container}>
			<Controller
				control={control}
				name='username_email'
				rules={{ required: true }}
				render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
					<View style={{ gap: 4 }}>
						<View
							style={[
								styles.details,
								error && { paddingHorizontal: 18, borderWidth: 2, borderColor: theme.colors.icon_loss },
							]}>
							<Text style={styles.icon}>b</Text>
							<TextInput
								style={styles.input}
								placeholder='Username or Email'
								placeholderTextColor={theme.colors.brand_color_text_light}
								selectionColor={theme.colors.white}
								value={value}
								onChangeText={onChange}
								onBlur={onBlur}
							/>
							{error && <Text style={[styles.icon, { color: theme.colors.icon_loss }]}>†</Text>}
						</View>
						<View
							style={{
								flexDirection: 'row',
								marginLeft: 22,
								marginRight: 14,
								justifyContent: 'space-between',
								gap: 25,
							}}>
							<View style={{ flex: 1 }}>
								{error && <Text style={{ color: theme.colors.icon_loss, fontWeight: 'bold' }}>Cannot be empty.</Text>}
							</View>
						</View>
					</View>
				)}
			/>

			<Controller
				control={control}
				name='password'
				rules={{ required: true }}
				render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
					<View style={{ gap: 4 }}>
						<View
							style={[
								styles.details,
								error && { paddingHorizontal: 18, borderWidth: 2, borderColor: theme.colors.icon_loss },
							]}>
							<Text style={styles.icon}>d</Text>
							<TextInput
								style={styles.input}
								placeholder='Password'
								placeholderTextColor={theme.colors.brand_color_text_light}
								selectionColor={theme.colors.white}
								value={value}
								onChangeText={onChange}
								onBlur={onBlur}
								secureTextEntry={!show_password}
							/>
							<Pressable
								onPress={() => {
									set_show_password((show_password) => !show_password);
								}}>
								<Text style={[styles.icon, error && { color: theme.colors.icon_loss }]}>
									{error ? '†' : show_password ? 'W' : 'ὀ'}
								</Text>
							</Pressable>
						</View>
						<View
							style={{
								flexDirection: 'row',
								marginLeft: 22,
								marginRight: 14,
								justifyContent: 'space-between',
								gap: 25,
							}}>
							<View style={{ flex: 1 }}>
								{error && <Text style={{ color: theme.colors.icon_loss, fontWeight: 'bold' }}>Cannot be empty.</Text>}
							</View>
						</View>
					</View>
				)}
			/>

			<View>
				<Text style={styles.reset_text}>Forgot / Reset Password?</Text>
			</View>
			<View style={styles.login_button_outer}>
				<Pressable style={styles.login_button} onPress={handleSubmit(onSubmit)}>
					<Text style={styles.login_text}>Log In</Text>
				</Pressable>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Content;
