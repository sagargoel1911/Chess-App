import { StyleSheet, View } from 'react-native';

import theme from '../../utils/theme';
import Header from './components/Header';
import Username from './components/Username';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.brand_color_dark,
	},
});

const SignUp = () => {
	return (
		<View style={styles.container}>
			<Header />
			{/* <Main /> */}
			{/* <Email /> */}
			{/* <Password /> */}
			<Username />
		</View>
	);
};

export default SignUp;
