import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import theme from '../../../utils/theme';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: theme.colors.brand_color_extra_dark,
		alignItems: 'center',
		height: 55,
		paddingHorizontal: 15,
	},
	back: {
		fontFamily: theme.fonts.chess,
		fontSize: 24,
		color: theme.colors.brand_color_text_light,
	},
});

const Header = () => {
	const navigation = useNavigation<any>();

	return (
		<View style={styles.container}>
			<Pressable onPress={() => navigation.goBack()}>
				<Text style={styles.back}>[</Text>
			</Pressable>
		</View>
	);
};

export default Header;
