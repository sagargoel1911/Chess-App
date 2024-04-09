import { Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import theme from '../../../utils/theme';
import ImageLinks from '../../../assets/images/ImageLinks';

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
	eye: {
		width: 24,
		height: 18,
		alignSelf: 'center',
	},
});

const Content = () => {
	return (
		<KeyboardAvoidingView behavior='padding' style={styles.container}>
			<View style={styles.details}>
				<Text style={styles.icon}>b</Text>
				<TextInput
					style={styles.input}
					placeholder='Username or Email'
					placeholderTextColor={theme.colors.brand_color_text_light}
					selectionColor={theme.colors.white}
				/>
			</View>
			<View style={styles.details}>
				<Text style={styles.icon}>d</Text>
				<TextInput
					style={styles.input}
					placeholder='Password'
					placeholderTextColor={theme.colors.brand_color_text_light}
					selectionColor={theme.colors.white}
				/>
				<Image source={ImageLinks.eye} style={styles.eye} />
			</View>
			<View>
				<Text style={styles.reset_text}>Forgot / Reset Password?</Text>
			</View>
			<View style={styles.login_button_outer}>
				<Pressable style={styles.login_button}>
					<Text style={styles.login_text}>Log In</Text>
				</Pressable>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Content;
