import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import theme from '../../../utils/theme';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: theme.colors.brand_color_extra_dark,
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
	title_container: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
		pointerEvents: 'none',
	},
	title_text: {
		color: theme.colors.white,
		fontFamily: theme.fonts.montserrat_black,
		fontSize: 20,
	},
});

const Header = () => {
	const navigation = useNavigation<any>();

	return (
		<View style={styles.container}>
			<Pressable
				onPress={() => {
					navigation.pop();
				}}>
				<Text style={styles.back}>[</Text>
			</Pressable>
			<View style={styles.title_container}>
				<Text style={styles.title_text}>Pass and Play</Text>
			</View>
		</View>
	);
};

export default Header;
