import { FlatList, Text, View } from 'react-native';
import theme from '../../../utils/theme';

const PreviousGames = () => {
	return (
		<View>
			<View
				style={{
					height: 50,
					backgroundColor: theme.colors.brand_color_extra_dark,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					paddingLeft: 15,
					paddingRight: 4,
				}}>
				<Text style={{ color: theme.colors.white, fontSize: 17, fontWeight: '700' }}>Recent Games</Text>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Text style={{ color: theme.colors.brand_color_text_extra_light, fontWeight: '700' }}>15{'  '} </Text>
					<Text style={{ color: theme.colors.brand_color_text_extra_light, fontFamily: theme.fonts.chess, fontSize: 16 }}>
						…
					</Text>
				</View>
			</View>
			<FlatList
				data={[
					{
						opponent: 'MAHMUTARSLANTE',
						result: 'L',
					},
					{
						opponent: 'CB0930',
						result: 'D',
					},
					{
						opponent: 'Rohanwizard',
						result: 'W',
					},
					{
						opponent: 'eanouna',
						result: 'W',
					},
					{
						opponent: 'Tevogo',
						result: 'W',
					},
				]}
				renderItem={({ item, index }) => {
					return (
						<View
							style={{
								height: 63,
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
								paddingHorizontal: 15,
								backgroundColor: theme.colors.brand_color_dark,
							}}>
							<Text style={{ color: theme.colors.brand_color_text_light, fontWeight: '600' }}>{item.opponent}</Text>
							<Text
								style={{
									fontFamily: theme.fonts.chess,
									fontSize: 24,
									color:
										item.result === 'D'
											? theme.colors.icon_draw
											: item.result === 'W'
												? theme.colors.icon_win
												: theme.colors.icon_loss,
								}}>
								{item.result === 'D' ? 'ἃ' : item.result === 'W' ? 'ἁ' : 'ἂ'}
							</Text>
						</View>
					);
				}}
				ItemSeparatorComponent={() => <View style={{ height: 0.4, backgroundColor: theme.colors.black }}></View>}
			/>
		</View>
	);
};

export default PreviousGames;
