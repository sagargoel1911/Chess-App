import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { useContext, useEffect } from 'react';

import ImageLinks from 'src/assets/images/ImageLinks';
import { tile_size } from '../constants';
import GamePlayContext from 'src/screens/GamePlay/context';

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
	},
	piece_image: {
		width: tile_size,
		height: tile_size,
	},
});

interface Props {
	file: number;
	rank: number;
	pic: string;
	id: string;
}

const Piece = ({ file, rank, pic, id }: Props) => {
	const { current_candidate_moves, get_piece_candidate_moves, change_position, reset_candidate_moves } = useContext(GamePlayContext);

	const offset = useSharedValue({ x: file * tile_size, y: rank * tile_size });
	const touch_offset = useSharedValue({ x: tile_size / 2, y: tile_size / 2 });
	const z_index = useSharedValue(100);

	useEffect(() => {
		offset.value = { x: file * tile_size, y: rank * tile_size };
		z_index.value = 100;
	}, [file, rank, offset, z_index]);

	const animatedStyles = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: offset.value.x }, { translateY: offset.value.y }],
			zIndex: z_index.value,
		} as any;
	});

	const gesture = Gesture.Pan()
		.onStart((e) => {
			'worklet';
			touch_offset.value = { x: e.x, y: e.y };
			offset.value = {
				x: file * tile_size + e.x - tile_size / 2,
				y: rank * tile_size + e.y - tile_size / 2,
			};
			z_index.value = 101;
			runOnJS(get_piece_candidate_moves)(rank, file);
		})
		.onChange((e) => {
			'worklet';
			offset.value = {
				x: file * tile_size + e.translationX + touch_offset.value.x - tile_size / 2,
				y: rank * tile_size + e.translationY + touch_offset.value.y - tile_size / 2,
			};
		})
		.onFinalize(() => {
			'worklet';

			const new_rank = Math.floor((offset.value.y + tile_size / 2) / tile_size);
			const new_file = Math.floor((offset.value.x + tile_size / 2) / tile_size);
			const is_off_board = new_rank >= 8 || new_file >= 8 || new_rank < 0 || new_file < 0;

			if ((rank === new_rank && file === new_file) || is_off_board || current_candidate_moves[new_rank][new_file] === 0) {
				z_index.value = 100;
				offset.value = { x: file * tile_size, y: rank * tile_size };
			} else {
				runOnJS(change_position)(new_rank, new_file, rank, file, pic);
			}
			runOnJS(reset_candidate_moves)();
		});

	return (
		<GestureDetector gesture={gesture} key={id}>
			<Animated.View style={[styles.container, animatedStyles]}>
				<Image source={ImageLinks[pic]} style={styles.piece_image} />
			</Animated.View>
		</GestureDetector>
	);
};

export default Piece;
