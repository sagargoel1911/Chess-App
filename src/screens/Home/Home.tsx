import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content/Content';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

const Home = () => {
	return (
		<View style={styles.container}>
			<Header />
			<Content />
			<Footer />
		</View>
	);
};

export default Home;
