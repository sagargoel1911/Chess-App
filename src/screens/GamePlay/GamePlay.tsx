import { Pressable, StyleSheet, Text, View } from 'react-native';
import { shallowEqual } from 'react-redux';

import Board from './components/Board/Board';
import theme from 'src/utils/theme';
import PlayerInfo from './components/PlayerInfo';
import { useNavigation } from '@react-navigation/native';
import RouteNames from 'src/navigation/RouteNames';
import useGamePlay from './useGamePlay';
import GamePlayContext from './context';
import ResultsModal from './components/ResultsModal';
import PromotionModal from './components/PromotionModal';
import { useAppSelector } from 'src/store';
import { COLORS } from './constants';

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

interface Props {
	route: any;
}

const GamePlay = ({ route }: Props) => {
	const navigation = useNavigation<any>();

	const value = useGamePlay({ ...route.params });

	const { username } = useAppSelector(
		(state) => ({
			username: state.persistedUserData.username,
		}),
		shallowEqual,
	);

	const { player_color, opponent_name } = route.params;

	const end_game = () => {
		navigation.navigate(RouteNames.GameInfo);
	};
	return (
		<View style={styles.container}>
			<GamePlayContext.Provider value={value}>
				<View style={styles.header_container}>
					<Pressable onPress={end_game}>
						<Text style={styles.back}>[</Text>
					</Pressable>
					<View style={styles.title_container}>
						<Text style={styles.title_text}>Pass and Play</Text>
					</View>
				</View>
				<View style={styles.content}>
					<PlayerInfo name={player_color === COLORS.BLACK ? (username ? username : 'You') : opponent_name} />
					<Board />
					<PlayerInfo name={player_color === COLORS.WHITE ? (username ? username : 'You') : opponent_name} />
				</View>
				<ResultsModal />
				<PromotionModal />
			</GamePlayContext.Provider>
		</View>
	);
};

export default GamePlay;
