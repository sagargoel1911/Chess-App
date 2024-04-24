import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import theme from '../../utils/theme';
import Footer from './components/Footer';
import Content from './components/Content/Content';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.brand_color_dark,
	},
});

const GameInfo = () => {
	return (
		<View style={styles.container}>
			<Header />
			<Content />
			<Footer />
		</View>
	);
};

export default GameInfo;
