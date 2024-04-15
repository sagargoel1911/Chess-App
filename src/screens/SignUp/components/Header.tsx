import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import theme from '../../../utils/theme';
import RouteNames from '../../../navigation/RouteNames';

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

const Header = (props: any) => {
	const navigation = useNavigation<any>();

	return (
		<View style={styles.container}>
			<Pressable
				onPress={() => {
					props.nav.goBack();
				}}>
				<Text style={styles.back}>[</Text>
			</Pressable>
			<Pressable onPress={() => navigation.navigate(RouteNames.Login)}>
				{true && <Text style={styles.login_text}>LOG IN</Text>}
			</Pressable>
		</View>
	);
};

export default Header;
