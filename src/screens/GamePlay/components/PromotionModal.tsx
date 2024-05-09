import { Modal } from 'native-base';
import { useContext } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import ImageLinks from 'src/assets/images/ImageLinks';
import theme from 'src/utils/theme';
import GamePlayContext from '../context';
import { COLORS } from '../constants';

const styles = StyleSheet.create({
	container: {
		padding: 25,
		backgroundColor: theme.colors.brand_color_dark,
		rowGap: 20,
		alignItems: 'center',
	},
	title: {
		color: theme.colors.white,
		fontFamily: theme.fonts.montserrat_black,
		fontSize: 20,
	},
	options_container: {
		flexDirection: 'row',
		gap: 14,
	},
	piece_conatainer: {
		backgroundColor: theme.colors.white,
	},
	piece_image: {
		width: 40,
		height: 40,
	},
});

const PromotionModal = () => {
	const { perform_promotion, is_open_promotion_modal, promotion_square } = useContext(GamePlayContext);

	const color = promotion_square[0] === 0 ? COLORS.WHITE : COLORS.BLACK;

	return (
		<Modal isOpen={is_open_promotion_modal}>
			<View style={styles.container}>
				<Text style={styles.title}>Choose a piece</Text>
				<View style={styles.options_container}>
					<Pressable
						style={styles.piece_conatainer}
						onPress={() => {
							perform_promotion(`${color}q`);
						}}>
						<Image source={ImageLinks[`${color}q`]} style={styles.piece_image} />
					</Pressable>
					<Pressable
						style={styles.piece_conatainer}
						onPress={() => {
							perform_promotion(`${color}r`);
						}}>
						<Image source={ImageLinks[`${color}r`]} style={styles.piece_image} />
					</Pressable>
					<Pressable
						style={styles.piece_conatainer}
						onPress={() => {
							perform_promotion(`${color}b`);
						}}>
						<Image source={ImageLinks[`${color}b`]} style={styles.piece_image} />
					</Pressable>
					<Pressable
						style={styles.piece_conatainer}
						onPress={() => {
							perform_promotion(`${color}n`);
						}}>
						<Image source={ImageLinks[`${color}n`]} style={styles.piece_image} />
					</Pressable>
				</View>
			</View>
		</Modal>
	);
};

export default PromotionModal;
