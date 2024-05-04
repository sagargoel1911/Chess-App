import { StyleSheet, View } from 'react-native';
import _ from 'lodash';
import { useContext, useState } from 'react';

import Tile from './components/Tile';
import { files, ranks } from './constants';
import Piece from './components/Piece';
import GameContext from 'src/screens/GamePlay/context';

const styles = StyleSheet.create({
	board: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
});

const Board = () => {
	const { current_candidate_moves, current_position, change_position, get_candidate_moves, reset_candidate_moves } =
		useContext(GameContext);

	return (
		<View style={styles.board}>
			{_.map(ranks, (rank: number) => {
				return _.map(files, (file: number) => {
					return (
						<Tile key={`${file}${rank}_tile`} file={file} rank={rank} current_candidate_moves={current_candidate_moves} />
					);
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
								get_candidate_moves={get_candidate_moves}
								reset_candidate_moves={reset_candidate_moves}
							/>
						);
					}
				});
			})}
		</View>
	);
};

export default Board;
