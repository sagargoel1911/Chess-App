import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import theme from '../../../utils/theme';

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
		borderRadius: 6,
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
		marginTop: 4,
	},
	login_button: {
		backgroundColor: theme.colors.button_green,
		alignItems: 'center',
		paddingVertical: 12,
		borderRadius: 8,
		borderBottomWidth: 4,
		borderColor: theme.colors.button_green_dark,
	},
	login_text: {
		color: theme.colors.white,
		fontSize: 24,
		fontFamily: theme.fonts.montserrat_extra_bold,
	},
	reset_text: {
		textAlign: 'center',
		color: theme.colors.brand_color_text_light,
		fontSize: 16,
	},
});

const Content = () => {
	return (
		<View style={styles.container}>
			<View style={styles.details}>
				<Text style={styles.icon}>b</Text>
				<TextInput
					style={styles.input}
					placeholder='Username or Email'
					placeholderTextColor={theme.colors.brand_color_text_light}
				/>
			</View>
			<View style={styles.details}>
				<Text style={styles.icon}>d</Text>
				<TextInput style={styles.input} placeholder='Password' placeholderTextColor={theme.colors.brand_color_text_light} />
				<Text style={styles.icon}>W</Text>
			</View>
			<View>
				<Text style={styles.reset_text}>Forgot / Reset Password?</Text>
			</View>
			<Pressable style={styles.login_button}>
				<Text style={styles.login_text}>Log In</Text>
			</Pressable>
		</View>
	);
};

export default Content;
