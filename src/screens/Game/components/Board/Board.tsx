import { View } from 'react-native';
import _ from 'lodash';
import Tile from './components/Tile';
import { files, ranks } from './constants';

const Board = () => {
	return (
		<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
			{_.map(ranks, (rank: number) => {
				return _.map(files, (file: number) => {
					return <Tile key={`${file}${rank}`} file={file} rank={rank} />;
				});
			})}
		</View>
	);
};

export default Board;
