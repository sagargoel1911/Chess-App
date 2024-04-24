import { StyleSheet, Text, View } from 'react-native';

import theme from 'src/utils/theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.brand_color_dark,
		alignItems: 'center',
		paddingTop: 10,
	},
	title_text: {
		fontFamily: theme.fonts.montserrat_extra_bold,
		color: theme.colors.white,
		fontSize: 22,
	},
});

const Learn = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title_text}>Learn Chess</Text>
		</View>
	);
};

export default Learn;
