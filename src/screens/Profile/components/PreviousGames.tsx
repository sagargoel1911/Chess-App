import { FlatList, StyleSheet, Text, View } from 'react-native';

import theme from 'src/utils/theme';

const styles = StyleSheet.create({
	header: {
		height: 50,
		backgroundColor: theme.colors.brand_color_extra_dark,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: 15,
		paddingRight: 4,
	},
	heading: {
		color: theme.colors.white,
		fontSize: 17,
		fontWeight: '700',
	},
	header_right: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	number_of_games: {
		color: theme.colors.brand_color_text_extra_light,
		fontWeight: '700',
	},
	more_games_icon: {
		color: theme.colors.brand_color_text_extra_light,
		fontFamily: theme.fonts.chess,
		fontSize: 16,
	},
	item: {
		height: 63,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		backgroundColor: theme.colors.brand_color_dark,
	},
	opponent_name: {
		color: theme.colors.brand_color_text_light,
		fontWeight: '600',
	},
	result: {
		fontFamily: theme.fonts.chess,
		fontSize: 24,
	},
	separator: {
		height: 0.4,
		backgroundColor: theme.colors.black,
	},
});

interface Props {
	game_history: any[];
}

const PreviousGames = ({ game_history }: Props) => {
	return (
		<View>
			<View style={styles.header}>
				<Text style={styles.heading}>Recent Games</Text>
				<View style={styles.header_right}>
					<Text style={styles.number_of_games}>
						{game_history.length}
						{'  '}
					</Text>
					<Text style={styles.more_games_icon}>…</Text>
				</View>
			</View>
			<FlatList
				data={game_history}
				renderItem={({ item, index }) => {
					return (
						<View key={index} style={styles.item}>
							<Text style={styles.opponent_name}>{item.opponent}</Text>
							<Text
								style={[
									styles.result,
									{
										color:
											item.result === 'D'
												? theme.colors.icon_draw
												: item.result === 'W'
													? theme.colors.icon_win
													: theme.colors.icon_loss,
									},
								]}>
								{item.result === 'D' ? 'ἃ' : item.result === 'W' ? 'ἁ' : 'ἂ'}
							</Text>
						</View>
					);
				}}
				ItemSeparatorComponent={() => <View style={styles.separator}></View>}
			/>
		</View>
	);
};

export default PreviousGames;
