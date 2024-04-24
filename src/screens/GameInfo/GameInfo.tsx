import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import theme from 'src/utils/theme';
import Content from './components/Content/Content';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.brand_color_dark,
	},
	footer_container: {
		paddingHorizontal: 15,
		paddingVertical: 12,
		backgroundColor: theme.colors.brand_color_dark,
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
	header_container: {
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

const GameInfo = () => {
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
				<View style={styles.title_container}>
					<Text style={styles.title_text}>Pass and Play</Text>
				</View>
			</View>
			<Content />
			<View style={styles.footer_container}>
				<View style={styles.button_outer}>
					<Pressable style={styles.button}>
						<Text style={styles.text}>Play</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default GameInfo;
