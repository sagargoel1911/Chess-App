import { View } from 'react-native';

import Header from './components/Header';
import theme from '../../utils/theme';
import Footer from './components/Footer';
import Content from './components/Content/Content';

const GameInfo = () => {
	return (
		<View style={{ flex: 1, backgroundColor: theme.colors.brand_color_dark }}>
			<Header />
			<Content />
			<Footer />
		</View>
	);
};

export default GameInfo;
