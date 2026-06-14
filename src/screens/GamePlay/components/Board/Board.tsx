import { StyleSheet, View } from 'react-native';
import _ from 'lodash';
import { useContext } from 'react';

import Tile from './components/Tile';
import { files, ranks } from './constants';
import Piece from './components/Piece';
import GameContext from 'src/screens/GamePlay/context';
import type { BoardPiece } from 'src/screens/GamePlay/useGamePlay';

const styles = StyleSheet.create({
	board: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
});

const Board = () => {
	const { board_pieces, current_candidate_moves } = useContext(GameContext);

	return (
		<View style={styles.board}>
			{_.map(ranks, (rank: number) => {
				return _.map(files, (file: number) => {
					return (
						<Tile
							key={`${file}${rank}_tile`}
							file={file}
							rank={rank}
							candidate_move_status={current_candidate_moves[rank][file]}
						/>
					);
				});
			})}
			{_.map(board_pieces, (piece: BoardPiece) => {
				return <Piece key={piece.id} id={piece.id} rank={piece.rank} file={piece.file} pic={piece.type} />;
			})}
		</View>
	);
};

export default Board;
