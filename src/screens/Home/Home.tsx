import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shallowEqual } from 'react-redux';
import { Image } from 'expo-image';

import Content from 'src/screens/Home/components/Content/Content';
import theme from 'src/utils/theme';
import ImageLinks from 'src/assets/images/ImageLinks';
import RouteNames from 'src/navigation/RouteNames';
import { useAppDispatch, useAppSelector } from 'src/store';
import { logout_user } from 'src/actions/persistedUserData';

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
		justifyContent: 'space-between',
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
	profile_pic: {
		height: 38,
		width: 38,
		borderRadius: 2,
		marginLeft: 3,
	},
});

const Home = () => {
	const navigation = useNavigation<any>();
	const dispatch = useAppDispatch();
	const { username } = useAppSelector(
		(state) => ({
			username: state.persistedUserData.username,
		}),
		shallowEqual,
	);

	const move_to_signup_or_profile = () => {
		if (username) {
			navigation.navigate(RouteNames.Profile);
		} else {
			navigation.navigate(RouteNames.SignUp);
		}
	};

	const navigate_to_game_info = () => {
		navigation.navigate(RouteNames.Game);
	};
	return (
		<View style={styles.container}>
			<View style={styles.header_container}>
				<Pressable onPress={move_to_signup_or_profile}>
					{!username ? (
						<Text style={styles.signup_text}>Sign Up</Text>
					) : (
						<Image source={ImageLinks.profile_pic} style={styles.profile_pic} />
					)}
				</Pressable>
				<View style={styles.logo}>
					<ImageLinks.logo_white width={100} height={30} />
				</View>
				{username && (
					<Pressable onPress={() => dispatch(logout_user())}>
						<Text style={styles.signup_text}>Log Out</Text>
					</Pressable>
				)}
			</View>
			<Content />
			<View style={styles.footer_container}>
				<View style={styles.button_outer}>
					<Pressable style={styles.button} onPress={navigate_to_game_info}>
						<Text style={styles.text}>Play</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default Home;
