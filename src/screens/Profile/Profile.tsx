import { ScrollView, StyleSheet, View } from 'react-native';
import theme from '../../utils/theme';
import Header from './components/Header';
import UserInfo from './components/UserInfo';
import PreviousGames from './components/PreviousGames';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.brand_color_extra_dark,
	},
});

const Profile = () => {
	return (
		<View style={styles.container}>
			<Header />
			<ScrollView>
				<UserInfo />
				<PreviousGames />
			</ScrollView>
		</View>
	);
};

export default Profile;
