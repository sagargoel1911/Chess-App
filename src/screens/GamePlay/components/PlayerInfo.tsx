import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { useContext } from 'react';
import dayjs from 'dayjs';

import ImageLinks from 'src/assets/images/ImageLinks';
import theme from 'src/utils/theme';
import GamePlayContext from '../context';
import { COLORS } from '../constants';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingHorizontal: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	profile_pic: {
		width: 45,
		height: 45,
		borderRadius: 4,
	},
	name: {
		color: theme.colors.brand_color_text_light,
		fontFamily: theme.fonts.roboto,
		fontSize: 16,
	},
});

interface Props {
	name: string;
	color: string;
}

const PlayerInfo = ({ name, color }: Props) => {
	const { white_time_left, black_time_left, time_control } = useContext(GamePlayContext);

	const time_left = color === COLORS.WHITE ? white_time_left : black_time_left;

	return (
		<View style={styles.container}>
			<View style={{ flexDirection: 'row', gap: 8 }}>
				<Image source={ImageLinks.profile_pic} style={styles.profile_pic} />
				<View>
					<Text style={styles.name}>{name}</Text>
				</View>
			</View>
			{time_control.label !== 'None' && (
				<View
					style={{
						backgroundColor: theme.colors.white,
						justifyContent: 'center',
						padding: 6,
						borderRadius: 6,
						flexDirection: 'row',
						columnGap: 6,
						alignItems: 'center',
					}}>
					<Text
						style={{
							fontFamily: theme.fonts.chess,
							color: theme.colors.black,
							fontSize: 20,
						}}>
						Ἓ
					</Text>
					<Text style={{ color: theme.colors.black, fontWeight: 'bold', fontSize: 18 }}>
						{dayjs(time_left).utc().format('mm:ss')}
					</Text>
				</View>
			)}
		</View>
	);
};

export default PlayerInfo;
