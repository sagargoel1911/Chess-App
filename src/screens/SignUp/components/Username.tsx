import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import theme from '../../../utils/theme';

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
	},
	icon: {
		fontFamily: theme.fonts.chess,
		fontSize: 30,
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.colors.brand_color_text_light,
		marginTop: 4,
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
		alignSelf: 'flex-end',
		color: theme.colors.brand_color_text_light,
		marginRight: 14,
		marginTop: 4,
		fontSize: 12,
		fontWeight: '600',
	},
});

const Username = () => {
	return (
		<KeyboardAvoidingView behavior='height' keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0} style={styles.container}>
			<View style={styles.top_section}>
				<Text style={styles.top_text}>Choose a username</Text>
				<Text style={styles.message}>This is what your friends and other players will see when you play</Text>
				<View>
					<View style={styles.details}>
						<Text style={styles.icon}>b</Text>
						<TextInput
							style={styles.input}
							placeholder='Username'
							placeholderTextColor={theme.colors.brand_color_text_light}
						/>
					</View>
					<Text style={styles.num_of_char}>0/25</Text>
				</View>
			</View>
			<View style={styles.continue_button_outer}>
				<Pressable style={styles.continue_button}>
					<Text style={styles.continue_text}>Create Account</Text>
				</Pressable>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Username;
