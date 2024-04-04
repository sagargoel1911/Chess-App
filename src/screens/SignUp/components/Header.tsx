import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import theme from '../../../utils/theme';
import ImageLinks from '../../../assets/images/ImageLinks';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: theme.colors.brand_color_dark,
		alignItems: 'center',
		height: 55,
		paddingHorizontal: 15,
	},
	login_text: {
		color: theme.colors.white,
		fontWeight: '600',
		fontSize: 14,
	},
	back: {
		width: 18,
		height: 18,
	},
});

const Header = () => {
	return (
		<View style={styles.container}>
			<Pressable>
				<Image source={ImageLinks.back} style={styles.back} />
			</Pressable>
			{true && <Text style={styles.login_text}>LOG IN</Text>}
		</View>
	);
};

export default Header;
