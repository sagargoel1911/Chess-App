import { Dimensions, View } from "react-native"
import _ from 'lodash'
import Tile from "./components/Tile";

const Board = () => {
	const ranks: number[] = [1,2,3,4,5,6,7,8];
	const files: string[] = ['a','b','c','d','e','f','g','h'];
	const windowWidth = Dimensions.get('window').width;
	const tile_size = windowWidth/8;
  return (
	<View style={{flexDirection:'row', flexWrap:'wrap-reverse'}}>
		{
			_.map(ranks,(rank: number, rank_index: number)=>{
				return _.map(files,(file: string, file_index: number)=>{
					return <Tile key={`${file}${rank}`} rank_index={rank_index} file_index={file_index} tile_size={tile_size} file={file} rank={rank}/>
				})
			})
		}
	</View>
  )
}

export default Board