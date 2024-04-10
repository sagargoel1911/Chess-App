import { FlatList, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';

import theme from '../../../../utils/theme';
import Options from './components/Options';
import TIME_CONTROLS from './constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	heading: {
		height: 58,
		alignItems: 'center',
		justifyContent: 'center',
	},
	heading_text: {
		color: theme.colors.brand_color_text_light,
		fontWeight: '700',
	},
	toggle_colors_logo: {
		fontFamily: theme.fonts.chess,
		position: 'absolute',
		color: theme.colors.brand_color_text_light,
		fontSize: 24,
		top: 44,
		zIndex: 1,
		alignSelf: 'center',
	},
	line: {
		backgroundColor: theme.colors.black,
		height: 0.4,
	},
	current_option: {
		color: theme.colors.white,
		fontSize: 16,
	},
	item: {
		height: 44,
		flex: 1,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: theme.colors.button_green,
	},
	item_text: {
		color: theme.colors.white,
		fontWeight: '500',
		fontSize: 16,
	},
	switch: {
		height: 20,
		width: 50,
		marginRight: -4,
	},
});

const Content = () => {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.heading}>
				<Text style={styles.heading_text}>Play with a friend offline</Text>
			</View>
			<View>
				<Text style={styles.toggle_colors_logo}>Đ</Text>
				<Options title='White' CurrentOption={<Text style={styles.current_option}>Username</Text>} BelowComponent={null} />
				<View style={styles.line} />
				<Options title='Black' CurrentOption={<Text style={styles.current_option}>Opponent</Text>} BelowComponent={null} />
				<View style={styles.line} />
				<Options
					title='Time Control'
					CurrentOption={<Text style={styles.current_option}>None</Text>}
					BelowComponent={
						<FlatList
							data={TIME_CONTROLS}
							numColumns={3}
							renderItem={({ item, index }) => {
								return (
									<View
										key={index}
										style={[
											styles.item,
											{
												backgroundColor:
													item !== 'None' ? theme.colors.tile_unselected : theme.colors.tile_selected,
												borderWidth: item !== 'None' ? 0 : 2,
											},
										]}>
										<Text style={styles.item_text}>{item}</Text>
									</View>
								);
							}}
							columnWrapperStyle={{ gap: 11 }}
							contentContainerStyle={{ gap: 11 }}
						/>
					}
				/>
				<View style={styles.line} />
				<Options
					title='Board Rotates'
					CurrentOption={
						<Switch
							style={styles.switch}
							value={true}
							thumbColor={true ? theme.colors.button_green : theme.colors.active_track_thumb}
							trackColor={{ true: theme.colors.active_track, false: theme.colors.inactive_track }}
						/>
					}
					BelowComponent={null}
				/>
			</View>
		</ScrollView>
	);
};

export default Content;
