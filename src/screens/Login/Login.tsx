import { StyleSheet, View } from 'react-native';

import theme from '../../utils/theme';
import Header from './components/Header';
import Content from './components/Content';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.brand_color_dark,
	},
});

const Login = () => {
	return (
		<View style={styles.container}>
			<Header />
			<Content />
		</View>
	);
};

export default Login;
