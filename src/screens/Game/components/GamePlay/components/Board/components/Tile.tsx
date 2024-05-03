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
	current_candidate_moves: any;
}

const Tile = ({ file, rank, current_candidate_moves }: Props) => {
	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: (file + rank) % 2 == 1 ? theme.colors.dark_square : theme.colors.light_square,
					alignItems: 'center',
					justifyContent: 'center',
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
			{current_candidate_moves[rank][file] === 1 && (
				<View
					style={{
						backgroundColor: (file + rank) % 2 == 1 ? theme.colors.dark_candidate_move : theme.colors.light_candidate_move,
						width: tile_size / 3,
						height: tile_size / 3,
						borderRadius: tile_size / 6,
					}}
				/>
			)}
			{current_candidate_moves[rank][file] === 2 && (
				<View
					style={{
						borderColor: (file + rank) % 2 == 1 ? theme.colors.dark_candidate_move : theme.colors.light_candidate_move,
						width: tile_size,
						height: tile_size,
						borderRadius: tile_size / 2,
						borderWidth: tile_size / 12,
					}}
				/>
			)}
		</View>
	);
};

export default Tile;
