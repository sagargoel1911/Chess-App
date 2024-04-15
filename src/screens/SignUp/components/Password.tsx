import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import theme from '../../../utils/theme';
import RouteNames from '../navigation/RouteNames';
import { Controller, useFormContext } from 'react-hook-form';
import { useState } from 'react';

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
	container: {
		flex: 1,
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingBottom: 24,
	},
	top_section: {
		rowGap: 25,
	},
	continue_button_outer: {
		paddingBottom: 4,
		backgroundColor: theme.colors.button_green_dark,
		borderRadius: 8,
	},
	eye: {
		width: 24,
		height: 18,
		alignSelf: 'center',
	},
});

const Password = () => {
	const navigation = useNavigation<any>();
	const { control, trigger, formState } = useFormContext();
	const [show_password, set_show_password] = useState<boolean>(false);
	const { errors } = formState;

	return (
		<KeyboardAvoidingView behavior='height' keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0} style={styles.container}>
			<View style={styles.top_section}>
				<Text style={styles.top_text}>Create a password</Text>
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
									{error && (
										<Text style={{ color: theme.colors.icon_loss, fontWeight: 'bold' }}>Cannot be empty.</Text>
									)}
								</View>
							</View>
						</View>
					)}
				/>
			</View>
			<View style={styles.continue_button_outer}>
				<Pressable
					style={styles.continue_button}
					onPress={async () => {
						await trigger('password');
						if (!errors.password) navigation.navigate(RouteNames.Username);
					}}>
					<Text style={styles.continue_text}>Continue</Text>
				</Pressable>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Password;
