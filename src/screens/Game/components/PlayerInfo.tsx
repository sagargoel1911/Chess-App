import { Image, StyleSheet, Text, View } from 'react-native';
import ImageLinks from 'src/assets/images/ImageLinks';
import theme from 'src/utils/theme';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingHorizontal: 12,
		gap: 8,
	},
	profile_pic: {
		width: 45,
		height: 45,
		borderRadius: 4,
	},
	name: {
		color: theme.colors.brand_color_text_light,
		fontFamily: theme.fonts.roboto,
		fontSize: 16,
	},
});

const PlayerInfo = () => {
	return (
		<View style={styles.container}>
			<Image source={ImageLinks.profile_pic} style={styles.profile_pic} />
			<View>
				<Text style={styles.name}>Opponent</Text>
			</View>
		</View>
	);
};

export default PlayerInfo;
