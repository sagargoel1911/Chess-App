import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Board from './components/Board/Board';
import theme from 'src/utils/theme';
import PlayerInfo from './components/PlayerInfo';

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
		color: theme.colors.brand_color_text_light,
		fontFamily: theme.fonts.montserrat_extra_bold,
		fontSize: 20,
	},
	content: {
		justifyContent: 'center',
		flex: 1,
		rowGap: 40,
	},
});

const Game = () => {
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
			<View style={styles.content}>
				<PlayerInfo />
				<Board />
				<PlayerInfo />
			</View>
		</View>
	);
};

export default Game;
