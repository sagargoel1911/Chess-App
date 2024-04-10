import { Image, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import theme from '../../../utils/theme';
import ImageLinks from '../../../assets/images/ImageLinks';

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
						selectionColor={theme.colors.white}
					/>
					<Image source={ImageLinks.eye} style={styles.eye} />
				</View>
			</View>
			<View style={styles.continue_button_outer}>
				<Pressable style={styles.continue_button}>
					<Text style={styles.continue_text}>Continue</Text>
				</Pressable>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Password;
