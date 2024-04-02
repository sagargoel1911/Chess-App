import React from 'react'
import { Text, View } from 'react-native'
import theme from '../../../../../utils/theme'

interface Props{
	file_index: number,
	rank_index: number,
	tile_size: number,
	file: string,
	rank: number
}

const Tile = ({file_index,rank_index,tile_size,file,rank}:Props) => {
  return (
	<View  style={{width: tile_size, height: tile_size, backgroundColor: ((file_index+rank_index)%2==0)?theme.colors.dark_square:theme.colors.light_square}}>
						{((file_index===0 ))?<Text style={{fontSize: 10, fontWeight: "700", color: ((file_index+rank_index)%2==0)?theme.colors.light_square:theme.colors.dark_square, position:'absolute', top: 2, left: 2}}>
							{`${rank}`}
						</Text>:null}
						{((rank_index===0))?<Text style={{fontSize: 10, fontWeight: "700", color: ((file_index+rank_index)%2==0)?theme.colors.light_square:theme.colors.dark_square, position:'absolute', bottom: 2, right: 2}}>
							{`${file}`}
						</Text>:null}
					</View>
  )
}

export default Tile