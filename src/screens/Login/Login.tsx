import { Text, View } from 'react-native';
import theme from '../../utils/theme';
import Header from './components/Header';
import Content from './components/Content';

const Login = () => {
	return (
		<View style={{ flex: 1, backgroundColor: theme.colors.brand_color_dark }}>
			<Header />
			<Content />
		</View>
	);
};

export default Login;
