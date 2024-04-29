import { Controller, useFormContext } from 'react-hook-form';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

import theme from 'src/utils/theme';
import apply_validations from 'src/utils/apply_validations';

const styles = StyleSheet.create({
	container: {
		gap: 4,
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
	details_error: {
		paddingHorizontal: 18,
		borderWidth: 2,
		borderColor: theme.colors.icon_loss,
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
	footer: {
		flexDirection: 'row',
		marginLeft: 22,
		marginRight: 14,
		justifyContent: 'space-between',
		gap: 25,
	},
	error_container: {
		flex: 1,
	},
	error_message: {
		color: theme.colors.icon_loss,
		fontWeight: 'bold',
	},
	num_of_char: {
		color: theme.colors.brand_color_text_light,
		fontSize: 12,
		fontWeight: '600',
	},
	details_focus: {
		paddingHorizontal: 18,
		borderWidth: 2,
		borderColor: theme.colors.white,
	},
});

interface Props {
	name: string;
	rules: any;
	leftIconText: string;
	placeholder: string;

	eyeOption?: boolean;
	lengthCheck?: boolean;
	maxLength?: number;
	label?: string;
}

const TextField = ({ name, rules, leftIconText, placeholder, eyeOption = false, lengthCheck = false, maxLength, label }: Props) => {
	const { control, clearErrors } = useFormContext();
	const [show_text, set_show_text] = useState<boolean>(false);
	const [is_focused, set_is_focused] = useState<boolean>(false);

	const toggle_show_text = (error: any) => {
		if (!error) {
			set_show_text((show_password) => !show_password);
		}
	};

	return (
		<Controller
			control={control}
			name={name}
			rules={apply_validations({ ...rules, label, name })}
			render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
				<View style={styles.container}>
					<View style={[styles.details, error && styles.details_error, !error && is_focused && styles.details_focus]}>
						<Text style={styles.icon}>{leftIconText}</Text>
						<TextInput
							style={styles.input}
							placeholder={placeholder}
							placeholderTextColor={theme.colors.brand_color_text_light}
							selectionColor={theme.colors.white}
							value={value}
							onChangeText={(e) => {
								clearErrors(name);
								onChange(e);
							}}
							onBlur={() => {
								set_is_focused(false);
								onBlur();
							}}
							secureTextEntry={eyeOption && !show_text}
							onFocus={() => set_is_focused(true)}
							autoCapitalize='none'
						/>
						{eyeOption && (
							<Pressable onPress={() => toggle_show_text(error)}>
								<Text style={[styles.icon, error && { color: theme.colors.icon_loss }]}>
									{error ? '†' : show_text ? 'W' : 'ὀ'}
								</Text>
							</Pressable>
						)}
					</View>
					<View style={styles.footer}>
						<View style={styles.error_container}>
							{error && <Text style={styles.error_message}>{error.message}</Text>}
						</View>
						{lengthCheck && (
							<Text style={[styles.num_of_char, value?.length > maxLength && { color: theme.colors.icon_loss }]}>
								{value ? value.length : 0}/{maxLength}
							</Text>
						)}
					</View>
				</View>
			)}
		/>
	);
};

export default TextField;
