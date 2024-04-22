import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Content from './components/Content/Content';
import theme from '../../utils/theme';
import ImageLinks from '../../assets/images/ImageLinks';
import RouteNames from '../../navigation/RouteNames';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header_container: {
		flexDirection: 'row',
		backgroundColor: theme.colors.brand_color_extra_dark,
		alignItems: 'center',
		height: 55,
		paddingHorizontal: 15,
	},
	logo: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
		pointerEvents: 'none',
	},
	signup_text: {
		color: theme.colors.brand_color_text_light,
		fontWeight: '600',
		fontSize: 14,
	},
	footer_container: {
		paddingHorizontal: 15,
		paddingTop: 12,
		paddingBottom: 4,
		backgroundColor: theme.colors.brand_color_extra_dark,
	},
	button: {
		backgroundColor: theme.colors.button_green,
		alignItems: 'center',
		justifyContent: 'center',
		height: 56,
		borderRadius: 8,
		alignSelf: 'stretch',
	},
	text: {
		color: theme.colors.white,
		fontSize: 20,
		fontFamily: theme.fonts.montserrat_extra_bold,
	},
	button_outer: {
		paddingBottom: 4,
		backgroundColor: theme.colors.button_green_dark,
		borderRadius: 8,
	},
});

const Home = () => {
	const navigation = useNavigation<any>();

	return (
		<View style={styles.container}>
			<View style={styles.header_container}>
				<Pressable
					onPress={() => {
						navigation.navigate(RouteNames.SignUp);
					}}>
					<Text style={styles.signup_text}>Sign Up</Text>
				</Pressable>
				<View style={styles.logo}>
					<ImageLinks.logo_white width={100} height={30} />
				</View>
			</View>
			<Content />
			<View style={styles.footer_container}>
				<View style={styles.button_outer}>
					<Pressable
						style={styles.button}
						onPress={() => {
							navigation.navigate(RouteNames.GameInfo);
						}}>
						<Text style={styles.text}>Play</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default Home;
