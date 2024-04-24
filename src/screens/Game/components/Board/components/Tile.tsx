import React from 'react';
import { Text, View } from 'react-native';
import theme from '../../../../../utils/theme';
import { tile_size } from '../constants';

interface Props {
	file: number;
	rank: number;
}

const Tile = ({ file, rank }: Props) => {
	return (
		<View
			style={{
				width: tile_size,
				height: tile_size,
				backgroundColor: (file + rank) % 2 == 1 ? theme.colors.dark_square : theme.colors.light_square,
			}}>
			{file === 0 ? (
				<Text
					style={{
						fontSize: 10,
						fontWeight: '700',
						color: (file + rank) % 2 == 1 ? theme.colors.light_square : theme.colors.dark_square,
						position: 'absolute',
						top: 2,
						left: 2,
					}}>
					{`${8 - rank}`}
				</Text>
			) : null}
			{rank === 7 ? (
				<Text
					style={{
						fontSize: 10,
						fontWeight: '700',
						color: (file + rank) % 2 == 1 ? theme.colors.light_square : theme.colors.dark_square,
						position: 'absolute',
						bottom: 2,
						right: 2,
					}}>
					{`${String.fromCharCode(97 + file)}`}
				</Text>
			) : null}
		</View>
	);
};

export default Tile;
