import { Pressable, StyleSheet, Text, View } from 'react-native';

import theme from '../../../utils/theme';

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
		fontFamily: theme.fonts.chess,
		fontSize: 24,
		color: theme.colors.brand_color_text_light,
	},
});

const Header = () => {
	return (
		<View style={styles.container}>
			<Pressable>
				<Text style={styles.back}>[</Text>
			</Pressable>
			{true && <Text style={styles.login_text}>LOG IN</Text>}
		</View>
	);
};

export default Header;
