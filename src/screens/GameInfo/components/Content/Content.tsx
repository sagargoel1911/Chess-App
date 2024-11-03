import { FlatList, Platform, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import _ from 'lodash';

import theme from 'src/utils/theme';
import Options from './components/Options';
import { COLORS } from '../../constants';
import { TIME_CONTROLS } from 'src/utils/constants';

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
		color: theme.colors.brand_color_text_light,
		fontSize: 24,
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
		width: 50,
		marginRight: -4,
	},
	time_toggle_container: {
		position: 'absolute',
		top: 43.8,
		zIndex: 1,
		alignSelf: 'center',
	},
	time_control: {
		flex: 1,
	},
});

interface Props {
	player_color: string;
	toggle_color: () => void;
	rotates: boolean;
	toggle_rotates: () => void;
	username: string;
	time_control: any;
	change_time_control: (new_time_control: any) => void;
	opponent_name: string;
	change_opponent_name: any;
}

const Content = ({
	player_color,
	toggle_color,
	rotates,
	toggle_rotates,
	username,
	time_control,
	change_time_control,
	opponent_name,
	change_opponent_name,
}: Props) => {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.heading}>
				<Text style={styles.heading_text}>Play with a friend offline</Text>
			</View>
			<View>
				<Pressable style={styles.time_toggle_container} onPress={toggle_color}>
					<Text style={styles.toggle_colors_logo}>Đ</Text>
				</Pressable>
				<Options
					title='White'
					CurrentOption={
						player_color === COLORS.WHITE ? (
							<Text style={styles.current_option}>{username}</Text>
						) : (
							<TextInput style={styles.current_option} value={opponent_name} onChangeText={change_opponent_name} />
						)
					}
					BelowComponent={null}
				/>
				<View style={styles.line} />
				<Options
					title='Black'
					CurrentOption={
						player_color === COLORS.BLACK ? (
							<Text style={styles.current_option}>{username}</Text>
						) : (
							<TextInput style={styles.current_option} value={opponent_name} onChangeText={change_opponent_name} />
						)
					}
					BelowComponent={null}
				/>
				<View style={styles.line} />
				<Options
					title='Time Control'
					CurrentOption={<Text style={styles.current_option}>{time_control.label}</Text>}
					BelowComponent={
						<FlatList
							scrollEnabled={false}
							data={TIME_CONTROLS}
							numColumns={3}
							renderItem={({ item, index }) => {
								const is_checked = _.isEqual(time_control, item);
								return (
									<View style={styles.time_control}>
										<Pressable
											key={index}
											style={[
												styles.item,
												{
													backgroundColor: is_checked
														? theme.colors.tile_selected
														: theme.colors.tile_unselected,
													borderWidth: is_checked ? 2 : 0,
												},
											]}
											onPress={() => change_time_control(item)}>
											<Text style={styles.item_text}>{item.label}</Text>
										</Pressable>
									</View>
								);
							}}
							columnWrapperStyle={{ gap: 11 }}
							contentContainerStyle={{ gap: 11 }}
						/>
					}
				/>
				{/* <View style={styles.line} /> */}
				{/* <Options
					title='Board Rotates'
					CurrentOption={
						<Switch
							style={[styles.switch, Platform.OS === 'android' && { height: 20 }]}
							value={rotates}
							thumbColor={rotates ? theme.colors.button_green : theme.colors.active_track_thumb}
							trackColor={{ true: theme.colors.active_track, false: theme.colors.inactive_track }}
							onValueChange={toggle_rotates}
						/>
					}
					BelowComponent={null}
				/> */}
			</View>
		</ScrollView>
	);
};

export default Content;
