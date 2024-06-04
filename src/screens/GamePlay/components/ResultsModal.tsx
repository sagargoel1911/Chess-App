import { Modal } from 'native-base';
import { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';

import theme from 'src/utils/theme';
import GamePlayContext from '../context';
import { RESULTS } from '../constants';

const styles = {
	container: {
		padding: 25,
		alignItems: 'center',
		rowGap: 5,
	},
	result: {
		fontFamily: theme.fonts.montserrat_black,
		color: theme.colors.white,
		fontSize: 20,
	},
	result_description: {
		color: theme.colors.white,
	},
	close_button: {
		position: 'absolute',
		left: 4,
		top: 4,
	},
	close_icon: {
		fontFamily: theme.fonts.chess,
		color: theme.colors.white,
	},
};

const ResultsModal = () => {
	const { is_open_results_modal, close_results_modal, result, result_description } = useContext(GamePlayContext);
	return (
		<Modal isOpen={is_open_results_modal}>
			<View
				style={[
					{
						backgroundColor:
							result === RESULTS.DRAW
								? theme.colors.modal_draw_background
								: result === RESULTS.WHITE_WON
									? theme.colors.modal_white_background
									: theme.colors.modal_black_background,
					},
					styles.container,
				]}>
				<Text style={styles.result}>{result}</Text>
				<Text style={styles.result_description}>by {result_description}</Text>
				<Pressable style={styles.close_button} onPress={close_results_modal}>
					<Text style={styles.close_icon}>B</Text>
				</Pressable>
			</View>
		</Modal>
	);
};

export default ResultsModal;
