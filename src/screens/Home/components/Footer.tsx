import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import theme from '../../../utils/theme';
import RouteNames from '../../../navigation/RouteNames';

const styles = StyleSheet.create({
	container: {
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

const Footer = () => {
	const navigation = useNavigation<any>();

	return (
		<View style={styles.container}>
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
	);
};

export default Footer;
