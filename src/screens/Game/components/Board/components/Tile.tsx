import { StyleSheet, Text, View } from 'react-native';

import theme from 'src/utils/theme';
import { tile_size } from '../constants';

const styles = StyleSheet.create({
	container: {
		width: tile_size,
		height: tile_size,
	},
	tile_text_rank: {
		position: 'absolute',
		top: 2,
		left: 2,
		fontSize: 10,
		fontWeight: '700',
	},
	tile_text_file: {
		position: 'absolute',
		bottom: 2,
		right: 2,
		fontSize: 10,
		fontWeight: '700',
	},
});

interface Props {
	file: number;
	rank: number;
}

const Tile = ({ file, rank }: Props) => {
	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: (file + rank) % 2 == 1 ? theme.colors.dark_square : theme.colors.light_square,
				},
			]}>
			{file === 0 ? (
				<Text
					style={[
						{
							color: (file + rank) % 2 == 1 ? theme.colors.light_square : theme.colors.dark_square,
						},
						styles.tile_text_rank,
					]}>
					{`${8 - rank}`}
				</Text>
			) : null}
			{rank === 7 ? (
				<Text
					style={[
						{
							color: (file + rank) % 2 == 1 ? theme.colors.light_square : theme.colors.dark_square,
						},
						styles.tile_text_file,
					]}>
					{`${String.fromCharCode(97 + file)}`}
				</Text>
			) : null}
		</View>
	);
};

export default Tile;
