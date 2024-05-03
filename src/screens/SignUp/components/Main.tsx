import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';

import theme from 'src/utils/theme';
import ImageLinks from 'src/assets/images/ImageLinks';
import RouteNames from '../navigation/RouteNames';

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
		justifyContent: 'center',
		height: 56,
		borderRadius: 8,
		alignSelf: 'stretch',
	},
	signup_text: {
		color: theme.colors.white,
		fontSize: 20,
		fontFamily: theme.fonts.montserrat_extra_bold,
	},
	top_text: {
		color: theme.colors.white,
		fontFamily: theme.fonts.montserrat_black,
		fontSize: 24,
		textAlign: 'center',
		marginHorizontal: 32,
	},
	pawn_image: {
		width: '90%',
		height: 200,
	},
	signup_button_outer: {
		paddingBottom: 4,
		backgroundColor: theme.colors.button_green_dark,
		borderRadius: 8,
		alignSelf: 'stretch',
	},
});

const Main = () => {
	const navigation = useNavigation<any>();

	const navigate_to_email = () => {
		navigation.navigate(RouteNames.Email);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.top_text}>Create your Chess.com account</Text>
			<Image source={ImageLinks.logo_pawn_with_board} style={styles.pawn_image} />
			<View style={styles.signup_button_outer}>
				<Pressable style={styles.signup_button} onPress={navigate_to_email}>
					<Text style={styles.signup_text}>Sign Up with Email</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default Main;
