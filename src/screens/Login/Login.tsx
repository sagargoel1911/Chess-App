import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import theme from 'src/utils/theme';
import Content from './components/Content';
import ImageLinks from 'src/assets/images/ImageLinks';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.brand_color_dark,
	},
	header_container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
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
		color: theme.colors.white,
		fontWeight: '600',
		fontSize: 14,
	},
	back: {
		fontFamily: theme.fonts.chess,
		fontSize: 24,
		color: theme.colors.brand_color_text_light,
	},
});

const Login = () => {
	const navigation = useNavigation<any>();

	const go_back = () => {
		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<View style={styles.header_container}>
				<Pressable onPress={go_back}>
					<Text style={styles.back}>[</Text>
				</Pressable>
				<View style={styles.logo}>
					<ImageLinks.logo_white width={100} height={30} />
				</View>
				<Pressable onPress={go_back}>
					<Text style={styles.signup_text}>SIGN UP</Text>
				</Pressable>
			</View>
			<Content />
		</View>
	);
};

export default Login;
