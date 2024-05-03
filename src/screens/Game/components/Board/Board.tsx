import { StyleSheet, View } from 'react-native';
import _ from 'lodash';
import { useState } from 'react';

import Tile from './components/Tile';
import { files, initial_position, ranks } from './constants';
import Piece from './components/Piece';

const styles = StyleSheet.create({
	board: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
});

const Board = () => {
	const [current_position, set_current_position] = useState<any>(initial_position);

	const change_position = (new_rank: number, new_file: number, rank: number, file: number) => {
		const new_position = _.cloneDeep(current_position);
		new_position[rank][file] = '';
		new_position[new_rank][new_file] = current_position[rank][file];
		set_current_position(new_position);
	};

	return (
		<View style={styles.board}>
			{_.map(ranks, (rank: number) => {
				return _.map(files, (file: number) => {
					return <Tile key={`${file}${rank}_tile`} file={file} rank={rank} />;
				});
			})}
			{_.map(ranks, (rank: number) => {
				return _.map(files, (file: number) => {
					if (current_position[rank][file] === '') {
						return null;
					} else {
						return (
							<Piece
								key={`${file}${rank}_piece`}
								rank={rank}
								file={file}
								current_position={current_position}
								change_position={change_position}
							/>
						);
					}
				});
			})}
		</View>
	);
};

export default Board;
