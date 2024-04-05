import { Pressable, StyleSheet, Text, View } from 'react-native';

import ImageLinks from '../../../assets/images/ImageLinks';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
	container: {
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
	},
	signup_text: {
		color: theme.colors.brand_color_text_light,
		fontWeight: '600',
		fontSize: 14,
	},
});

const Header = () => {
	return (
		<View style={styles.container}>
			<Pressable>
				<Text style={styles.signup_text}>Sign Up</Text>
			</Pressable>
			<View style={styles.logo}>
				<ImageLinks.logo_white width={100} height={30} />
			</View>
		</View>
	);
};

export default Header;
