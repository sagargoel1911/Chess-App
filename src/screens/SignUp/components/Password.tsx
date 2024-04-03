import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import theme from '../../../utils/theme';

const styles = StyleSheet.create({
	top_text: {
		color: theme.colors.white,
		fontFamily: theme.fonts.montserrat_extra_bold,
		fontSize: 30,
		textAlign: 'center',
	},
	continue_button: {
		backgroundColor: theme.colors.button_green,
		alignItems: 'center',
		paddingVertical: 12,
		borderRadius: 8,
		borderBottomWidth: 4,
		borderColor: theme.colors.button_green_dark,
		alignSelf: 'stretch',
	},
	continue_text: {
		color: theme.colors.white,
		fontSize: 24,
		fontFamily: theme.fonts.montserrat_extra_bold,
	},
	details: {
		flexDirection: 'row',
		backgroundColor: theme.colors.text_box_color,
		borderRadius: 8,
		paddingVertical: 8,
		paddingHorizontal: 16,
		gap: 18,
		alignItems: 'center',
	},
	icon: {
		fontFamily: theme.fonts.chess,
		fontSize: 30,
		color: theme.colors.brand_color_text_light,
	},
	input: {
		flex: 1,
		fontSize: 18,
		fontWeight: '500',
		color: theme.colors.white,
		height: 25,
		marginTop: 7,
	},
	container: {
		flex: 1,
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingBottom: 20,
	},
	top_section: {
		rowGap: 26,
	},
});

const Password = () => {
	return (
		<KeyboardAvoidingView behavior='height' keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0} style={styles.container}>
			<View style={styles.top_section}>
				<Text style={styles.top_text}>Create a password</Text>
				<View style={styles.details}>
					<Text style={styles.icon}>d</Text>
					<TextInput
						style={styles.input}
						placeholder='Password'
						placeholderTextColor={theme.colors.brand_color_text_light}
					/>
				</View>
			</View>
			<Pressable style={styles.continue_button}>
				<Text style={styles.continue_text}>Continue</Text>
			</Pressable>
		</KeyboardAvoidingView>
	);
};

export default Password;
