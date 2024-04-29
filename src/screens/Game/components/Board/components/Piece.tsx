import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';

import ImageLinks from 'src/assets/images/ImageLinks';
import { tile_size } from '../constants';

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
	},
	piece_image: {
		width: tile_size,
		height: tile_size,
	},
});

interface Props {
	file: number;
	rank: number;
	current_position: any;
	change_position: any;
}

const Piece = ({ file, rank, current_position, change_position }: Props) => {
	const offset = useSharedValue({ x: 0, y: 0 });
	const z_index = useSharedValue(100);

	const animatedStyles = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: offset.value.x }, { translateY: offset.value.y }],
		};
	});

	const pic = `${current_position[rank][file]}`;

	const gesture = Gesture.Pan()
		.onStart(() => {
			'worklet';
			z_index.value = 101;
		})
		.onChange((e) => {
			'worklet';
			offset.value = {
				x: e.x - tile_size / 2 + offset.value.x,
				y: e.y - tile_size / 2 + offset.value.y,
			};
		})
		.onFinalize(() => {
			'worklet';

			const new_rank = rank + Math.floor((offset.value.y + tile_size / 2) / tile_size);
			const new_file = file + Math.floor((offset.value.x + tile_size / 2) / tile_size);

			if (rank === new_rank && file === new_file) {
				z_index.value = 100;
				offset.value = {
					x: 0,
					y: 0,
				};
			} else {
				runOnJS(change_position)(new_rank, new_file, rank, file);
			}
		});
	return (
		<GestureDetector gesture={gesture} key={`${rank}${file}`}>
			<Animated.View
				style={[
					{
						zIndex: z_index,
						top: tile_size * rank,
						left: tile_size * file,
					},
					styles.container,
					animatedStyles,
				]}>
				<Image source={ImageLinks[pic]} style={styles.piece_image} />
			</Animated.View>
		</GestureDetector>
	);
};

export default Piece;
