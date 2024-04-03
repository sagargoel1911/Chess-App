import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import theme from '../../../utils/theme';
import ImageLinks from '../../../assets/images/ImageLinks';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 15,
		gap: 20,
	},
	signup_button: {
		backgroundColor: theme.colors.button_green,
		alignItems: 'center',
		paddingVertical: 12,
		borderRadius: 8,
		borderBottomWidth: 4,
		borderColor: theme.colors.button_green_dark,
		alignSelf: 'stretch',
	},
	signup_text: {
		color: theme.colors.white,
		fontSize: 24,
		fontFamily: theme.fonts.montserrat_extra_bold,
	},
	top_text: {
		color: theme.colors.white,
		fontFamily: theme.fonts.montserrat_extra_bold,
		fontSize: 30,
		textAlign: 'center',
	},
	pawn_image: {
		width: '90%',
		height: 200,
	},
});

const Main = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.top_text}>Create your Chess.com account</Text>
			<Image source={ImageLinks.logo_pawn_with_board} style={styles.pawn_image} />
			<Pressable style={styles.signup_button}>
				<Text style={styles.signup_text}>Sign Up with Email</Text>
			</Pressable>
		</View>
	);
};

export default Main;
