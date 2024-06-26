import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import theme from 'src/utils/theme';
import RouteNames from 'src/navigation/RouteNames';

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

interface Props {
	nav: any;
}

const Header = ({ nav }: Props) => {
	const navigation = useNavigation<any>();

	const go_back = () => {
		nav.goBack();
	};

	const navigate_to_login = () => {
		navigation.navigate(RouteNames.Login);
	};

	return (
		<View style={styles.container}>
			<Pressable onPress={go_back}>
				<Text style={styles.back}>[</Text>
			</Pressable>
			<Pressable onPress={navigate_to_login}>{true && <Text style={styles.login_text}>LOG IN</Text>}</Pressable>
		</View>
	);
};

export default Header;
