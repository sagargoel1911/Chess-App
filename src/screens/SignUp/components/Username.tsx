import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import theme from '../../../utils/theme';
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
	message: {
		color: theme.colors.brand_color_text_light,
		textAlign: 'center',
		fontWeight: '500',
		fontSize: 15,
	},
	num_of_char: {
		color: theme.colors.brand_color_text_light,
		fontSize: 12,
		fontWeight: '600',
	},
});

const Username = () => {
	const { control, trigger, formState, watch } = useFormContext();
	const { errors } = formState;
	const username = watch('username');
	return (
		<KeyboardAvoidingView behavior='height' keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0} style={styles.container}>
			<View style={styles.top_section}>
				<Text style={styles.top_text}>Choose a username</Text>
				<Text style={styles.message}>This is what your friends and other players will see when you play</Text>
				<View>
					<Controller
						control={control}
						name='username'
						rules={{ maxLength: 25 }}
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
										placeholder='Username'
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
										{error && (
											<Text style={{ color: theme.colors.icon_loss, fontWeight: 'bold' }}>
												Username should have 25 characters or less.
											</Text>
										)}
									</View>
									<Text style={[styles.num_of_char, username?.length > 25 && { color: theme.colors.icon_loss }]}>
										{username ? username.length : 0}/25
									</Text>
								</View>
							</View>
						)}
					/>
				</View>
			</View>
			<View style={styles.continue_button_outer}>
				<Pressable
					style={styles.continue_button}
					onPress={async () => {
						await trigger('username');
					}}>
					<Text style={styles.continue_text}>Create Account</Text>
				</Pressable>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Username;
